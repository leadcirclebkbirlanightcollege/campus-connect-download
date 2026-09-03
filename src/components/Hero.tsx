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

export const Hero: React.FC<HeroProps> = ({
  config,
  onOpenQR,
  onDownload
}) => {
  const [downloading, setDownloading] = useState(false);

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
                Stay connected with academics, announcements, attendance, events, activities and opportunities through one smart campus platform.
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
              
              {/* Outer Phone Chassis */}
              <div className="hero-phone-chassis">
                {/* Status bar / Notch */}
                <div className="phone-top-notch">
                  <span className="phone-clock">9:41</span>
                  <div className="phone-speaker-pill" />
                  <div className="phone-camera-lens" />
                  <div className="phone-status-icons">
                    <span className="status-dot" />
                    <span className="status-battery" />
                  </div>
                </div>

                {/* Device Screen UI: Campus Connect Real Dashboard */}
                <div className="hero-screen-content">
                  
                  {/* Dashboard Header */}
                  <div className="screen-dash-header">
                    <div>
                      <span className="dash-greeting">Welcome back,</span>
                      <h3 className="dash-student-name">Atharva M.</h3>
                      <span className="dash-roll">TYBSc CS • Roll 2026-042</span>
                    </div>
                    <div className="dash-avatar-badge">AM</div>
                  </div>

                  {/* Attendance Card with Progress Ring */}
                  <div className="screen-attendance-widget">
                    <div className="att-info">
                      <span className="att-label">OVERALL ATTENDANCE</span>
                      <div className="att-percent">82.4%</div>
                      <span className="att-status">✓ 7.4% Above Mandatory 75%</span>
                    </div>
                    <div className="att-ring-graphic">
                      <svg viewBox="0 0 36 36" className="circular-chart">
                        <path 
                          className="circle-bg" 
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path 
                          className="circle-fill" 
                          strokeDasharray="82, 100" 
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <span className="ring-text">82%</span>
                    </div>
                  </div>

                  {/* Live Class Today */}
                  <div className="screen-live-class">
                    <div className="live-class-head">
                      <span className="live-pill">NEXT LECTURE</span>
                      <span className="live-time">10:45 AM</span>
                    </div>
                    <div className="live-subj-title">Data Structures &amp; Algorithms</div>
                    <div className="live-room-prof">Room 204 • Prof. K. Deshmukh</div>
                  </div>

                  {/* Quick Notice Pill */}
                  <div className="screen-notice-mini">
                    <div className="notice-mini-dot" />
                    <div className="notice-mini-text">
                      <strong>Exam Notice:</strong> Semester schedule released by Examination Cell.
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Highlight Chips */}
              <div className="floating-badge badge-attendance">
                <CheckCircle2 size={14} color="#059669" />
                <span>Real-Time Attendance</span>
              </div>

              <div className="floating-badge badge-circulars">
                <Sparkles size={14} color="#1D4ED8" />
                <span>Verified Circulars</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
