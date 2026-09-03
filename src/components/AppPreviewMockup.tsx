import React, { useRef, useState, useEffect } from 'react';
import { 
  Bell, 
  QrCode, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  Smartphone,
  Rocket
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ScreenMockup {
  id: string;
  title: string;
  category: string;
  badge: string;
  renderScreen: () => React.ReactNode;
}

export const AppPreviewMockup: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const index = Math.round(scrollLeft / 300);
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
    const offset = direction === 'left' ? -320 : 320;
    scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    trackEvent('screenshot_gallery_scroll', { direction });
  };

  const scrollToScreen = (index: number) => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollTo({ left: index * 300, behavior: 'smooth' });
  };

  const screens: ScreenMockup[] = [
    // 1. Student Dashboard
    {
      id: 'dashboard',
      title: 'Student Dashboard',
      category: 'CENTRAL HUB',
      badge: 'Core Workflow',
      renderScreen: () => (
        <div className="phone-screen-body">
          <div className="screen-header-row">
            <div>
              <span className="screen-tag">CAMPUS CONNECT</span>
              <h4 className="screen-heading">Dashboard</h4>
            </div>
            <div className="screen-icon-bubble">
              <Sparkles size={14} />
            </div>
          </div>

          <div className="screen-blue-card">
            <div className="screen-notice-header">
              <Bell size={11} /> Important Circular
            </div>
            <div className="screen-notice-title">Annual Tech Symposium 2026</div>
            <div className="screen-notice-desc">Registrations now open for CS Department Hackathon.</div>
          </div>

          <div className="screen-stat-card">
            <div>
              <span className="screen-stat-label">Semester Attendance</span>
              <div className="screen-stat-number">82.4%</div>
              <span className="screen-stat-pill">✓ Good Standing</span>
            </div>
            <div className="screen-ring-badge">82%</div>
          </div>

          <div className="screen-section-block">
            <div className="screen-block-header">
              <span>Today's Lectures</span>
              <span className="screen-link">Full Schedule</span>
            </div>
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Data Structures</span>
                <span className="screen-tile-time">10:45 AM</span>
              </div>
              <span className="screen-tile-sub">Room 204 • Prof. K. Deshmukh</span>
            </div>
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Operating Systems Lab</span>
                <span className="screen-tile-time">01:30 PM</span>
              </div>
              <span className="screen-tile-sub">Lab 2 • Practical Batch A</span>
            </div>
          </div>
        </div>
      )
    },
    // 2. Academics
    {
      id: 'academics',
      title: 'Academics',
      category: 'STUDY',
      badge: 'Curriculum & Lectures',
      renderScreen: () => (
        <div className="phone-screen-body">
          <div className="screen-header-row">
            <div>
              <span className="screen-tag">ACADEMIC WORKSPACE</span>
              <h4 className="screen-heading">Weekly Timetable</h4>
            </div>
          </div>

          <div className="screen-day-selector">
            <span className="screen-day-pill active">Mon</span>
            <span className="screen-day-pill">Tue</span>
            <span className="screen-day-pill">Wed</span>
            <span className="screen-day-pill">Thu</span>
            <span className="screen-day-pill">Fri</span>
          </div>

          <div className="screen-section-block">
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">09:00 AM — Data Structures</span>
                <span className="screen-time-tag">Theory</span>
              </div>
              <span className="screen-tile-sub">Room 204 • CS Faculty</span>
            </div>
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">10:45 AM — OS Practical</span>
                <span className="screen-time-tag">Lab</span>
              </div>
              <span className="screen-tile-sub">Computer Lab 2 • Batch A</span>
            </div>
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">01:00 PM — Web Architecture</span>
                <span className="screen-time-tag">Lecture</span>
              </div>
              <span className="screen-tile-sub">Room 205 • Guest Session</span>
            </div>
          </div>
        </div>
      )
    },
    // 3. Attendance
    {
      id: 'attendance',
      title: 'Attendance',
      category: 'TRACK',
      badge: 'Compliance & Analytics',
      renderScreen: () => (
        <div className="phone-screen-body">
          <div className="screen-header-row">
            <div>
              <span className="screen-tag">ATTENDANCE COMPLIANCE</span>
              <h4 className="screen-heading">75% Threshold</h4>
            </div>
          </div>

          <div className="screen-stat-card">
            <div>
              <span className="screen-stat-label">Total Completed</span>
              <div className="screen-stat-number">142 / 172</div>
              <span className="screen-stat-pill">82.5% Aggregate</span>
            </div>
            <div className="screen-ring-badge">82%</div>
          </div>

          <div className="screen-section-block">
            <div className="screen-block-header">
              <span>Subject Breakdown</span>
            </div>
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Advanced Java</span>
                <span className="screen-tile-val">88%</span>
              </div>
              <div className="screen-progress-bar">
                <div className="screen-progress-fill" style={{ width: '88%' }} />
              </div>
            </div>
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Software Engineering</span>
                <span className="screen-tile-val">81%</span>
              </div>
              <div className="screen-progress-bar">
                <div className="screen-progress-fill" style={{ width: '81%' }} />
              </div>
            </div>
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Computer Networks</span>
                <span className="screen-tile-val">79%</span>
              </div>
              <div className="screen-progress-bar">
                <div className="screen-progress-fill" style={{ width: '79%' }} />
              </div>
            </div>
          </div>
        </div>
      )
    },
    // 4. Events
    {
      id: 'events',
      title: 'Events',
      category: 'PARTICIPATE',
      badge: 'Campus Life & Fests',
      renderScreen: () => (
        <div className="phone-screen-body">
          <div className="screen-header-row">
            <div>
              <span className="screen-tag">CAMPUS ACTIVITIES</span>
              <h4 className="screen-heading">Events &amp; Fests</h4>
            </div>
          </div>

          <div className="screen-section-block">
            <div className="screen-notice-card">
              <span className="screen-chip-tag">TECH SYMPOSIUM</span>
              <div className="screen-notice-head">HackBirlanight 2026</div>
              <div className="screen-notice-txt">24-hour inter-collegiate coding hackathon hosted by CS Department.</div>
              <span className="screen-meta-date">Date: 18th Oct 2026 • Main Lab</span>
            </div>

            <div className="screen-notice-card" style={{ marginTop: '8px' }}>
              <span className="screen-chip-tag" style={{ background: '#FEF3C7', color: '#B45309' }}>CULTURAL</span>
              <div className="screen-notice-head">Udaan Youth Fest</div>
              <div className="screen-notice-txt">Annual cultural carnival featuring drama, music and debate.</div>
              <span className="screen-meta-date">Date: 25th Nov 2026 • Auditorium</span>
            </div>
          </div>
        </div>
      )
    },
    // 5. E-Cell
    {
      id: 'ecell',
      title: 'E-Cell',
      category: 'EXPLORE',
      badge: 'Vision to Venture',
      renderScreen: () => (
        <div className="phone-screen-body">
          <div className="screen-header-row">
            <div>
              <span className="screen-tag">ENTREPRENEURSHIP CELL</span>
              <h4 className="screen-heading">Vision to Venture</h4>
            </div>
            <div className="screen-icon-bubble" style={{ color: '#0F172A', background: '#FEF3C7' }}>
              <Rocket size={14} />
            </div>
          </div>

          <div className="screen-blue-card" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)' }}>
            <div className="screen-notice-header" style={{ color: '#38BDF8' }}>
              Incubation Portal
            </div>
            <div className="screen-notice-title">Founder Pitch Day 2026</div>
            <div className="screen-notice-desc">Present your student startup idea to alumni investors and mentors.</div>
          </div>

          <div className="screen-section-block">
            <div className="screen-item-tile">
              <span className="screen-tile-name">Campus Stalls Registration</span>
              <span className="screen-tile-sub">Book student enterprise booth for Winter Carnival</span>
            </div>
            <div className="screen-item-tile">
              <span className="screen-tile-name">Ideation Workshops</span>
              <span className="screen-tile-sub">Bi-weekly product design &amp; pitch clinics</span>
            </div>
          </div>
        </div>
      )
    },
    // 6. Digital ID
    {
      id: 'digital-id',
      title: 'Digital ID',
      category: 'TRACK',
      badge: 'Identity & Access',
      renderScreen: () => (
        <div className="phone-screen-body">
          <div className="screen-header-row">
            <div>
              <span className="screen-tag">INSTITUTIONAL ID</span>
              <h4 className="screen-heading">Digital Student Card</h4>
            </div>
          </div>

          <div className="screen-id-card-visual">
            <div className="screen-id-top">
              <div>
                <span className="screen-id-college">B. K. BIRLA NIGHT COLLEGE</span>
                <div className="screen-id-dept">Dept. of Computer Science</div>
              </div>
              <QrCode size={18} color="#FFFFFF" />
            </div>

            <div className="screen-id-profile">
              <div className="screen-id-avatar">AM</div>
              <div>
                <div className="screen-id-name">ATHARVA M.</div>
                <div className="screen-id-roll">Roll: BKBCS-2026-042</div>
                <div className="screen-id-batch">Academic Year: 2025–2027</div>
              </div>
            </div>

            <div className="screen-id-qr-box">
              <QrCode size={40} color="#0F172A" />
              <div>
                <span className="screen-id-qr-title">Verified Student Pass</span>
                <span className="screen-id-qr-sub">Authorized for Gate &amp; Library Access</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // 7. Assignments
    {
      id: 'assignments',
      title: 'Assignments',
      category: 'STUDY',
      badge: 'Coursework & Deadlines',
      renderScreen: () => (
        <div className="phone-screen-body">
          <div className="screen-header-row">
            <div>
              <span className="screen-tag">ACADEMIC TASKS</span>
              <h4 className="screen-heading">Assignments</h4>
            </div>
          </div>

          <div className="screen-section-block">
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Graph Algorithms Lab Report</span>
                <span className="screen-status-badge pending">Due Tomorrow</span>
              </div>
              <span className="screen-tile-sub">CS501 • Prof. K. Deshmukh</span>
            </div>

            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">ER Diagram Case Study</span>
                <span className="screen-status-badge submitted">Submitted</span>
              </div>
              <span className="screen-tile-sub">CS502 • Graded: A (9/10)</span>
            </div>

            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Socket Programming Task</span>
                <span className="screen-status-badge">Due in 5 Days</span>
              </div>
              <span className="screen-tile-sub">CS504 • Networking Lab</span>
            </div>
          </div>
        </div>
      )
    },
    // 8. Results
    {
      id: 'results',
      title: 'Results',
      category: 'STUDY',
      badge: 'Grades & Evaluation',
      renderScreen: () => (
        <div className="phone-screen-body">
          <div className="screen-header-row">
            <div>
              <span className="screen-tag">INTERNAL EVALUATION</span>
              <h4 className="screen-heading">Semester Scores</h4>
            </div>
          </div>

          <div className="screen-stat-card">
            <div>
              <span className="screen-stat-label">SGPA Performance</span>
              <div className="screen-stat-number" style={{ color: '#1D4ED8' }}>9.15</div>
              <span className="screen-stat-pill">Grade: Outstanding (O)</span>
            </div>
            <div className="screen-ring-badge" style={{ borderColor: '#1D4ED8', color: '#1D4ED8' }}>
              A+
            </div>
          </div>

          <div className="screen-section-block">
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Data Structures (Theory)</span>
                <span className="screen-tile-val">46/50</span>
              </div>
            </div>
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Operating Systems (Theory)</span>
                <span className="screen-tile-val">44/50</span>
              </div>
            </div>
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Web Architecture Lab</span>
                <span className="screen-tile-val">48/50</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

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
              One platform. Every part of campus life.
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
          {screens.map((screen) => (
            <div key={screen.id} className="device-frame-card">
              {/* Outer Phone Bezel */}
              <div className="device-bezel">
                {/* Speaker Notch & Camera Pin */}
                <div className="device-notch">
                  <div className="device-speaker" />
                  <div className="device-camera" />
                </div>

                {/* Render Native UI Screen */}
                <div className="device-viewport">
                  {screen.renderScreen()}
                </div>
              </div>

              {/* Card Label Under Phone */}
              <div className="device-caption">
                <div className="caption-title-row">
                  <span className="caption-title">{screen.title}</span>
                  <span className="caption-badge">{screen.badge}</span>
                </div>
                <span className="caption-category">{screen.category}</span>
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

      </div>
    </section>
  );
};
