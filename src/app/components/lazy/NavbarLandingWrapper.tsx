'use client';
import dynamic from 'next/dynamic';

const NavbarLanding = dynamic(() => import('../navbarLanding/navbarLanding'), {
  ssr: false,
});

export default function NavbarLandingWrapper() {
  return <NavbarLanding />;
}