import React from 'react';
import { ShieldCheck, Download, CheckCircle2 } from 'lucide-react';
import { ReleaseConfig } from '../config/appConfig';

interface InstallationGuideProps {
  config: ReleaseConfig;
  onDownload: () => void;
}

export const InstallationGuide: React.FC<InstallationGuideProps> = ({ config, onDownload }) => {
  const steps = [
    {
      step: '01',
      title: 'Download the official APK.',
      detail: 'Tap the Download APK button on this portal to download the package.'
    },
    {
      step: '02',
      title: 'Open the downloaded APK.',
      detail: 'Locate the downloaded package in your notifications or Files > Downloads.'
    },
    {
      step: '03',
      title: 'Follow Android\'s prompt if required.',
      detail: 'If prompted, tap "Settings" and toggle "Allow from this source" to proceed safely.'
    },
    {
      step: '04',
      title: 'Open Campus Connect.',
      detail: 'Once the installation finishes, tap "Open" to launch the application.'
    },
    {
      step: '05',
      title: 'Sign in with your credentials.',
      detail: 'Enter your authorized student or faculty account to access your campus dashboard.'
    }
  ];

  return (
    <section id="installation" className="installation-guide-section">
      <div className="product-container">
        
        <div className="install-guide-card">
          <div className="install-guide-header">
            <div className="section-super-eyebrow">
              <ShieldCheck size={14} /> Android 8.0+ Setup
            </div>
            <h2 className="section-main-heading">Install Campus Connect</h2>
            <p className="section-sub-copy">
              Quick, direct package installation on any compatible Android device.
            </p>
          </div>

          <div className="install-steps-list">
            {steps.map((s, idx) => (
              <div key={idx} className="install-step-row">
                <div className="install-step-index">{s.step}</div>
                <div className="install-step-body">
                  <h3 className="install-step-heading">{s.title}</h3>
                  <p className="install-step-detail">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="install-guide-bottom-bar">
            <div className="install-guide-trust-note">
              <CheckCircle2 size={16} color="#059669" />
              <span>Official institutional binary: <code>{config.apkFileName}</code></span>
            </div>
            <button 
              type="button" 
              className="btn-install-quick-download"
              onClick={onDownload}
            >
              <Download size={15} />
              <span>Download APK (v{config.version})</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
