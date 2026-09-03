import { Download, Smartphone, LogIn } from 'lucide-react';

interface HowItWorksProps {
  onDownload: () => void;
  version: string;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onDownload, version }) => {
  const steps = [
    {
      step: '01',
      action: 'DOWNLOAD',
      icon: Download,
      title: 'Get the Official APK',
      desc: 'Download the verified Campus Connect package directly from this portal onto your Android phone.'
    },
    {
      step: '02',
      action: 'INSTALL',
      icon: Smartphone,
      title: 'Install on Android',
      desc: 'Open the downloaded package. If prompted, toggle "Allow from this source" for your browser to proceed safely.'
    },
    {
      step: '03',
      action: 'CONNECT',
      icon: LogIn,
      title: 'Log In & Explore',
      desc: 'Launch Campus Connect and sign in with your authorized college credentials to access your student dashboard.'
    }
  ];

  return (
    <section id="how-to-get" className="how-to-get-section">
      <div className="product-container">
        
        <div className="section-header-centered">
          <span className="section-super-eyebrow">Direct Installation</span>
          <h2 className="section-main-heading">Get Started in 3 Steps</h2>
          <p className="section-sub-copy">
            No complex setup. Download the official package directly and connect with your college community in minutes.
          </p>
        </div>

        <div className="three-step-grid">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="step-card-elevated">
                <div className="step-number-watermark">{item.step}</div>
                <div className="step-card-header">
                  <span className="step-action-tag">{item.action}</span>
                  <div className="step-icon-bubble">
                    <Icon size={20} />
                  </div>
                </div>
                <h3 className="step-card-title">{item.title}</h3>
                <p className="step-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="how-to-get-cta-row">
          <button 
            type="button" 
            className="btn-primary-install"
            style={{ maxWidth: '320px', width: '100%' }}
            onClick={onDownload}
          >
            <Download size={20} />
            <div className="btn-install-label-group">
              <span className="btn-label-main">Download APK Now</span>
              <span className="btn-label-sub">Version {version} • Free</span>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
