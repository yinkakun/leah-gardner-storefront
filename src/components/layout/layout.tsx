import React, { Fragment, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { useLenis } from '@/context/lenis-context';
import { useIsomorphicLayoutEffect } from 'react-use';
import Lenis from '@studio-freight/lenis';
import Progressbar from '@/components/layout/progress-bar';
import Cursor from '@/components/layout/cursor';
import PageTransition from '@/components/layout/page-transition';
import { useIsTouchDevice } from '@/hooks/use-is-touch-device';
import Preloader from '@/components/layout/preloader';
import { useLocation } from '@reach/router';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

type layoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: layoutProps) => {
  const location = useLocation();
  const { setLenis, lenis } = useLenis();
  const isTouchDevice = useIsTouchDevice();

  useIsomorphicLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: 'vertical',
      smoothTouch: false,
      touchMultiplier: 2,
    });

    setLenis(lenis);

    const lenisRaf = (time: number) => {
      lenis?.raf(time);
      requestAnimationFrame(lenisRaf);
    };
    requestAnimationFrame(lenisRaf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenis) {
      lenis?.stop();
    }
  }, [lenis]);

  useIsomorphicLayoutEffect(() => {
    if (lenis) ScrollTrigger.refresh();
  }, []);

  useIsomorphicLayoutEffect(() => {
    const setViewHeight = () => {
      document.documentElement.style.setProperty(
        '--vh',
        window.innerHeight * 0.01 + 'px',
      );
    };

    window.addEventListener('resize', setViewHeight);
    setViewHeight();

    return () => {
      window.removeEventListener('resize', setViewHeight);
    };
  }, []);

  return (
    <Fragment>
      {isTouchDevice === false && <Cursor />}
      {isTouchDevice === false && <Progressbar />}
      <Preloader />
      <Toaster position="bottom-right" />
      <PageTransition route={location.pathname}>
        <div className="flex h-full flex-col">
          <Header />
          <main className="flex h-full grow flex-col justify-center bg-gradient-to-t from-orange-100 via-orange-50 to-orange-100 bg-fixed">
            {children}
          </main>
          <Footer />
        </div>
      </PageTransition>
    </Fragment>
  );
};

export default Layout;
