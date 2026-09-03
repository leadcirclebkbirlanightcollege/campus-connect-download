/**
 * Non-invasive, privacy-first interaction logging.
 * Does NOT collect personal info, IP addresses, or student identifiers.
 */

type InteractionEvent = 
  | 'download_apk_click'
  | 'hero_download_click'
  | 'sticky_download_click'
  | 'qr_modal_opened'
  | 'share_clicked'
  | 'copy_link_clicked'
  | 'install_guide_opened'
  | 'screenshot_swiped'
  | 'screenshot_gallery_scroll'
  | 'feature_category_explored';

export function trackEvent(eventName: InteractionEvent, details?: Record<string, string | number>) {
  if (typeof window === 'undefined') return;

  // Dispatch custom DOM event for lightweight analytics listeners
  const customEvent = new CustomEvent('campusconnect:telemetry', {
    detail: {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...details
    }
  });
  window.dispatchEvent(customEvent);

  // In development, log cleanly
  if (import.meta.env.DEV) {
    console.log(`[CampusConnect Telemetry]`, eventName, details || '');
  }
}
