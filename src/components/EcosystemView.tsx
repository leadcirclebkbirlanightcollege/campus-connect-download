import React from 'react';
import { 
  Home, 
  BookOpen, 
  Users, 
  Rocket, 
  UserCheck, 
  Network
} from 'lucide-react';

export const EcosystemView: React.FC = () => {
  const ecosystemPillars = [
    { 
      label: 'HOME HUB', 
      icon: Home, 
      desc: 'Daily check-in streaks (+10 pts), timetable status & quick access shortcuts' 
    },
    { 
      label: 'ACADEMICS', 
      icon: BookOpen, 
      desc: 'Lectures, timetable, attendance history, assignments, documents & results' 
    },
    { 
      label: 'COMMUNITY', 
      icon: Users, 
      desc: 'Events, announcements, class leaderboard rankings & learning circles' 
    },
    { 
      label: 'E-CELL', 
      icon: Rocket, 
      desc: 'Vision to Venture: Ideas to Impact, stall hosting & student pitch initiatives' 
    },
    { 
      label: 'STUDENT PROFILE', 
      icon: UserCheck, 
      desc: 'Verified student credentials, SYCS B.Sc. CS, completion tracking & privacy' 
    }
  ];

  return (
    <section id="ecosystem" className="ecosystem-platform-section">
      <div className="product-container">
        
        <div className="section-header-centered">
          <span className="section-super-eyebrow">
            <Network size={14} /> Integrated Digital Campus
          </span>
          <h2 className="section-main-heading">5 Core Pillars. One Connected Experience.</h2>
          <p className="section-sub-copy">
            Every module within Campus Connect works together to support daily student life at B. K. Birla Night College.
          </p>
        </div>

        {/* Ecosystem Radial / Orbital System */}
        <div className="ecosystem-radial-system">
          
          {/* Central Hub */}
          <div className="ecosystem-core-hub">
            <div className="core-hub-ring-pulse" />
            <div className="core-hub-inner">
              <img 
                src="/assets/logo.png" 
                alt="Campus Connect Core" 
                className="core-hub-logo" 
              />
              <span className="core-hub-tag">CENTRAL PLATFORM</span>
              <h3 className="core-hub-title">CAMPUS CONNECT</h3>
              <span className="core-hub-sub">B. K. Birla Night College</span>
            </div>
          </div>

          {/* Connected Surrounding Orbitals */}
          <div className="ecosystem-satellite-grid five-pillars">
            {ecosystemPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="ecosystem-satellite-card">
                  <div className="satellite-icon-box">
                    <Icon size={18} />
                  </div>
                  <div className="satellite-text">
                    <span className="satellite-title">{pillar.label}</span>
                    <span className="satellite-desc">{pillar.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
