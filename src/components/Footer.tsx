import React from 'react';
import { ReleaseConfig } from '../config/appConfig';
import { ShieldCheck, Settings } from 'lucide-react';

interface FooterProps {
  config: ReleaseConfig;
  onOpenAdmin: () => void;
  onDownload: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onOpenAdmin,
  onDownload
}) => {
  return (
    <footer className="product-footer-institutional">
      <div className="product-container">
        
        {/* Main Footer Block */}
        <div className="footer-content-grid">
          
          {/* Institutional Info Left */}
          <div className="footer-col-authority">
            <div className="footer-brand-title-row">
              <img 
                src="/assets/logo.png" 
                alt="Campus Connect Official Logo" 
                className="footer-brand-logo" 
              />
              <div>
                <span className="footer-app-title">{config.appName}</span>
                <span className="footer-app-type">Official Android Application</span>
              </div>
            </div>

            <div className="footer-institution-details">
              <span className="footer-college-line">{config.institution}</span>
              <span className="footer-dept-line">{config.department}</span>
            </div>

            <p className="footer-mission-statement">
              The official, authenticated mobile platform providing comprehensive academic, attendance, and student engagement workflows.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="footer-nav-col">
            <span className="footer-col-heading">Navigation</span>
            <ul className="footer-nav-list">
              <li><a href="#overview">Overview</a></li>
              <li><a href="#screenshots">Screenshots</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-to-get">Installation</a></li>
              <li><a href="#qr-download">Scan QR Code</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Release & Distribution Column */}
          <div className="footer-nav-col">
            <span className="footer-col-heading">Distribution</span>
            <ul className="footer-nav-list">
              <li>
                <a href="#download" onClick={(e) => { e.preventDefault(); onDownload(); }}>
                  Download APK (v{config.version})
                </a>
              </li>
              <li>
                <a href="#admin" onClick={(e) => { e.preventDefault(); onOpenAdmin(); }}>
                  Release Metadata
                </a>
              </li>
              <li><span className="footer-static-note">Package: {config.packageName}</span></li>
              <li><span className="footer-static-note">Minimum OS: Android 8.0+</span></li>
            </ul>
          </div>

          {/* Trust & Safety Column */}
          <div className="footer-nav-col">
            <span className="footer-col-heading">Trust & Security</span>
            <ul className="footer-nav-list">
              <li><span className="footer-static-note">Official Institutional Binary</span></li>
              <li><span className="footer-static-note">Direct APK Distribution</span></li>
              <li><span className="footer-static-note">Zero Telemetry Profiling</span></li>
              <li><span className="footer-static-note">SHA-256 Verified Package</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <span>© 2026 Campus Connect. All rights reserved.</span>
            <span className="separator-dot">•</span>
            <span>{config.institution}</span>
          </div>

          <div className="footer-bottom-right">
            <span className="footer-version-badge">
              <ShieldCheck size={13} color="#10B981" />
              Version {config.version}
            </span>
            <button 
              type="button" 
              className="btn-footer-admin-link"
              onClick={onOpenAdmin}
              title="Admin Release Info"
            >
              <Settings size={12} />
              <span>Release Info</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
