'use client';
import dynamic from 'next/dynamic';

const Contact = dynamic(() => import('../contact/contact'), {
  ssr: false,
});

export default function ContactWrapper() {
  return <Contact />;
}