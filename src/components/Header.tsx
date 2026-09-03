import React, { useState, useEffect } from 'react';
import { ReleaseConfig } from '../config/appConfig';
import { Download, Menu, X } from 'lucide-react';

interface HeaderProps {
  config: ReleaseConfig;
  onDownload: () => void;
}

export const Header: React.FC<HeaderProps> = ({ config, onDownload }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Install Guide', href: '#installation' },
    { label: 'Scan QR', href: '#qr-download' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header className={`top-navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="product-container">
        <div className="navbar-inner">
          
          {/* Brand Left */}
          <a href="#overview" className="nav-brand-group">
            <div className="nav-logo-squircle">
              <img 
                src="/assets/logo.png" 
                alt="Campus Connect Logo" 
                className="nav-logo-image" 
              />
            </div>
            <div className="nav-title-column">
              <span className="nav-app-heading">{config.appName}</span>
              <span className="nav-institution-tag">BKBNC Kalyan</span>
            </div>
          </a>

          {/* Desktop Nav Center */}
          <nav className="nav-links-center" aria-label="Main Navigation">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href}
                className="nav-anchor-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Nav Right: Single Clean Download Action */}
          <div className="nav-action-right">
            <button 
              type="button" 
              className="btn-nav-download-action"
              onClick={onDownload}
              aria-label="Download Campus Connect Application"
            >
              <Download size={14} />
              <span>Download App</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              type="button" 
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="product-container">
            <div className="mobile-nav-links-stack">
              {navLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href}
                  className="mobile-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mobile-nav-bottom-cta">
                <button 
                  type="button" 
                  className="btn-mobile-download-full"
                  onClick={() => { setMobileMenuOpen(false); onDownload(); }}
                >
                  <Download size={16} />
                  <span>Download APK (v{config.version})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
