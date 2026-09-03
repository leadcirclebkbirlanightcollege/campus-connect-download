import { Lightbulb, Wrench, Store, Trophy, Compass } from 'lucide-react';

export const ECellSection: React.FC = () => {
  const pillars = [
    { label: 'Ideas & Ideation', icon: Lightbulb, desc: 'Problem solving & creative student venture concepts' },
    { label: 'Hands-on Workshops', icon: Wrench, desc: 'Practical founder clinics, pitching & business planning' },
    { label: 'Campus Stalls', icon: Store, desc: 'Student-run enterprise kiosks during college fests' },
    { label: 'Impact & Awards', icon: Trophy, desc: 'Inter-college startup competitions and recognition' }
  ];

  return (
    <section className="ecell-connection-section">
      <div className="product-container">
        
        <div className="ecell-integrated-card">
          <div className="ecell-card-left">
            <div className="ecell-eyebrow-chip">
              <Compass size={13} /> Campus Innovation Hub
            </div>
            <h3 className="ecell-heading">EXPLORE E-CELL</h3>
            <div className="ecell-subtitle">Vision to Venture</div>
            <p className="ecell-summary">
              An integral pillar of Campus Connect, empowering enterprising students at B. K. Birla Night College to translate visionary concepts into viable campus enterprises.
            </p>
          </div>

          <div className="ecell-card-right">
            <div className="ecell-pillars-grid">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="ecell-pillar-item">
                    <div className="ecell-pillar-icon-box">
                      <Icon size={16} />
                    </div>
                    <div>
                      <span className="ecell-pillar-title">{pillar.label}</span>
                      <p className="ecell-pillar-desc">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
