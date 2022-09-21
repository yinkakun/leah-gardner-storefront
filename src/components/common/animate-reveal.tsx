import gsap from 'gsap';
import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';
import { useStateContext } from '@/context/state-context';

interface AnimateRevealProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimateReveal = ({ children, delay = 0 }: AnimateRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isFirstRender, setFirstRender } = useStateContext();

  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;

    const animation = gsap.fromTo(
      container,
      {
        opacity: 0,
        translateY: 100,
      },
      {
        autoAlpha: 1,
        translateY: 0,
        duration: 1.25,
        ease: 'circ.out',
        delay: isFirstRender ? delay : 0,
        scrollTrigger: {
          trigger: container,
        },
      },
    );

    setFirstRender(false);

    return () => {
      animation.kill();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default AnimateReveal;
