import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { QrCode, X, Copy, Check, Smartphone, ShieldCheck } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface QRCodeSectionProps {
  apkUrl: string;
  version: string;
  officialDomain: string;
  isOpen?: boolean;
  onClose?: () => void;
  isModal?: boolean;
}

export const QRCodeComponent: React.FC<QRCodeSectionProps> = ({
  apkUrl,
  version,
  isOpen = true,
  onClose,
  isModal = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);
  
  // Production official download URL
  const downloadTargetUrl = `https://campus-connect-download.vercel.app${apkUrl}`;

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, downloadTargetUrl, {
        width: isModal ? 200 : 240,
        margin: 2,
        color: {
          dark: '#0F172A',
          light: '#FFFFFF'
        },
        errorCorrectionLevel: 'H'
      }, (error) => {
        if (error) console.error('QR code error:', error);
      });
    }
  }, [downloadTargetUrl, isModal, isOpen]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(downloadTargetUrl);
    setCopied(true);
    trackEvent('copy_link_clicked', { type: 'qr_download_url' });
    setTimeout(() => setCopied(false), 2000);
  };

  const content = (
    <div className={isModal ? 'modal-dialog' : 'qr-product-card'}>
      {isModal && onClose && (
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close QR dialog"
        >
          <X size={20} />
        </button>
      )}

      {/* Info Left */}
      <div className="qr-info-side">
        <div className="section-super-eyebrow">
          <QrCode size={14} /> Instant Phone Transfer
        </div>
        <h2 className="qr-main-title">
          Scan. Download. Connect.
        </h2>
        <p className="qr-lead-desc">
          Scan this QR code with your Android phone to download Campus Connect.
        </p>

        <div className="qr-specs-bullet-list">
          <div className="qr-bullet-row">
            <Smartphone size={16} className="bullet-icon" />
            <span>Open with your Android phone camera or Google Lens</span>
          </div>
          <div className="qr-bullet-row">
            <ShieldCheck size={16} className="bullet-icon text-success" />
            <span>Direct package download for Version {version}</span>
          </div>
        </div>

        <div className="qr-copy-bar">
          <span className="qr-url-text" title={downloadTargetUrl}>
            {downloadTargetUrl}
          </span>
          <button 
            type="button" 
            className="btn-copy-mini"
            onClick={handleCopyLink}
          >
            {copied ? <Check size={13} color="#059669" /> : <Copy size={13} />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* QR Canvas Right */}
      <div className="qr-visual-side">
        <div className="qr-canvas-holder">
          <canvas ref={canvasRef} />
        </div>
        <div className="qr-caption-label">
          <span>Point camera to scan</span>
          <span className="qr-sub-tag">v{version} • Campus Connect APK</span>
        </div>
      </div>
    </div>
  );

  if (isModal) {
    if (!isOpen) return null;
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()}>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="qr-download" className="qr-dedicated-section">
      <div className="product-container">
        {content}
      </div>
    </section>
  );
};
