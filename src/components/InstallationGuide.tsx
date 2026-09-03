import React from 'react';
import { 
  Download, 
  ShieldAlert, 
  HelpCircle
} from 'lucide-react';

interface InstallationGuideProps {
  onDownload: () => void;
  officialDomain: string;
}

export const InstallationGuide: React.FC<InstallationGuideProps> = ({ 
  onDownload, 
  officialDomain 
}) => {
  const steps = [
    {
      title: 'Tap "Download APK"',
      desc: 'Use the official download button on this portal to fetch the authentic package.'
    },
    {
      title: 'Wait for Download to Complete',
      desc: 'Check your notification bar or browser downloads list for the completed file.'
    },
    {
      title: 'Open Downloaded APK',
      desc: 'Tap the downloaded file from notifications or open your device Files / Downloads app.'
    },
    {
      title: 'Allow Installation from this Source',
      desc: 'If Android displays "Install unknown apps", tap Settings and toggle "Allow from this source" for your browser/file manager.'
    },
    {
      title: 'Confirm Installation',
      desc: 'Tap "Install" on the system prompt and wait a few seconds while Android verifies the package.'
    },
    {
      title: 'Open & Log In',
      desc: 'Launch Campus Connect and log in using your authorized college credentials.'
    }
  ];

  return (
    <section id="install-guide" className="install-guide-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <HelpCircle size={16} /> Direct Android Setup
          </div>
          <h2 className="section-title">How to Install Campus Connect</h2>
          <p className="section-description">
            Follow this safe, standard walkthrough to install the official institutional APK package on your Android device.
          </p>
        </div>

        <div className="guide-box">
          <div className="guide-steps-list">
            {steps.map((step, idx) => (
              <div key={idx} className="guide-step-item">
                <div className="guide-step-index">{idx + 1}</div>
                <div className="guide-step-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Security Best Practice Notice */}
          <div className="security-tip-callout">
            <ShieldAlert size={24} />
            <div>
              <h5>Official Source Security Notice</h5>
              <p>
                Android displays a standard prompt when installing direct APKs outside the Play Store. Always verify you are downloading exclusively from the official college portal at <strong>{officialDomain}</strong>. Never download Campus Connect from third-party websites or untrusted links.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <button 
              type="button" 
              className="btn-primary-download"
              onClick={onDownload}
            >
              <Download size={20} />
              <span>Download Official APK Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
