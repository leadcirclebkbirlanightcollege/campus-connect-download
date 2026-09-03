import React, { useState } from 'react';
import { ReleaseConfig } from '../config/appConfig';
import { X, Settings, Check, Copy, ShieldAlert } from 'lucide-react';

interface AdminReleaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ReleaseConfig;
}

export const AdminReleaseModal: React.FC<AdminReleaseModalProps> = ({
  isOpen,
  onClose,
  config
}) => {
  const [copiedConfig, setCopiedConfig] = useState(false);
  const [activeTab, setActiveTab] = useState<'guide' | 'json'>('guide');

  if (!isOpen) return null;

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-dialog" 
        style={{ maxWidth: '640px' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close release manager dialog"
        >
          <X size={20} />
        </button>

        <div className="section-eyebrow">
          <Settings size={16} /> College Administrator Portal
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-dark)', marginTop: '0.25rem' }}>
          APK Release Management
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
          Instructions and configuration for publishing new Campus Connect releases.
        </p>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
          <button
            type="button"
            className={`screen-tab-btn ${activeTab === 'guide' ? 'active' : ''}`}
            onClick={() => setActiveTab('guide')}
          >
            Release Workflow
          </button>
          <button
            type="button"
            className={`screen-tab-btn ${activeTab === 'json' ? 'active' : ''}`}
            onClick={() => setActiveTab('json')}
          >
            Active release.json Config
          </button>
        </div>

        {activeTab === 'guide' ? (
          <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '380px', overflowY: 'auto', paddingRight: '0.5rem' }}>
            <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Step 1: Place New APK in /public/downloads/
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                Copy the newly built Android APK into <code>/public/downloads/campus-connect-v1.0.1.apk</code> (or host on an S3/GCS bucket).
              </p>
            </div>

            <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Step 2: Update Configuration
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                Edit <code>public/config/release.json</code> or <code>src/config/appConfig.ts</code>. Update <code>version</code>, <code>apkUrl</code>, <code>fileSize</code>, and <code>releaseNotes</code>.
              </p>
            </div>

            <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Step 3: Instant Live Update
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                All UI elements, sticky download bars, version tags, and dynamic QR codes immediately reflect the new release without changing any UI code.
              </p>
            </div>

            <div style={{ padding: '0.875rem 1rem', background: '#FFFBEB', borderRadius: '12px', border: '1px solid #FCD34D', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <ShieldAlert size={20} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.8125rem', color: '#92400E' }}>
                <strong>No Hardcoded Keys</strong>: The architecture intentionally requires zero server secret keys or private database tokens on client devices.
              </div>
            </div>
          </div>
        ) : (
          <div style={{ marginTop: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Current release metadata</span>
              <button 
                type="button" 
                className="btn-copy-mini"
                onClick={handleCopyJson}
              >
                {copiedConfig ? <Check size={12} color="#059669" /> : <Copy size={12} />}
                <span>{copiedConfig ? 'Copied' : 'Copy JSON'}</span>
              </button>
            </div>
            <pre style={{ background: 'var(--surface-secondary)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', maxHeight: '300px', overflowY: 'auto' }}>
              {JSON.stringify(config, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
