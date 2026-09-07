import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  ClipboardCheck, 
  BookOpen, 
  FileText, 
  Trophy, 
  Users, 
  QrCode, 
  Megaphone, 
  Zap, 
  LifeBuoy, 
  Flame, 
  AlertTriangle, 
  Store, 
  UserCheck, 
  ShieldCheck, 
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
  headline: string;
  items: FeatureItem[];
}

export const FeatureGrid: React.FC = () => {
  const groups: FeatureGroup[] = [
    {
      category: 'ACADEMICS',
      badge: 'Studies & Schedule',
      headline: 'Everything about your studies',
      items: [
        {
          icon: GraduationCap,
          title: 'Lectures',
          desc: 'Live & upcoming sessions'
        },
        {
          icon: Calendar,
          title: 'Timetable',
          desc: 'Your weekly schedule'
        },
        {
          icon: ClipboardCheck,
          title: 'Attendance',
          desc: 'History & percentage tracking'
        },
        {
          icon: BookOpen,
          title: 'Assignments',
          desc: 'Tasks & submissions'
        },
        {
          icon: FileText,
          title: 'Documents',
          desc: 'Notes & study material'
        },
        {
          icon: Trophy,
          title: 'Results',
          desc: 'Exam performance'
        },
        {
          icon: Users,
          title: 'Learning Circles',
          desc: 'Enrolled programmes'
        },
        {
          icon: QrCode,
          title: 'Scan Attendance',
          desc: 'Mark yourself present'
        }
      ]
    },
    {
      category: 'COMMUNITY',
      badge: 'Campus Life',
      headline: 'Campus life, together',
      items: [
        {
          icon: Calendar,
          title: 'Events',
          desc: 'Campus events & registrations'
        },
        {
          icon: Megaphone,
          title: 'Announcements',
          desc: 'Important campus updates'
        },
        {
          icon: Trophy,
          title: 'Leaderboard',
          desc: 'Class & college rankings'
        },
        {
          icon: Users,
          title: 'Learning Circles',
          desc: 'Communities you\'ve joined'
        },
        {
          icon: Zap,
          title: 'Points',
          desc: 'Rewards & activity balance'
        },
        {
          icon: LifeBuoy,
          title: 'Help & Support',
          desc: 'Reach the campus team'
        }
      ]
    },
    {
      category: 'E-CELL',
      badge: 'Vision to Venture',
      headline: 'Fostering student ventures & innovation',
      items: [
        {
          icon: Store,
          title: 'Register a Stall',
          desc: '100 vendor slots available for student businesses'
        },
        {
          icon: Calendar,
          title: 'Explore Events',
          desc: 'Pitch competitions, founder clinics & exhibitions'
        },
        {
          icon: Zap,
          title: 'Submit Idea & Claim Points',
          desc: 'Submit student venture concepts and earn reward points'
        },
        {
          icon: Layers,
          title: '4-Stage Pathway',
          desc: 'IDEAS → INNOVATION → ENTREPRENEURSHIP → IMPACT'
        }
      ]
    },
    {
      category: 'HOME & DAILY ENGAGEMENT',
      badge: 'Central Dashboard',
      headline: 'Daily habits & instant access',
      items: [
        {
          icon: Flame,
          title: 'Daily Check-In',
          desc: '+10 pts per day with continuous daily streak tracking'
        },
        {
          icon: AlertTriangle,
          title: 'Attendance Risk Warning',
          desc: 'Instant visual alert when attendance drops below the 75% threshold'
        },
        {
          icon: QrCode,
          title: 'Scan QR Button',
          desc: 'One-tap camera QR scanner on your home dashboard'
        },
        {
          icon: Layers,
          title: 'Quick Access Launcher',
          desc: 'Attendance, Timetable, Tasks, Results, Digital ID, Ranks, and E-Cell'
        }
      ]
    },
    {
      category: 'PROFILE & IDENTITY',
      badge: 'Verified Student',
      headline: 'Official student credentials',
      items: [
        {
          icon: UserCheck,
          title: 'Verified Student Account',
          desc: 'Atharv Jadhav • SYCS • B.Sc. (Computer Science) (1151061)'
        },
        {
          icon: ShieldCheck,
          title: '100% Profile Completion',
          desc: 'Verified enrollment under B. K. Birla Night Arts, Science & Commerce College'
        },
        {
          icon: FileText,
          title: 'Account Settings',
          desc: 'Edit profile (name, email, photo), privacy controls, and security'
        },
        {
          icon: Megaphone,
          title: 'Preferences',
          desc: 'Notification settings for lectures, announcements, and alerts'
        }
      ]
    }
  ];

  return (
    <section id="features" className="product-features-section">
      <div className="product-container">
        
        <div className="section-header-centered">
          <span className="section-super-eyebrow">
            <Layers size={14} /> Official Application Modules
          </span>
          <h2 className="section-main-heading">Everything You Need. One Campus.</h2>
          <p className="section-sub-copy">
            Explore every module and feature built into the official Campus Connect app for B. K. Birla Night College.
          </p>
        </div>

        {/* Structured Grid strictly grounded in the app */}
        <div className="structured-feature-matrix">
          {groups.map((group, gIdx) => (
            <div key={gIdx} className="feature-matrix-card">
              <div className="matrix-card-header">
                <div>
                  <span className="matrix-category-label">{group.category}</span>
                  <div className="matrix-card-subline">{group.headline}</div>
                </div>
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
