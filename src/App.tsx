import React, { useState, useEffect } from 'react';
import { ReleaseConfig, DEFAULT_APP_CONFIG } from './config/appConfig';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AppPreviewMockup } from './components/AppPreviewMockup';
import { FeatureGrid } from './components/FeatureGrid';
import { EcosystemView } from './components/EcosystemView';
import { HowItWorks } from './components/HowItWorks';
import { InstallationGuide } from './components/InstallationGuide';
import { QRCodeComponent } from './components/QRCodeModal';
import { InstallationFaq } from './components/InstallationFaq';
import { ECellSection } from './components/ECellSection';
import { ShareModal } from './components/ShareModal';
import { AdminReleaseModal } from './components/AdminReleaseModal';
import { Footer } from './components/Footer';
import { CheckCircle2 } from 'lucide-react';
import { trackEvent } from './utils/analytics';

export const App: React.FC = () => {
  const [config, setConfig] = useState<ReleaseConfig>(DEFAULT_APP_CONFIG);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch('/config/release.json')
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Failed to fetch release config');
      })
      .then((data: Partial<ReleaseConfig>) => {
        setConfig(prev => ({
          ...prev,
          ...data
        }));
      })
      .catch(() => {
        // Graceful fallback to default config
      });
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleDownload = () => {
    if (config.status !== 'available' || !config.apkUrl) {
      showToast('Download is temporarily unavailable. Please check back shortly.');
      return;
    }

    trackEvent('download_apk_click', {
      version: config.version,
      file: config.apkFileName
    });

    showToast(`Starting download: Campus Connect v${config.version}...`);

    const link = document.createElement('a');
    link.href = config.apkUrl;
    link.download = config.apkFileName;
    if (config.apkUrl.startsWith('http')) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="product-app-wrapper">
      {/* 1. Single Clean Top Navigation (Zero duplicate bars) */}
      <Header 
        config={config}
        onDownload={handleDownload}
      />

      <main>
        {/* 2. App Product Hero: Identity + Direct Action (Left) & Real Phone Showcase (Right) */}
        <Hero 
          config={config}
          onOpenQR={() => setIsQrModalOpen(true)}
          onDownload={handleDownload}
        />

        {/* 3. See Campus Connect in Action: Authentic Screenshot Gallery */}
        <AppPreviewMockup />

        {/* 4. Structured Product Features: Everything You Need. One Campus. */}
        <FeatureGrid />

        {/* 5. Campus Connect Ecosystem Architecture */}
        <EcosystemView />

        {/* 6. How It Works (01 Download -> 02 Install -> 03 Connect) */}
        <HowItWorks />

        {/* 7. Installation Guide (5 Concise Android Setup Steps) */}
        <InstallationGuide 
          config={config}
          onDownload={handleDownload}
        />

        {/* 8. Dedicated Scan. Download. Connect. QR Section */}
        <QRCodeComponent 
          apkUrl={config.apkUrl}
          version={config.version}
          officialDomain={config.officialDomain}
          isModal={false}
        />

        {/* 9. Collapsible FAQ Accordion */}
        <InstallationFaq 
          config={config}
        />

        {/* 10. E-Cell: Vision to Venture (Subordinated Community Innovation) */}
        <ECellSection />
      </main>

      {/* 11. Institutional Authority Footer */}
      <Footer 
        config={config}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        onDownload={handleDownload}
      />

      {/* QR Code Dialog Modal */}
      <QRCodeComponent 
        apkUrl={config.apkUrl}
        version={config.version}
        officialDomain={config.officialDomain}
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        isModal={true}
      />

      {/* Share Dialog Modal */}
      <ShareModal 
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        appName={config.appName}
        version={config.version}
      />

      {/* Admin Release Information Modal */}
      <AdminReleaseModal 
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        config={config}
      />

      {/* Feedback Toast */}
      {toastMessage && (
        <div className="toast-container" role="status" aria-live="polite">
          <div className="toast-card">
            <CheckCircle2 size={16} color="#10B981" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
