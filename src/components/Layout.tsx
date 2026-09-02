import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieConsent } from './CookieConsent';
import { FloatingActions } from './FloatingActions';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <CookieConsent />
      <FloatingActions />
    </>
  );
}
