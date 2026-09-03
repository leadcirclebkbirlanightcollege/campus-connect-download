import { Download, Smartphone, LogIn } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      tag: 'DOWNLOAD',
      icon: Download,
      title: 'Get Official APK',
      desc: 'Download the verified Campus Connect package directly from this portal onto your Android phone.'
    },
    {
      num: '02',
      tag: 'INSTALL',
      icon: Smartphone,
      title: 'Install on Android',
      desc: 'Open the downloaded package. Follow the quick Android prompt to allow installation.'
    },
    {
      num: '03',
      tag: 'CONNECT',
      icon: LogIn,
      title: 'Log In & Explore',
      desc: 'Sign in using your authorized college credentials and instantly access all campus services.'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-progression-section">
      <div className="product-container">
        
        <div className="section-header-centered">
          <span className="section-super-eyebrow">Seamless Onboarding</span>
          <h2 className="section-main-heading">How It Works</h2>
          <p className="section-sub-copy">
            Three simple steps to connect with B. K. Birla Night College.
          </p>
        </div>

        {/* Visual Step Progression with Connecting Line */}
        <div className="progression-track-wrapper">
          <div className="progression-line-connector" aria-hidden="true" />
          
          <div className="progression-steps-row">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="progression-step-node">
                  <div className="progression-num-display">{item.num}</div>
                  <div className="progression-badge-row">
                    <span className="progression-tag-pill">{item.tag}</span>
                    <div className="progression-icon-circle">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="progression-node-title">{item.title}</h3>
                  <p className="progression-node-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
