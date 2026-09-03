import React, { useState } from 'react';
import { ReleaseConfig } from '../config/appConfig';
import { 
  Download, 
  Copy, 
  Check, 
  ShieldCheck, 
  Layers,
  Sparkles
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface AppSpecsCardProps {
  config: ReleaseConfig;
  onDownload: () => void;
}

export const AppSpecsCard: React.FC<AppSpecsCardProps> = ({ config, onDownload }) => {
  const [copiedChecksum, setCopiedChecksum] = useState(false);

  const handleCopyChecksum = () => {
    navigator.clipboard.writeText(config.sha256);
    setCopiedChecksum(true);
    trackEvent('copy_link_clicked', { type: 'sha256_checksum' });
    setTimeout(() => setCopiedChecksum(false), 2000);
  };

  return (
    <section id="specifications" className="specs-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Layers size={16} /> App Details & Technical Specs
          </div>
          <h2 className="section-title">Verified Release Specifications</h2>
          <p className="section-description">
            Transparent release information and cryptographic verification for the official Campus Connect Android package.
          </p>
        </div>

        <div className="specs-grid">
          {/* Main Specifications Table */}
          <div className="specs-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Application Metadata
              </h3>
              <span className="header-badge-official">v{config.version}</span>
            </div>

            <table className="specs-table" aria-label="Campus Connect Technical Specifications">
              <tbody>
                <tr>
                  <td className="specs-label">Application Name</td>
                  <td className="specs-value">{config.appName}</td>
                </tr>
                <tr>
                  <td className="specs-label">Official Package ID</td>
                  <td className="specs-value" style={{ fontFamily: 'var(--font-mono)' }}>
                    {config.packageName}
                  </td>
                </tr>
                <tr>
                  <td className="specs-label">Current Version</td>
                  <td className="specs-value">
                    {config.version} (Build {config.versionCode})
                  </td>
                </tr>
                {config.releaseDate && (
                  <tr>
                    <td className="specs-label">Release Date</td>
                    <td className="specs-value">{config.releaseDate}</td>
                  </tr>
                )}
                {config.fileSize && (
                  <tr>
                    <td className="specs-label">Download Size</td>
                    <td className="specs-value">{config.fileSize}</td>
                  </tr>
                )}
                {config.minAndroidVersion && (
                  <tr>
                    <td className="specs-label">Required Android OS</td>
                    <td className="specs-value">{config.minAndroidVersion}</td>
                  </tr>
                )}
                <tr>
                  <td className="specs-label">Offered By</td>
                  <td className="specs-value">
                    {config.department},<br />
                    {config.institution}
                  </td>
                </tr>
                <tr>
                  <td className="specs-label">SHA-256 Checksum</td>
                  <td className="specs-value mono">
                    <span>{config.sha256.substring(0, 16)}...{config.sha256.substring(config.sha256.length - 8)}</span>
                    <button 
                      type="button" 
                      className="btn-copy-mini" 
                      onClick={handleCopyChecksum}
                      title="Copy full SHA-256 Checksum"
                    >
                      {copiedChecksum ? <Check size={12} color="#059669" /> : <Copy size={12} />}
                      <span>{copiedChecksum ? 'Copied' : 'Copy'}</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Quick Download CTA inside card */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Official Distribution:</div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {config.apkFileName}
                </div>
              </div>
              <button 
                type="button" 
                className="btn-primary-download" 
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.9375rem' }}
                onClick={onDownload}
              >
                <Download size={18} />
                <span>Download v{config.version}</span>
              </button>
            </div>
          </div>

          {/* What's New Box (Release Notes) */}
          <div className="whats-new-box">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} color="var(--primary)" />
                <h3 style={{ fontSize: '1.1875rem', fontWeight: 700, color: 'var(--primary-dark)' }}>
                  What's New
                </h3>
              </div>
              <span className="version-badge-lg">v{config.version}</span>
            </div>

            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
              Latest release updates and college features introduced in Version {config.version}:
            </p>

            <ul className="whats-new-list">
              {config.releaseNotes.map((note, idx) => (
                <li key={idx}>
                  <ShieldCheck size={16} />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
