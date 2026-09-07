import React, { useState } from 'react';
import { ReleaseConfig } from '../config/appConfig';
import { 
  Download, 
  QrCode, 
  CheckCircle2, 
  Check,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  config: ReleaseConfig;
  onOpenQR: () => void;
  onDownload: () => void;
}

const HERO_TABS = [
  { id: 'home', label: 'Home', image: '/assets/screens/screen-home.png', badge: 'Daily Hub' },
  { id: 'academics', label: 'Academics', image: '/assets/screens/screen-academics.png', badge: 'Studies' },
  { id: 'community', label: 'Community', image: '/assets/screens/screen-community.png', badge: 'Campus Life' },
  { id: 'ecell', label: 'E-Cell', image: '/assets/screens/screen-ecell.png', badge: 'Vision to Venture' },
  { id: 'profile', label: 'Profile', image: '/assets/screens/screen-profile.png', badge: 'Student ID' }
];

export const Hero: React.FC<HeroProps> = ({
  config,
  onOpenQR,
  onDownload
}) => {
  const [downloading, setDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const currentScreen = HERO_TABS.find(t => t.id === activeTab) || HERO_TABS[0];

  const handlePrimaryDownload = () => {
    setDownloading(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    trackEvent('hero_download_click', { version: config.version });
    onDownload();
    setTimeout(() => setDownloading(false), 2200);
  };

  return (
    <section id="overview" className="app-product-hero">
      {/* Background ambient lighting */}
      <div className="hero-ambient-glow" aria-hidden="true" />
      <div className="hero-subtle-grid" aria-hidden="true" />

      <div className="product-container">
        <div className="hero-grid-layout">
          
          {/* LEFT: Product Identity & Primary Actions */}
          <div className="hero-content-col">
            
            {/* App Icon + Title Group */}
            <div className="hero-brand-header">
              <div className="hero-app-icon-squircle">
                <img 
                  src="/assets/logo.png" 
                  alt="Campus Connect Official App Icon" 
                  className="hero-app-icon-img" 
                />
              </div>

              <div className="hero-brand-meta">
                <div className="hero-badge-row">
                  <span className="hero-official-badge">
                    <ShieldCheck size={13} />
                    Official Campus Application
                  </span>
                </div>
                <h1 className="hero-app-title">{config.appName}</h1>
                <div className="hero-institutional-credit">
                  <span className="hero-college-text">{config.institution}</span>
                  <span className="hero-bullet">•</span>
                  <span className="hero-dept-text">{config.department}</span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="hero-messaging-block">
              <h2 className="hero-headline">
                Your Campus.<br />
                <span className="hero-headline-accent">One Platform.</span>
              </h2>
              <p className="hero-description">
                The official application for B. K. Birla Night College. Access your timetable, track attendance, complete assignments, view exam results, connect with campus announcements, and explore E-Cell student initiatives.
              </p>
            </div>

            {/* Compact Store Metadata Row */}
            <div className="hero-metadata-strip">
              <div className="hero-meta-item">
                <span className="meta-label">Platform</span>
                <span className="meta-value">Android</span>
              </div>
              <div className="meta-separator" />
              <div className="hero-meta-item">
                <span className="meta-label">Version</span>
                <span className="meta-value">v{config.version}</span>
              </div>
              <div className="meta-separator" />
              <div className="hero-meta-item">
                <span className="meta-label">Release</span>
                <span className="meta-value">Official</span>
              </div>
              <div className="meta-separator" />
              <div className="hero-meta-item">
                <span className="meta-label">Package Size</span>
                <span className="meta-value">{config.fileSize}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="hero-cta-group">
              <button 
                type="button" 
                className={`btn-hero-primary-download ${downloading ? 'is-downloading' : ''}`}
                onClick={handlePrimaryDownload}
                aria-label={`Download Campus Connect APK Version ${config.version}`}
              >
                <div className="btn-icon-wrapper">
                  {downloading ? <Check size={20} /> : <Download size={20} />}
                </div>
                <div className="btn-text-wrapper">
                  <span className="btn-main-text">
                    {downloading ? 'Downloading...' : 'Download APK'}
                  </span>
                  <span className="btn-sub-text">
                    v{config.version} • {config.fileSize} • Free
                  </span>
                </div>
              </button>

              <a 
                href="#qr-download"
                className="btn-hero-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('qr-download');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onOpenQR();
                  }
                }}
              >
                <QrCode size={18} />
                <span>Scan to Download</span>
              </a>
            </div>

            {/* Verification Security Subtext */}
            <div className="hero-security-note">
              <CheckCircle2 size={15} className="note-icon" />
              <span>Verified Android release (8.0+) • Package: <code>{config.packageName}</code></span>
            </div>

          </div>

          {/* RIGHT: Authentic Product Showcase with Live Native Screen */}
          <div className="hero-showcase-col">
            <div className="hero-device-wrapper">
              
              {/* Screen Tab Switcher */}
              <div className="hero-screen-tabs" role="tablist" aria-label="Interactive App Screen Switcher">
                {HERO_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    className={`hero-screen-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab(tab.id);
                      trackEvent('hero_screen_tab_click', { screen: tab.id });
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Outer Phone Chassis */}
              <div className="hero-phone-chassis">
                {/* Device Screen UI: Real Campus Connect Screenshot */}
                <div className="hero-screen-viewport">
                  <img 
                    src={currentScreen.image} 
                    alt={`Campus Connect ${currentScreen.label} Screen`}
                    className="hero-screen-img"
                    key={currentScreen.id}
                  />
                </div>
              </div>

              {/* Floating Highlight Chips strictly from app screenshots */}
              <div className="floating-badge badge-attendance">
                <CheckCircle2 size={14} color="#059669" />
                <span>Risk &lt;75% Attendance Warning</span>
              </div>

              <div className="floating-badge badge-circulars">
                <Sparkles size={14} color="#1D4ED8" />
                <span>Daily Check-In +10 Pts</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
