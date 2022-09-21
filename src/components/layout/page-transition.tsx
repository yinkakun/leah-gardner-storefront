import gsap from 'gsap';
import { Fragment, useRef } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';

interface PageTransitionProps {
  children: React.ReactNode;
  route: string;
}

const pickOne = (a: number, b: number) => {
  return Math.random() < 0.5 ? a : b;
};

const PageTransition = ({ children, route }: PageTransitionProps) => {
  const curtainTimeline = useRef(gsap.timeline());
  const fadeOutTimeline = useRef(gsap.timeline());
  const curtainRef = useRef<HTMLDivElement>(null);
  const transitionQuoteRef = useRef<HTMLDivElement>(null);

  const onExit = () => {
    curtainTimeline.current
      .to(curtainRef.current, {
        duration: 1,
        backgroundColor: 'rgb(249 115 22 / 1)',
        autoAlpha: 1,
        ease: 'sine.inOut',
      })
      .from(
        transitionQuoteRef.current,
        {
          duration: 1,
          skewX: pickOne(50, -50),
          y: pickOne(-200, 200),
          ease: 'power2.easeIn',
        },
        '-=1',
      )
      .to(
        curtainRef.current,
        {
          duration: 1,
          autoAlpha: 0,
          ease: 'circ.out',
        },
        '+=1',
      );
  };

  const onEnter = (element: HTMLElement) => {
    fadeOutTimeline.current
      .set(element, {
        opacity: 0,
      })
      .to(element, {
        autoAlpha: 1,
        delay: 1,
        duration: 1,
        ease: 'power3.easeIn',
      });
  };

  return (
    <Fragment>
      <TransitionGroup component={null}>
        <Transition
          timeout={1000}
          key={route}
          onExit={onExit}
          onEntering={onEnter}
        >
          {children}
        </Transition>
      </TransitionGroup>
      <div
        ref={curtainRef}
        className="pointer-events-none fixed inset-0 z-[100] flex h-screen w-full items-center justify-center p-4 text-center text-4xl uppercase text-white opacity-0 lg:text-6xl"
      >
        <div className="max-w-xl" ref={transitionQuoteRef}>
          I paint flowers so they will not die. - Frida Kahlo
        </div>
      </div>
    </Fragment>
  );
};

export default PageTransition;
