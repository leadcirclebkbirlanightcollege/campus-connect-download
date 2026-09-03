import React, { useState, useEffect } from 'react';
import { ReleaseConfig } from '../config/appConfig';
import { Download, Menu, X } from 'lucide-react';

interface HeaderProps {
  config: ReleaseConfig;
  onDownload: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  config,
  onDownload
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`product-header-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="product-nav-container">
        {/* Left: Brand Identity */}
        <a href="#" className="nav-brand" aria-label="Campus Connect Home">
          <div className="nav-logo-box">
            <img 
              src="/assets/logo.png" 
              alt="Campus Connect Logo" 
              className="nav-logo-img"
            />
          </div>
          <div className="nav-brand-text">
            <span className="nav-app-name">{config.appName}</span>
            <span className="nav-college-tag">BKBNC Kalyan</span>
          </div>
        </a>

        {/* Center: Clean Navigation */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          <a href="#overview" className="nav-item">Overview</a>
          <a href="#screenshots" className="nav-item">Screenshots</a>
          <a href="#features" className="nav-item">Features</a>
          <a href="#how-to-get" className="nav-item">How to Install</a>
          <a href="#qr-download" className="nav-item">Scan QR</a>
          <a href="#faq" className="nav-item">FAQ</a>
        </nav>

        {/* Right: Primary Action Button */}
        <div className="nav-actions">
          <button 
            type="button" 
            className="btn-nav-download" 
            onClick={onDownload}
            aria-label={`Download Campus Connect v${config.version}`}
          >
            <Download size={15} />
            <span>Download App</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-panel">
          <div className="mobile-nav-panel-inner">
            <a href="#overview" className="mobile-nav-link" onClick={handleNavClick}>Overview</a>
            <a href="#screenshots" className="mobile-nav-link" onClick={handleNavClick}>Screenshots</a>
            <a href="#features" className="mobile-nav-link" onClick={handleNavClick}>Features</a>
            <a href="#how-to-get" className="mobile-nav-link" onClick={handleNavClick}>How to Install</a>
            <a href="#qr-download" className="mobile-nav-link" onClick={handleNavClick}>Scan QR</a>
            <a href="#faq" className="mobile-nav-link" onClick={handleNavClick}>FAQ</a>
            
            <div className="mobile-nav-cta">
              <button 
                type="button" 
                className="btn-primary-install"
                style={{ width: '100%', justifyContent: 'center', padding: '0.75rem 1rem' }}
                onClick={() => { setMobileMenuOpen(false); onDownload(); }}
              >
                <Download size={17} />
                <span>Download APK (v{config.version})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
