import React from 'react';
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  Award, 
  Briefcase, 
  Rocket, 
  ArrowDown,
  Network
} from 'lucide-react';

export const EcosystemView: React.FC = () => {
  const outgoingNodes = [
    { label: 'Academics', icon: BookOpen, desc: 'Timetables & Study Materials' },
    { label: 'Faculty', icon: GraduationCap, desc: 'Lectures & Evaluations' },
    { label: 'Events', icon: Calendar, desc: 'Fests & Technical Symposia' },
    { label: 'Activities', icon: Award, desc: 'Competitions & Clubs' },
    { label: 'Opportunities', icon: Briefcase, desc: 'Internships & Projects' },
    { label: 'Entrepreneurship', icon: Rocket, desc: 'E-Cell Incubation' }
  ];

  return (
    <section id="ecosystem" className="ecosystem-platform-section">
      <div className="product-container">
        
        <div className="section-header-centered">
          <span className="section-super-eyebrow">
            <Network size={14} /> Integrated Digital Infrastructure
          </span>
          <h2 className="section-main-heading">More Than an App. A Campus Platform.</h2>
          <p className="section-sub-copy">
            Campus Connect acts as the centralized bridge uniting students, academic departments, leadership, and extra-curricular initiatives across B. K. Birla Night College.
          </p>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className="ecosystem-flow-diagram">
          
          {/* Top Level: Students */}
          <div className="flow-tier-top">
            <div className="flow-student-card">
              <div className="flow-icon-circle student-circle">
                <Users size={22} />
              </div>
              <div className="flow-node-text">
                <span className="flow-node-title">STUDENTS</span>
                <span className="flow-node-sub">Enrolled learners & campus community</span>
              </div>
            </div>
          </div>

          {/* Connector Down */}
          <div className="flow-connector-line">
            <ArrowDown size={20} className="connector-arrow" />
          </div>

          {/* Center Hub: Campus Connect */}
          <div className="flow-tier-center">
            <div className="flow-hub-card">
              <div className="flow-hub-logo-box">
                <img src="/assets/logo.png" alt="Campus Connect Core" className="flow-hub-logo" />
              </div>
              <div className="flow-hub-info">
                <span className="flow-hub-badge">CENTRAL PLATFORM</span>
                <h3 className="flow-hub-name">CAMPUS CONNECT</h3>
                <span className="flow-hub-sub">B. K. Birla Night College, Kalyan • Dept. of Computer Science</span>
              </div>
            </div>
          </div>

          {/* Connector Down */}
          <div className="flow-connector-line">
            <ArrowDown size={20} className="connector-arrow" />
          </div>

          {/* Bottom Tier: Connected Nodes */}
          <div className="flow-tier-bottom">
            <div className="flow-nodes-grid">
              {outgoingNodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <div key={i} className="flow-destination-card">
                    <div className="destination-icon-box">
                      <Icon size={18} />
                    </div>
                    <span className="destination-title">{node.label}</span>
                    <span className="destination-desc">{node.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
