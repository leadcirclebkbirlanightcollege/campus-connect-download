import React, { useRef, useState, useEffect } from 'react';
import { 
  Bell, 
  QrCode, 
  Sparkles, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  Smartphone,
  Rocket
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ScreenCard {
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
  const [activeIndex, setActiveIndex] = useState(0);

  const screens: ScreenCard[] = [
    {
      id: 'dashboard',
      title: 'Student Dashboard',
      category: 'Home',
      badge: 'Main Hub',
      renderScreen: () => (
        <div className="phone-screen-body">
          <div className="screen-header-row">
            <div>
              <span className="screen-tag">CAMPUS CONNECT</span>
              <h3 className="screen-heading">Good Morning, Student</h3>
            </div>
            <div className="screen-icon-bubble">
              <Bell size={14} />
            </div>
          </div>

          <div className="screen-blue-card">
            <div className="screen-notice-header">
              <Sparkles size={12} /> Official Notice
            </div>
            <div className="screen-notice-title">Dept. of Computer Science</div>
            <p className="screen-notice-desc">Tech Fest registration is now live for all semester students.</p>
          </div>

          <div className="screen-stat-card">
            <div>
              <span className="screen-stat-label">Overall Attendance</span>
              <div className="screen-stat-number">88.4%</div>
              <span className="screen-stat-pill">• Compliant (Min. 75%)</span>
            </div>
            <div className="screen-ring-badge">88%</div>
          </div>

          <div className="screen-section-block">
            <div className="screen-block-header">
              <span>Today's Schedule</span>
              <span className="screen-link">Timetable</span>
            </div>
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Data Structures & Algo</span>
                <span className="screen-tile-time">09:00 - 10:30</span>
              </div>
              <span className="screen-tile-sub">Lab 3 • Dept. of Computer Science</span>
            </div>
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Database Systems</span>
                <span className="screen-tile-time">10:45 - 12:15</span>
              </div>
              <span className="screen-tile-sub">Room 204 • Prof. Sharma</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'attendance',
      title: 'Attendance Tracker',
      category: 'Attendance',
      badge: 'Live Sync',
      renderScreen: () => (
        <div className="phone-screen-body">
          <span className="screen-tag">ACADEMIC ATTENDANCE</span>
          <h3 className="screen-heading">Lecture Records</h3>

          <div className="screen-stat-card" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '16px' }}>
            <div className="screen-stat-number" style={{ fontSize: '28px' }}>88.4%</div>
            <span className="screen-stat-label" style={{ marginTop: '2px' }}>Current Aggregate Attendance</span>
            <span className="screen-stat-pill" style={{ marginTop: '6px' }}>Status: Approved for Semester Exams</span>
          </div>

          <div className="screen-section-block">
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Data Structures</span>
                <span className="screen-tile-val">92%</span>
              </div>
              <span className="screen-tile-sub">CS501 • 23 / 25 Lectures Attended</span>
              <div className="screen-progress-bar"><div className="screen-progress-fill" style={{ width: '92%' }}></div></div>
            </div>

            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Computer Networks</span>
                <span className="screen-tile-val">85%</span>
              </div>
              <span className="screen-tile-sub">CS502 • 17 / 20 Lectures Attended</span>
              <div className="screen-progress-bar"><div className="screen-progress-fill" style={{ width: '85%' }}></div></div>
            </div>

            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Software Engineering</span>
                <span className="screen-tile-val">88%</span>
              </div>
              <span className="screen-tile-sub">CS503 • 22 / 25 Lectures Attended</span>
              <div className="screen-progress-bar"><div className="screen-progress-fill" style={{ width: '88%' }}></div></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'announcements',
      title: 'Announcements',
      category: 'Notices',
      badge: 'Official',
      renderScreen: () => (
        <div className="phone-screen-body">
          <span className="screen-tag">OFFICIAL CIRCULARS</span>
          <h3 className="screen-heading">Campus Bulletins</h3>

          <div className="screen-section-block">
            <div className="screen-notice-card">
              <span className="screen-chip-tag">EXAMINATION CELL</span>
              <div className="screen-notice-head">Winter Semester Schedule Released</div>
              <p className="screen-notice-txt">The timetable for upcoming unit tests and practical exams has been uploaded.</p>
              <span className="screen-meta-date">Exam Office • Today</span>
            </div>

            <div className="screen-notice-card">
              <span className="screen-chip-tag" style={{ background: '#ECFDF5', color: '#047857' }}>COLLEGE EVENT</span>
              <div className="screen-notice-head">Annual Tech Symposium 2026</div>
              <p className="screen-notice-txt">Department of Computer Science invites registrations for coding and web competitions.</p>
              <span className="screen-meta-date">Dept. of CS • Yesterday</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'academics',
      title: 'Academics & Timetable',
      category: 'Academics',
      badge: 'Schedules',
      renderScreen: () => (
        <div className="phone-screen-body">
          <span className="screen-tag">ACADEMIC WORKSPACE</span>
          <h3 className="screen-heading">Weekly Timetable</h3>

          <div className="screen-day-selector">
            <span className="screen-day-pill active">Mon</span>
            <span className="screen-day-pill">Tue</span>
            <span className="screen-day-pill">Wed</span>
            <span className="screen-day-pill">Thu</span>
            <span className="screen-day-pill">Fri</span>
          </div>

          <div className="screen-section-block">
            <div className="screen-item-tile" style={{ borderLeft: '3px solid #1D4ED8' }}>
              <div className="screen-tile-top">
                <span className="screen-tile-name">09:00 AM — Data Structures</span>
                <span className="screen-time-tag">Theory</span>
              </div>
              <span className="screen-tile-sub">Room 204 • CS Faculty</span>
            </div>

            <div className="screen-item-tile" style={{ borderLeft: '3px solid #06B6D4' }}>
              <div className="screen-tile-top">
                <span className="screen-tile-name">10:45 AM — OS Practical</span>
                <span className="screen-time-tag">Lab</span>
              </div>
              <span className="screen-tile-sub">Computer Lab 2 • Batch A</span>
            </div>

            <div className="screen-item-tile" style={{ borderLeft: '3px solid #10B981' }}>
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
    {
      id: 'digitalid',
      title: 'Digital Student ID',
      category: 'Security Pass',
      badge: 'Encrypted',
      renderScreen: () => (
        <div className="phone-screen-body">
          <span className="screen-tag">INSTITUTIONAL ID</span>
          <h3 className="screen-heading">Digital Student Card</h3>

          <div className="screen-id-card-visual">
            <div className="screen-id-top">
              <div>
                <div className="screen-id-college">B. K. BIRLA NIGHT COLLEGE</div>
                <div className="screen-id-dept">Kalyan • Computer Science</div>
              </div>
              <ShieldCheck size={18} color="#38BDF8" />
            </div>

            <div className="screen-id-profile">
              <div className="screen-id-avatar">CC</div>
              <div>
                <div className="screen-id-name">Enrolled Student</div>
                <div className="screen-id-roll">Roll No: BKBCS-2026-042</div>
                <div className="screen-id-batch">Academic Year: 2025–2027</div>
              </div>
            </div>

            <div className="screen-id-qr-box">
              <QrCode size={42} color="#0F172A" />
              <div>
                <span className="screen-id-qr-title">Verified Campus Pass</span>
                <span className="screen-id-qr-sub">Authorized for Gate & Library Access</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'assignments',
      title: 'Assignments & Tasks',
      category: 'Academics',
      badge: 'Submissions',
      renderScreen: () => (
        <div className="phone-screen-body">
          <span className="screen-tag">ACADEMIC TASKS</span>
          <h3 className="screen-heading">Assignments</h3>

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
                <span className="screen-status-badge">Due in 4 Days</span>
              </div>
              <span className="screen-tile-sub">CS504 • Networking Lab</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'results',
      title: 'Results & Marks',
      category: 'Evaluation',
      badge: 'Academic',
      renderScreen: () => (
        <div className="phone-screen-body">
          <span className="screen-tag">PERFORMANCE</span>
          <h3 className="screen-heading">Results & Marks</h3>

          <div className="screen-stat-card" style={{ padding: '14px' }}>
            <div>
              <span className="screen-stat-label">Semester V SGPA</span>
              <div className="screen-stat-number" style={{ color: '#1D4ED8' }}>8.92 / 10</div>
              <span className="screen-stat-pill" style={{ color: '#047857' }}>First Class with Distinction</span>
            </div>
          </div>

          <div className="screen-section-block">
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Data Structures</span>
                <span className="screen-tile-val">46 / 50</span>
              </div>
              <span className="screen-tile-sub">Internal Unit Test • Grade O</span>
            </div>

            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Database Systems</span>
                <span className="screen-tile-val">44 / 50</span>
              </div>
              <span className="screen-tile-sub">Internal Unit Test • Grade A+</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ecell',
      title: 'E-Cell: Vision to Venture',
      category: 'E-Cell',
      badge: 'Innovation',
      renderScreen: () => (
        <div className="phone-screen-body">
          <span className="screen-tag">ENTREPRENEURSHIP CELL</span>
          <h3 className="screen-heading">Vision to Venture</h3>

          <div className="screen-blue-card" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
            <div className="screen-notice-header" style={{ color: '#38BDF8' }}>
              <Rocket size={12} /> BKBNC INCUBATION
            </div>
            <div className="screen-notice-title" style={{ color: '#FFFFFF' }}>From Idea to Campus Enterprise</div>
            <p className="screen-notice-desc" style={{ color: '#94A3B8' }}>Startup workshops, pitch coaching, and campus venture stalls.</p>
          </div>

          <div className="screen-section-block">
            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Startup Pitch Workshop</span>
                <span className="screen-status-badge">Next Saturday</span>
              </div>
              <span className="screen-tile-sub">Learn business model design & pitching.</span>
            </div>

            <div className="screen-item-tile">
              <div className="screen-tile-top">
                <span className="screen-tile-name">Campus Stalls Registration</span>
                <span className="screen-status-badge submitted">Open</span>
              </div>
              <span className="screen-tile-sub">Showcase products during tech fest.</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'faculty',
      title: 'Faculty Workspace',
      category: 'Faculty',
      badge: 'Authorized',
      renderScreen: () => (
        <div className="phone-screen-body">
          <span className="screen-tag">FACULTY MANAGEMENT</span>
          <h3 className="screen-heading">Class Workspace</h3>

          <div className="screen-stat-card" style={{ borderLeft: '3px solid #1D4ED8' }}>
            <div>
              <span className="screen-stat-label">Active Class</span>
              <div className="screen-tile-name" style={{ fontSize: '13px', fontWeight: 800 }}>TYBSc CS — Semester V</div>
              <span className="screen-tile-sub">58 Registered Students</span>
            </div>
          </div>

          <div className="screen-section-block">
            <div className="screen-item-tile">
              <span className="screen-tile-name">Lecture Attendance Entry</span>
              <span className="screen-tile-sub">Mark present/absent with instant parent/student sync.</span>
            </div>

            <div className="screen-item-tile">
              <span className="screen-tile-name">Internal Assessment Grading</span>
              <span className="screen-tile-sub">Enter and publish unit test and assignment marks.</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const checkScrollState = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

      // Estimate active index
      const itemWidth = 270;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(Math.max(index, 0), screens.length - 1));
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollState, { passive: true });
      checkScrollState();
      return () => el.removeEventListener('scroll', checkScrollState);
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      trackEvent('screenshot_swiped', { direction });
    }
  };

  const handleJumpToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const itemWidth = 280;
      scrollContainerRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <section id="screenshots" className="gallery-showcase-section">
      <div className="product-container">
        
        {/* Section Header with Desktop Navigation Controls */}
        <div className="gallery-section-header">
          <div>
            <div className="section-super-eyebrow">
              <Smartphone size={15} /> Authentic App Interface
            </div>
            <h2 className="section-main-heading">See Campus Connect in Action</h2>
            <p className="section-sub-copy">
              Explore the real modules built for students and faculty of B. K. Birla Night College, Kalyan.
            </p>
          </div>

          {/* Desktop Left/Right Controls */}
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
              role="tab"
              aria-selected={activeIndex === idx}
              aria-label={`View ${screen.title}`}
              className={`pagination-dot ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => handleJumpToIndex(idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
