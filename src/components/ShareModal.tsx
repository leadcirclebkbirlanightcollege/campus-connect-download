import React, { useState } from 'react';
import { Share2, Copy, Check, X } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  appName: string;
  version: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  appName,
  version
}) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://bkbnc-campus.vercel.app';

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    trackEvent('copy_link_clicked', { type: 'page_url' });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    trackEvent('share_clicked', { method: 'web_share_api' });
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${appName} — Official Student App`,
          text: `Download the official Campus Connect app (v${version}) for B. K. Birla Night College, Kalyan.`,
          url: shareUrl
        });
        onClose();
      } catch {
        // User dismissed share dialog
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close share dialog"
        >
          <X size={20} />
        </button>

        <div className="section-eyebrow">
          <Share2 size={16} /> Campus Distribution
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-dark)', marginTop: '0.25rem' }}>
          Share Campus Connect
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.5 }}>
          Help fellow classmates and department peers download the official Android application.
        </p>

        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {/* Native Web Share Button */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button 
              type="button" 
              className="btn-primary-download" 
              style={{ width: '100%', padding: '0.875rem' }}
              onClick={handleNativeShare}
            >
              <Share2 size={18} />
              <span>Share via WhatsApp / Apps</span>
            </button>
          )}

          {/* Copy Link Input & Button */}
          <div style={{ background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '12px', padding: '0.5rem 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)' }}>
              {shareUrl}
            </span>
            <button 
              type="button" 
              className="btn-copy-mini"
              onClick={handleCopyLink}
              style={{ padding: '0.4rem 0.75rem', flexShrink: 0 }}
            >
              {copied ? <Check size={14} color="#059669" /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
