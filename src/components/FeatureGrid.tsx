import React from 'react';
import { 
  Bell, 
  Sparkles, 
  BookOpen, 
  FileText, 
  Award, 
  Calendar, 
  TrendingUp, 
  CheckSquare, 
  CreditCard, 
  Rocket, 
  Briefcase, 
  GraduationCap, 
  Layers
} from 'lucide-react';

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface FeatureGroup {
  category: string;
  badge: string;
  items: FeatureItem[];
}

export const FeatureGrid: React.FC = () => {
  const groups: FeatureGroup[] = [
    {
      category: 'STAY CONNECTED',
      badge: 'Communication',
      items: [
        {
          icon: Bell,
          title: 'Announcements',
          desc: 'Timely college circulars, urgent administrative alerts, and departmental notices.'
        },
        {
          icon: Sparkles,
          title: 'Notifications',
          desc: 'Instant delivery for lecture updates, circular releases, and critical campus alerts.'
        }
      ]
    },
    {
      category: 'STUDY',
      badge: 'Academics',
      items: [
        {
          icon: BookOpen,
          title: 'Academics',
          desc: 'Access lecture timetables, curriculum outlines, and official study resources.'
        },
        {
          icon: FileText,
          title: 'Assignments',
          desc: 'Track academic tasks, assignment guidelines, and project submission deadlines.'
        },
        {
          icon: Award,
          title: 'Results / Marks',
          desc: 'View published internal test scores, practical grades, and semester marks.'
        }
      ]
    },
    {
      category: 'PARTICIPATE',
      badge: 'Campus Life',
      items: [
        {
          icon: Calendar,
          title: 'Events',
          desc: 'Discover college fests, technical conferences, hackathons, and guest lectures.'
        },
        {
          icon: Award,
          title: 'Activities',
          desc: 'Join inter-collegiate competitions, sports meets, and departmental initiatives.'
        },
        {
          icon: TrendingUp,
          title: 'Student Engagement',
          desc: 'Collaborate with student clubs, committees, and campus innovation groups.'
        }
      ]
    },
    {
      category: 'TRACK',
      badge: 'Identity & Records',
      items: [
        {
          icon: CheckSquare,
          title: 'Attendance',
          desc: 'Monitor real-time lecture attendance records and track semester 75% compliance.'
        },
        {
          icon: CreditCard,
          title: 'Digital ID',
          desc: 'Access your digitized campus identification card for gate and library entry.'
        }
      ]
    },
    {
      category: 'EXPLORE',
      badge: 'Growth',
      items: [
        {
          icon: Rocket,
          title: 'E-Cell',
          desc: 'Engage with the Entrepreneurship Cell, startup incubation, and campus venture stalls.'
        },
        {
          icon: Briefcase,
          title: 'Opportunities',
          desc: 'Find student internships, career workshops, research projects, and campus roles.'
        }
      ]
    },
    {
      category: 'FACULTY',
      badge: 'Academic Workspace',
      items: [
        {
          icon: GraduationCap,
          title: 'Lectures & Attendance',
          desc: 'Authorized workspace for faculty to schedule lectures and log daily attendance.'
        },
        {
          icon: Award,
          title: 'Examinations & Marks',
          desc: 'Secure faculty workflows for internal evaluation and grade management.'
        }
      ]
    }
  ];

  return (
    <section id="features" className="product-features-section">
      <div className="product-container">
        
        <div className="section-header-centered">
          <span className="section-super-eyebrow">
            <Layers size={14} /> Comprehensive Feature Set
          </span>
          <h2 className="section-main-heading">Everything You Need. One Campus.</h2>
          <p className="section-sub-copy">
            A cohesive mobile platform designed specifically around the academic and daily needs of B. K. Birla Night College, Kalyan.
          </p>
        </div>

        {/* Structured Grid */}
        <div className="structured-feature-matrix">
          {groups.map((group, gIdx) => (
            <div key={gIdx} className="feature-matrix-card">
              <div className="matrix-card-header">
                <span className="matrix-category-label">{group.category}</span>
                <span className="matrix-badge-chip">{group.badge}</span>
              </div>

              <div className="matrix-items-list">
                {group.items.map((item, iIdx) => {
                  const Icon = item.icon;
                  return (
                    <div key={iIdx} className="matrix-item-row">
                      <div className="matrix-item-icon-box">
                        <Icon size={16} />
                      </div>
                      <div className="matrix-item-content">
                        <h3 className="matrix-item-title">{item.title}</h3>
                        <p className="matrix-item-desc">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
