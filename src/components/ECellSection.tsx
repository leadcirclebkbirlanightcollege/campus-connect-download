import React from 'react';
import { 
  Rocket, 
  Store, 
  Calendar, 
  Coins, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';

export const ECellSection: React.FC = () => {
  const pathwaySteps = [
    { name: 'IDEAS', desc: 'Creative concepts' },
    { name: 'INNOVATION', desc: 'Practical solutions' },
    { name: 'ENTREPRENEURSHIP', desc: 'Student-led ventures' },
    { name: 'IMPACT', desc: 'Campus & market scale' }
  ];

  return (
    <section className="ecell-connection-section">
      <div className="product-container">
        
        <div className="ecell-integrated-card">
          <div className="ecell-card-left">
            <div className="ecell-eyebrow-chip">
              <Sparkles size={13} /> B. K. Birla Night College, Kalyan
            </div>
            <h3 className="ecell-heading">Entrepreneurship Cell</h3>
            <div className="ecell-subtitle">“Vision to Venture”</div>
            <p className="ecell-summary">
              Fostering entrepreneurial mindsets, nurturing student-led ventures, and providing hands-on platforms for innovation, stall hosting, and pitch competitions.
            </p>

            {/* 4-Stage Pathway Flow */}
            <div className="ecell-pathway-container">
              <div className="ecell-pathway-title">CORE VENTURE PATHWAY</div>
              <div className="ecell-pathway-flow">
                {pathwaySteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="ecell-pathway-node">
                      <span className="node-dot">•</span>
                      <span className="node-name">{step.name}</span>
                    </div>
                    {idx < pathwaySteps.length - 1 && (
                      <ArrowRight size={14} className="node-arrow" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Key Actions Mentioned in App */}
            <div className="ecell-actions-row">
              <div className="ecell-action-chip primary">
                <Store size={14} />
                <span>Register a Stall (100 Slots)</span>
              </div>
              <div className="ecell-action-chip">
                <Calendar size={14} />
                <span>Explore Events</span>
              </div>
              <div className="ecell-action-chip">
                <Coins size={14} />
                <span>Submit Idea &amp; Claim Points</span>
              </div>
            </div>
          </div>

          <div className="ecell-card-right">
            <div className="ecell-stat-cards-vertical">
              <div className="ecell-metric-card">
                <div className="ecell-metric-top">
                  <span className="metric-label">TOTAL INITIATIVES</span>
                  <Rocket size={18} color="#D97706" />
                </div>
                <div className="ecell-metric-number">1</div>
                <span className="ecell-metric-sub">1 upcoming or live</span>
              </div>

              <div className="ecell-metric-card">
                <div className="ecell-metric-top">
                  <span className="metric-label">STALL PROGRAMS</span>
                  <Store size={18} color="#D97706" />
                </div>
                <div className="ecell-metric-number">100</div>
                <span className="ecell-metric-sub">Vendor slots available</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
