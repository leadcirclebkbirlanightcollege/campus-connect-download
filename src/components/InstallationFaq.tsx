import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ReleaseConfig } from '../config/appConfig';

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface InstallationFaqProps {
  config: ReleaseConfig;
}

export const InstallationFaq: React.FC<InstallationFaqProps> = ({ config }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-5': true
  });

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'What is Campus Connect?',
      answer: (
        <p>
          Campus Connect is the official integrated mobile platform for <strong>B. K. Birla Night College, Kalyan</strong>, developed under the <strong>Department of Computer Science</strong>. It unifies attendance tracking, academic timetables, notices, college fests, digital ID passes, assignments, and E-Cell activities in one place.
        </p>
      )
    },
    {
      id: 'faq-2',
      question: 'Who can use Campus Connect?',
      answer: (
        <p>
          Campus Connect is designed for students enrolled at <strong>B. K. Birla Night College, Kalyan</strong>, including B.Sc. (Computer Science) and affiliated programs.
        </p>
      )
    },
    {
      id: 'faq-3',
      question: 'Which devices are supported?',
      answer: (
        <p>
          Any smartphone or tablet running <strong>{config.minAndroidVersion}</strong> (API level 26) or newer is supported.
        </p>
      )
    },
    {
      id: 'faq-4',
      question: 'How do I download the app?',
      answer: (
        <p>
          Simply tap the <strong>Download APK</strong> button on this official portal, or scan the QR code using your Android phone camera to download the installation package directly.
        </p>
      )
    },
    {
      id: 'faq-5',
      question: 'How do I install the APK?',
      answer: (
        <p>
          After downloading <code>{config.apkFileName}</code>, tap the notification to open it. If your browser prompts you with a standard security confirmation, toggle <em>"Allow from this source"</em> to complete the installation.
        </p>
      )
    },
    {
      id: 'faq-6',
      question: 'What is the current version?',
      answer: (
        <p>
          The current official release is <strong>Version {config.version}</strong> (Build {config.versionCode}), released in {config.releaseDate}.
        </p>
      )
    },
    {
      id: 'faq-7',
      question: 'How do I log in?',
      answer: (
        <p>
          Open Campus Connect and enter your student credentials provided for your enrolled course at B. K. Birla Night College.
        </p>
      )
    },
    {
      id: 'faq-8',
      question: 'Where should I download the official APK?',
      answer: (
        <p>
          Always download the APK directly from this official portal at <strong>{config.officialDomain}</strong>. Never download Campus Connect from unverified third-party websites or informal chat links.
        </p>
      )
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev: Record<string, boolean>) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="faq-accordion-section">
      <div className="product-container">
        
        <div className="section-header-centered">
          <span className="section-super-eyebrow">
            <HelpCircle size={14} /> Clear Answers & Support
          </span>
          <h2 className="section-main-heading">Frequently Asked Questions</h2>
          <p className="section-sub-copy">
            Everything you need to know about downloading, installing, and accessing Campus Connect.
          </p>
        </div>

        <div className="faq-accordion-wrapper">
          {faqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div 
                key={faq.id} 
                className={`faq-card-item ${isOpen ? 'is-open' : ''}`}
              >
                <button 
                  type="button" 
                  className="faq-trigger-btn"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-item-question">{faq.question}</span>
                  <ChevronDown size={18} className="faq-item-chevron" />
                </button>

                {isOpen && (
                  <div className="faq-item-body">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
