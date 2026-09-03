import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Download } from 'lucide-react';
import { ReleaseConfig } from '../config/appConfig';

interface FAQItem {
  id: string;
  category: 'INSTALLATION' | 'GENERAL';
  question: string;
  answer: React.ReactNode;
}

interface InstallationFaqProps {
  config: ReleaseConfig;
  onDownload: () => void;
}

export const InstallationFaq: React.FC<InstallationFaqProps> = ({ config, onDownload }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'install' | 'general'>('all');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'q-install-1': true,
    'q-install-3': true
  });

  const faqs: FAQItem[] = [
    // Installation Help
    {
      id: 'q-install-1',
      category: 'INSTALLATION',
      question: 'How do I download and install Campus Connect?',
      answer: (
        <div>
          <p>Installing Campus Connect takes less than a minute:</p>
          <ol style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <li>Tap the <strong>Download APK</strong> button on this official portal.</li>
            <li>Once the download finishes, tap the completed notification or open your device’s <em>Files &gt; Downloads</em> folder.</li>
            <li>Tap the <code>{config.apkFileName}</code> file.</li>
            <li>If Android prompts you, allow permission to install from this source.</li>
            <li>Tap <strong>Install</strong>, then launch Campus Connect and log in.</li>
          </ol>
        </div>
      )
    },
    {
      id: 'q-install-2',
      category: 'INSTALLATION',
      question: 'Why does Android ask for permission when installing the APK?',
      answer: (
        <p>
          Because you are installing an authentic direct application package outside of third-party commercial app stores, Android displays a standard security confirmation asking you to toggle <em>"Allow from this source"</em> for your browser or file manager. This is standard Android behavior for direct institutional releases.
        </p>
      )
    },
    {
      id: 'q-install-3',
      category: 'INSTALLATION',
      question: 'Where can I find the downloaded APK file on my phone?',
      answer: (
        <p>
          You can locate the file directly in your Android phone’s <strong>Files</strong>, <strong>My Files</strong>, or <strong>Downloads</strong> application under the name <code>{config.apkFileName}</code>.
        </p>
      )
    },
    {
      id: 'q-install-4',
      category: 'INSTALLATION',
      question: 'How do I log in after installing the application?',
      answer: (
        <p>
          Launch the app and enter your official student or faculty credentials authorized by the <strong>Department of Computer Science</strong> at B. K. Birla Night College, Kalyan.
        </p>
      )
    },
    // General Questions
    {
      id: 'q-gen-1',
      category: 'GENERAL',
      question: 'What is Campus Connect?',
      answer: (
        <p>
          Campus Connect is the official digital gateway for <strong>B. K. Birla Night College, Kalyan</strong>, created and maintained under the Department of Computer Science. It connects students and faculty with daily attendance tracking, academic timetables, notices, college events, digital ID cards, and E-Cell activities.
        </p>
      )
    },
    {
      id: 'q-gen-2',
      category: 'GENERAL',
      question: 'Who can use Campus Connect?',
      answer: (
        <p>
          The application is exclusively built for enrolled students, faculty members, and authorized academic staff of B. K. Birla Night College, Kalyan.
        </p>
      )
    },
    {
      id: 'q-gen-3',
      category: 'GENERAL',
      question: 'Which Android devices and versions are supported?',
      answer: (
        <p>
          Campus Connect supports all modern Android smartphones and tablets running <strong>{config.minAndroidVersion}</strong> (API 26+) or higher.
        </p>
      )
    },
    {
      id: 'q-gen-4',
      category: 'GENERAL',
      question: 'What is the current official release version?',
      answer: (
        <p>
          The current official release is <strong>Version {config.version}</strong> (Build {config.versionCode}), released in {config.releaseDate}. This download portal always hosts the latest authorized package.
        </p>
      )
    },
    {
      id: 'q-gen-5',
      category: 'GENERAL',
      question: 'Where should I obtain the APK safely?',
      answer: (
        <p>
          Only download Campus Connect from this official college portal at <strong>{config.officialDomain}</strong>. Never download from unverified third-party APK mirrors or informal chat links.
        </p>
      )
    },
    {
      id: 'q-gen-6',
      category: 'GENERAL',
      question: 'How do I get my login credentials if I do not have an account?',
      answer: (
        <p>
          Student and faculty accounts are provisioned directly by the <strong>Department of Computer Science</strong> and the college administration. Please contact your department coordinator to verify your enrollment.
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

  const filteredFaqs = faqs.filter(item => {
    if (activeTab === 'install') return item.category === 'INSTALLATION';
    if (activeTab === 'general') return item.category === 'GENERAL';
    return true;
  });

  return (
    <section id="faq" className="faq-product-section">
      <div className="product-container">
        
        <div className="section-header-centered">
          <span className="section-super-eyebrow">
            <HelpCircle size={14} /> Clear Answers & Support
          </span>
          <h2 className="section-main-heading">Installation & Frequently Asked Questions</h2>
          <p className="section-sub-copy">
            Everything you need to know about downloading, permissions, compatibility, and using Campus Connect.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="faq-tab-filter-row">
          <button 
            type="button" 
            className={`faq-filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Questions
          </button>
          <button 
            type="button" 
            className={`faq-filter-btn ${activeTab === 'install' ? 'active' : ''}`}
            onClick={() => setActiveTab('install')}
          >
            Installation & APK Help
          </button>
          <button 
            type="button" 
            className={`faq-filter-btn ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            Platform & Accounts
          </button>
        </div>

        {/* Collapsible FAQ Accordion */}
        <div className="faq-accordion-container">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div 
                key={faq.id} 
                className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  type="button" 
                  className="faq-question-btn"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-category-badge">{faq.category}</span>
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown size={18} className="faq-chevron" />
                </button>

                {isOpen && (
                  <div className="faq-answer-pane">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Security / Help callout */}
        <div className="faq-security-callout">
          <ShieldCheck size={20} className="callout-shield-icon" />
          <div className="callout-content">
            <h4 className="callout-title">Official Institutional Distribution Notice</h4>
            <p className="callout-desc">
              Campus Connect APK is distributed directly by <strong>B. K. Birla Night College, Kalyan</strong>. No personal data or student IDs are ever requested on this download portal.
            </p>
          </div>
          <button 
            type="button" 
            className="btn-store-secondary" 
            style={{ flexShrink: 0 }}
            onClick={onDownload}
          >
            <Download size={15} />
            <span>Download APK</span>
          </button>
        </div>

      </div>
    </section>
  );
};
