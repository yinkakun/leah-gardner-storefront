import gsap from 'gsap';
import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import { useLenis } from '@/context/lenis-context';

const Preloader = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const { lenis } = useLenis();

  const preloaderTimeline = useRef(
    gsap.timeline({
      defaults: {
        ease: 'circ.out',
      },
    }),
  );

  useIsomorphicLayoutEffect(() => {
    if (!lenis) return;

    preloaderTimeline.current
      .set(textRef.current, {
        autoAlpha: 1,
      })
      .fromTo(
        textRef.current,
        {
          duration: 1,
          scale: 0,
          autoAlpha: 0,
          delay: 0.2,
        },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1.5,
          delay: 0.3,
        },
      )
      .to(textRef.current, {
        autoAlpha: 0,
        scale: 0.8,
        duration: 1,
        delay: 1,
      })
      .to(
        curtainRef.current,
        {
          translateY: '100%',
          duration: 1,
          delay: 1,
        },
        '-=2',
      )
      .add(() => {
        // lenis?.start();
      });

    return () => {
      preloaderTimeline.current.kill();
    };
  }, [lenis]);

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 z-[1000]  flex h-screen w-full items-center justify-center bg-orange-500"
    >
      <div
        ref={textRef}
        className="mx-auto text-center text-5xl font-extrabold uppercase text-white opacity-0 md:text-9xl"
      >
        LEAH GARDNER.
      </div>
    </div>
  );
};

export default Preloader;
