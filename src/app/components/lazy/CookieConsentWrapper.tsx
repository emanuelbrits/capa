'use client';
import dynamic from 'next/dynamic';

const CookieConsent = dynamic(() => import('../cookieConsent/cookieConsent'), {
  ssr: false,
});

export default function CookieConsentWrapper() {
  return <CookieConsent />;
}
