import React, { useRef, useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight,
  Smartphone,
  Maximize2,
  X
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ScreenMockup {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  modules: string[];
}

export const AppPreviewMockup: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [previewModalImage, setPreviewModalImage] = useState<string | null>(null);

  const screens: ScreenMockup[] = [
    {
      id: 'home',
      title: 'Home Dashboard',
      category: 'DAILY HUB',
      badge: 'Core Workflow',
      image: '/assets/screens/screen-home.png',
      modules: [
        'Hi, Atharv 👋 greeting & date banner',
        'Timetable alert: "All Caught Up / No classes scheduled"',
        'Attendance tracker with Risk <75% warning',
        'Daily Check-In (+10 pts/day & streak tracking)',
        'Quick Access: Attendance, Timetable, Tasks, Results, Digital ID, Ranks, E-Cell'
      ]
    },
    {
      id: 'academics',
      title: 'Academics Workspace',
      category: 'STUDIES',
      badge: 'Curriculum & Records',
      image: '/assets/screens/screen-academics.png',
      modules: [
        'Lectures: Live & upcoming sessions',
        'Timetable: Your weekly schedule',
        'Attendance: History & percentage',
        'Assignments: Tasks & submissions',
        'Documents: Notes & study material',
        'Results: Exam performance',
        'Learning Circles: Enrolled programmes',
        'Scan Attendance: Mark yourself present'
      ]
    },
    {
      id: 'community',
      title: 'Campus Community',
      category: 'CAMPUS LIFE',
      badge: 'Campus Life, Together',
      image: '/assets/screens/screen-community.png',
      modules: [
        'Events: Campus events & registrations',
        'Announcements: Important campus updates',
        'Leaderboard: Class & college rankings',
        'Learning Circles: Communities you\'ve joined',
        'Points: Rewards & activity balance',
        'Help & Support: Reach the campus team'
      ]
    },
    {
      id: 'ecell',
      title: 'Entrepreneurship Cell (E-Cell)',
      category: 'INNOVATION',
      badge: 'Vision to Venture',
      image: '/assets/screens/screen-ecell.png',
      modules: [
        'B. K. Birla Night College, Kalyan E-Cell',
        'Pathway: Ideas → Innovation → Entrepreneurship → Impact',
        'Register a Stall: 100 vendor slots available',
        'Explore Events & pitch competitions',
        'Submit Idea & Claim Points',
        'Total Initiatives (1 upcoming or live)'
      ]
    },
    {
      id: 'profile',
      title: 'Student Profile & Account',
      category: 'IDENTITY',
      badge: 'Verified Student',
      image: '/assets/screens/screen-profile.png',
      modules: [
        'Student Identity: Atharv Jadhav (SYCS B.Sc. CS 1151061)',
        'Institution: B. K. Birla Night Arts, Science & Commerce College',
        'Profile Completion Tracker (100% Complete)',
        'Role: Student | Status: Active | Year: SY',
        'Account: Edit profile, Privacy, and Security controls',
        'Preferences: Lecture & announcement notifications'
      ]
    }
  ];

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const index = Math.round(scrollLeft / 320);
    setActiveScreenIndex(Math.min(Math.max(index, 0), screens.length - 1));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
    }
    return () => el?.removeEventListener('scroll', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const offset = direction === 'left' ? -340 : 340;
    scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    trackEvent('screenshot_gallery_scroll', { direction });
  };

  const scrollToScreen = (index: number) => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollTo({ left: index * 320, behavior: 'smooth' });
  };

  return (
    <section id="screenshots" className="gallery-showcase-section">
      <div className="product-container">
        
        {/* Showcase Header */}
        <div className="gallery-section-header">
          <div>
            <span className="section-super-eyebrow">
              <Smartphone size={14} /> Authentic App Interface
            </span>
            <h2 className="section-main-heading">See Campus Connect in Action</h2>
            <p className="section-sub-copy">
              Real screenshots from the official Android app for B. K. Birla Night College.
            </p>
          </div>

          {/* Desktop Carousel Controls */}
          <div className="gallery-desktop-controls">
            <button 
              type="button" 
              className={`gallery-nav-btn ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              type="button" 
              className={`gallery-nav-btn ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next screenshot"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Screenshot Scroll Gallery */}
        <div className="gallery-scroll-container" ref={scrollContainerRef}>
          {screens.map((screen, idx) => (
            <div key={screen.id} className="device-frame-card">
              {/* Outer Phone Bezel with Real Screenshot */}
              <div 
                className="device-bezel has-real-screenshot"
                onClick={() => setPreviewModalImage(screen.image)}
                title="Click to expand screenshot"
              >
                {/* Device Viewport with Image */}
                <div className="device-viewport">
                  <img 
                    src={screen.image} 
                    alt={`Campus Connect - ${screen.title}`} 
                    className="device-screen-real-img"
                    loading={idx < 2 ? "eager" : "lazy"}
                  />
                  <div className="device-expand-overlay">
                    <Maximize2 size={16} />
                    <span>View Screenshot</span>
                  </div>
                </div>
              </div>

              {/* Card Label Under Phone */}
              <div className="device-caption">
                <div className="caption-title-row">
                  <span className="caption-title">{screen.title}</span>
                  <span className="caption-badge">{screen.badge}</span>
                </div>
                <span className="caption-category">{screen.category}</span>

                {/* Modules list strictly from image */}
                <ul className="screen-features-bullet-list">
                  {screen.modules.map((mod, mIdx) => (
                    <li key={mIdx}>{mod}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Indicator Dots */}
        <div className="gallery-pagination-dots" role="tablist" aria-label="Screenshots pagination">
          {screens.map((screen, idx) => (
            <button
              key={screen.id}
              type="button"
              className={`pagination-dot ${activeScreenIndex === idx ? 'active' : ''}`}
              onClick={() => scrollToScreen(idx)}
              aria-label={`Go to screenshot ${idx + 1}: ${screen.title}`}
              role="tab"
              aria-selected={activeScreenIndex === idx}
            />
          ))}
        </div>

        {/* Modal for full screenshot view */}
        {previewModalImage && (
          <div 
            className="screenshot-modal-backdrop" 
            onClick={() => setPreviewModalImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Screenshot Preview"
          >
            <div className="screenshot-modal-card" onClick={(e) => e.stopPropagation()}>
              <button 
                type="button" 
                className="screenshot-modal-close" 
                onClick={() => setPreviewModalImage(null)}
                aria-label="Close Preview"
              >
                <X size={20} />
              </button>
              <img 
                src={previewModalImage} 
                alt="Enlarged Campus Connect Screenshot" 
                className="screenshot-modal-img" 
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
