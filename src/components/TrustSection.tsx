import React from 'react';
import { ShieldCheck, Lock, CheckCircle2, FileCheck } from 'lucide-react';

interface TrustSectionProps {
  institution: string;
  department: string;
}

export const TrustSection: React.FC<TrustSectionProps> = ({
  institution,
  department
}) => {
  return (
    <section className="container" style={{ marginTop: '4rem', marginBottom: '2rem' }}>
      <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
        <div className="section-eyebrow">
          <ShieldCheck size={16} /> Official Campus Trust & Verification
        </div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary-dark)', marginTop: '0.25rem' }}>
          Download from the Official Campus Connect Portal
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.6, maxWidth: '800px' }}>
          This website is the sole official distribution portal for the Campus Connect Android application of <strong>{institution}</strong>, maintained and released under the auspices of the <strong>{department}</strong>.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#ECFDF5', color: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>Verified Institutional Origin</h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                Every package is built directly from official department source repositories with cryptographic signing.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EFF6FF', color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Lock size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>Zero Data Collection Here</h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                No student ID, email, or credentials are required to download the APK. Full privacy is respected.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#F8FAFC', color: 'var(--text-primary)', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <FileCheck size={20} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>Authentic Direct Distribution</h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                Avoid downloading Campus Connect from unauthorized forums or third-party stores to ensure device security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
