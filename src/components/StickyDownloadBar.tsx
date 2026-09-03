import React, { useState, useEffect } from 'react';
import { ReleaseConfig } from '../config/appConfig';
import { Download, QrCode, Share2 } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface StickyDownloadBarProps {
  config: ReleaseConfig;
  onOpenQR: () => void;
  onOpenShare: () => void;
  onDownload: () => void;
}

export const StickyDownloadBar: React.FC<StickyDownloadBarProps> = ({
  config,
  onOpenQR,
  onOpenShare,
  onDownload
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerWidth < 768 ? 580 : 420;
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStickyDownload = () => {
    trackEvent('sticky_download_click', { version: config.version });
    onDownload();
  };

  return (
    <div className={`sticky-product-bar ${visible ? 'is-visible' : ''}`} aria-hidden={!visible}>
      <div className="product-container">
        <div className="sticky-bar-content">
          
          <div className="sticky-app-meta">
            <img 
              src="/assets/logo.png" 
              alt="Campus Connect App Icon" 
              className="sticky-logo-thumb" 
            />
            <div className="sticky-text-group">
              <div className="sticky-title-line">
                <span className="sticky-name">{config.appName}</span>
                <span className="sticky-version-tag">v{config.version}</span>
              </div>
              <span className="sticky-sub-info">
                {config.institution} • {config.fileSize}
              </span>
            </div>
          </div>

          <div className="sticky-actions-group">
            <button 
              type="button" 
              className="btn-icon-subtle" 
              onClick={onOpenQR}
              title="Scan QR to Download"
              aria-label="Scan QR Code"
            >
              <QrCode size={16} />
            </button>
            <button 
              type="button" 
              className="btn-icon-subtle" 
              onClick={onOpenShare}
              title="Share Download Link"
              aria-label="Share Link"
            >
              <Share2 size={16} />
            </button>
            <button 
              type="button" 
              className="btn-sticky-download"
              onClick={handleStickyDownload}
              aria-label="Download Official APK"
            >
              <Download size={15} />
              <span>Download APK</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
