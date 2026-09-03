import React, { useState, useEffect } from 'react';
import { ReleaseConfig, DEFAULT_APP_CONFIG } from './config/appConfig';
import { Header } from './components/Header';
import { StickyDownloadBar } from './components/StickyDownloadBar';
import { Hero } from './components/Hero';
import { AppPreviewMockup } from './components/AppPreviewMockup';
import { FeatureGrid } from './components/FeatureGrid';
import { EcosystemView } from './components/EcosystemView';
import { HowItWorks } from './components/HowItWorks';
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
        // Fallback gracefully
      });
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
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

    showToast(`Downloading Campus Connect v${config.version}...`);

    const link = document.createElement('a');
    link.href = config.apkUrl;
    link.download = config.apkFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="product-app-wrapper">
      {/* 1. Minimal Top Navigation */}
      <Header 
        config={config}
        onDownload={handleDownload}
      />

      {/* 2. Compact Sticky Scroll Bar (Appears when scrolled past hero) */}
      <StickyDownloadBar 
        config={config}
        onOpenQR={() => setIsQrModalOpen(true)}
        onOpenShare={() => setIsShareModalOpen(true)}
        onDownload={handleDownload}
      />

      <main>
        {/* 3. Authentic App Store Product Listing Header */}
        <Hero 
          config={config}
          onOpenQR={() => setIsQrModalOpen(true)}
          onOpenShare={() => setIsShareModalOpen(true)}
          onDownload={handleDownload}
        />

        {/* 4. "See Campus Connect in Action" Screenshot Gallery */}
        <AppPreviewMockup />

        {/* 5. "Everything You Need. One Campus." Structured Feature Matrix */}
        <FeatureGrid />

        {/* 6. Campus Connect Platform Ecosystem Architecture */}
        <EcosystemView />

        {/* 7. How to Get the App (01 Download -> 02 Install -> 03 Connect) */}
        <HowItWorks 
          onDownload={handleDownload}
          version={config.version}
        />

        {/* 8. Dedicated "Scan. Download. Connect." QR Section */}
        <QRCodeComponent 
          apkUrl={config.apkUrl}
          version={config.version}
          officialDomain={config.officialDomain}
          isModal={false}
        />

        {/* 9. Installation Guide & FAQ Collapsible Accordion */}
        <InstallationFaq 
          config={config}
          onDownload={handleDownload}
        />

        {/* 10. E-Cell: Vision to Venture Spotlight */}
        <ECellSection />
      </main>

      {/* 11. Institutional Authority Footer */}
      <Footer 
        config={config}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        onDownload={handleDownload}
      />

      {/* Dynamic QR Code Modal Popup */}
      <QRCodeComponent 
        apkUrl={config.apkUrl}
        version={config.version}
        officialDomain={config.officialDomain}
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        isModal={true}
      />

      {/* Share Experience Modal */}
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

      {/* Subtle Toast Feedback */}
      {toastMessage && (
        <div className="toast-container" role="alert">
          <div className="toast-card">
            <CheckCircle2 size={17} color="#10B981" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
