import { Header } from './Header';
import { Footer } from './Footer';
import { CookieConsent } from './CookieConsent';
import { FloatingActions } from './FloatingActions';
import { ScrollToTop } from './ScrollToTop';
import { PageTransition } from './PageTransition';

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <PageTransition />
      <Footer />
      <CookieConsent />
      <FloatingActions />
    </>
  );
}
