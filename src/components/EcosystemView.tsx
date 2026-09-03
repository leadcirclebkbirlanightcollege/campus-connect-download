import React from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  CheckSquare, 
  Award, 
  Rocket, 
  Briefcase,
  Network
} from 'lucide-react';

export const EcosystemView: React.FC = () => {
  const ecosystemPillars = [
    { label: 'STUDENTS', icon: Users, desc: 'Central campus community' },
    { label: 'FACULTY', icon: GraduationCap, desc: 'Academic leadership & guidance' },
    { label: 'ACADEMICS', icon: BookOpen, desc: 'Timetables & study resources' },
    { label: 'EVENTS', icon: Calendar, desc: 'College fests & technical symposia' },
    { label: 'ATTENDANCE', icon: CheckSquare, desc: 'Real-time 75% compliance tracking' },
    { label: 'ACTIVITIES', icon: Award, desc: 'Sports, cultural & departmental clubs' },
    { label: 'E-CELL', icon: Rocket, desc: 'Student startup incubation' },
    { label: 'OPPORTUNITIES', icon: Briefcase, desc: 'Internships & campus projects' }
  ];

  return (
    <section id="ecosystem" className="ecosystem-platform-section">
      <div className="product-container">
        
        <div className="section-header-centered">
          <span className="section-super-eyebrow">
            <Network size={14} /> Integrated Digital Infrastructure
          </span>
          <h2 className="section-main-heading">Campus Connect Connects the Campus</h2>
          <p className="section-sub-copy">
            A single, cohesive platform bringing every facet of B. K. Birla Night College together into one unified experience.
          </p>
        </div>

        {/* Elegant Ecosystem System Visualizer */}
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
              <span className="core-hub-tag">CORE PLATFORM</span>
              <h3 className="core-hub-title">CAMPUS CONNECT</h3>
              <span className="core-hub-sub">BKBNC Kalyan</span>
            </div>
          </div>

          {/* Connected Surrounding Orbitals */}
          <div className="ecosystem-satellite-grid">
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
