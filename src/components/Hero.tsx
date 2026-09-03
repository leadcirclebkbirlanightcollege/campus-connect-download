import React, { useState } from 'react';
import { ReleaseConfig } from '../config/appConfig';
import { 
  Download, 
  QrCode, 
  Share2, 
  CheckCircle2, 
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  config: ReleaseConfig;
  onOpenQR: () => void;
  onOpenShare: () => void;
  onDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  config,
  onOpenQR,
  onOpenShare,
  onDownload
}) => {
  const [downloading, setDownloading] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  const handleDownloadClick = () => {
    if (config.status !== 'available' || !config.apkUrl) {
      return;
    }

    setDownloading(true);
    trackEvent('download_apk_click', {
      version: config.version,
      fileName: config.apkFileName
    });

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#1D4ED8', '#2563EB', '#06B6D4', '#93C5FD']
      });
    } catch {
      // Ignore
    }

    onDownload();

    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  const handleCopyHash = () => {
    navigator.clipboard.writeText(config.sha256);
    setCopiedHash(true);
    trackEvent('copy_link_clicked', { type: 'sha256_hash' });
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <section id="overview" className="product-listing-section">
      <div className="product-container">
        
        {/* Main 2-Column App Store Product Layout */}
        <div className="product-header-grid">
          
          {/* LEFT: App Identity & Editorial Info */}
          <div className="product-identity-column">
            
            <div className="app-badge-row">
              <div className="app-icon-squircle">
                <img 
                  src="/assets/logo.png" 
                  alt="Campus Connect Official App Icon" 
                  className="app-icon-img"
                />
              </div>

              <div className="app-title-group">
                <div className="app-institutional-super">
                  <span>{config.institution}</span>
                </div>
                <h1 className="app-display-title">{config.appName}</h1>
                <div className="app-department-sub">
                  <span>{config.department}</span>
                </div>
              </div>
            </div>

            {/* Tagline & Short Description */}
            <div className="app-tagline-block">
              <p className="app-lead-quote">"Your Campus. One Platform."</p>
              <p className="app-lead-description">
                Connect with your campus through academics, announcements, attendance, events, activities and opportunities — all in one place.
              </p>
            </div>

            {/* Trust Indicator */}
            <div className="official-trust-badge">
              <CheckCircle2 size={17} className="trust-check-icon" />
              <div className="trust-badge-text">
                <span className="trust-title">Official Campus Connect Application</span>
                <span className="trust-dept">{config.institution} • {config.department}</span>
              </div>
            </div>

            {/* App Store Style Information Row (No Fake Data) */}
            <div className="app-store-meta-bar">
              <div className="meta-pill-item">
                <span className="meta-pill-label">Platform</span>
                <span className="meta-pill-val">Android</span>
              </div>
              <div className="meta-pill-divider" />
              <div className="meta-pill-item">
                <span className="meta-pill-label">Version</span>
                <span className="meta-pill-val">v{config.version}</span>
              </div>
              <div className="meta-pill-divider" />
              <div className="meta-pill-item">
                <span className="meta-pill-label">Status</span>
                <span className="meta-pill-val official-text">Official</span>
              </div>
              <div className="meta-pill-divider" />
              <div className="meta-pill-item">
                <span className="meta-pill-label">Institution</span>
                <span className="meta-pill-val">BKBNC</span>
              </div>
              <div className="meta-pill-divider" />
              <div className="meta-pill-item">
                <span className="meta-pill-label">Package Size</span>
                <span className="meta-pill-val">{config.fileSize}</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Primary Install / Action Block */}
          <div className="product-action-column">
            <div className="product-install-card">
              
              <div className="install-card-header">
                <div className="install-tag-row">
                  <span className="status-live-chip">Direct APK Delivery</span>
                  <span className="version-tag-pill">v{config.version}</span>
                </div>
                <h2 className="install-heading">Download Official APK</h2>
                <p className="install-sub">Direct installation for Android devices (8.0+)</p>
              </div>

              {/* Large Primary Download CTA */}
              <button 
                type="button" 
                className={`btn-primary-install ${downloading ? 'downloading' : ''}`}
                onClick={handleDownloadClick}
                aria-label={`Download Campus Connect APK Version ${config.version}`}
              >
                <Download size={22} className="btn-icon-pulse" />
                <div className="btn-install-label-group">
                  <span className="btn-label-main">
                    {downloading ? 'Starting Download...' : 'Download APK'}
                  </span>
                  <span className="btn-label-sub">
                    Version {config.version} • {config.fileSize}
                  </span>
                </div>
              </button>

              {/* Secondary Actions */}
              <div className="install-secondary-actions">
                <button 
                  type="button" 
                  className="btn-store-secondary"
                  onClick={onOpenQR}
                  title="Scan QR Code with your phone"
                >
                  <QrCode size={16} />
                  <span>Scan to Download</span>
                </button>

                <a 
                  href="#how-to-get" 
                  className="btn-store-secondary"
                  title="How to install APK"
                >
                  <HelpCircle size={16} />
                  <span>Install Guide</span>
                </a>

                <button 
                  type="button" 
                  className="btn-store-secondary"
                  onClick={onOpenShare}
                  title="Share download link"
                >
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>

              {/* Metadata Verification Card */}
              <div className="install-meta-list">
                <div className="install-meta-row">
                  <span className="meta-row-label">Release Date</span>
                  <span className="meta-row-value">{config.releaseDate}</span>
                </div>
                <div className="install-meta-row">
                  <span className="meta-row-label">Required OS</span>
                  <span className="meta-row-value">{config.minAndroidVersion}</span>
                </div>
                <div className="install-meta-row">
                  <span className="meta-row-label">Package Name</span>
                  <span className="meta-row-value code-font">{config.packageName}</span>
                </div>
                <div className="install-meta-row hash-row">
                  <span className="meta-row-label">SHA-256 Checksum</span>
                  <div className="hash-copy-wrapper">
                    <span className="hash-preview" title={config.sha256}>
                      {config.sha256.substring(0, 10)}...{config.sha256.substring(config.sha256.length - 6)}
                    </span>
                    <button 
                      type="button" 
                      className="btn-copy-hash" 
                      onClick={handleCopyHash}
                      title="Copy full SHA-256 Checksum"
                      aria-label="Copy SHA-256 Checksum"
                    >
                      {copiedHash ? <Check size={13} color="#10B981" /> : <Copy size={13} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="install-footer-note">
                Official Campus Connect Android Application • B. K. Birla Night College, Kalyan
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
