import gsap from 'gsap';
import { Link } from 'gatsby';
import { useRef } from 'react';
import Container from '@/components/layout/container';
import { useIsomorphicLayoutEffect } from 'react-use';
import { useStateContext } from '@/context/state-context';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroChildren = gsap.utils.selector(heroRef);
  const { isFirstRender, setFirstRender } = useStateContext();

  const heroTimeline = useRef(
    gsap.timeline({
      defaults: {
        ease: 'circ.out',
      },
    }),
  );

  useIsomorphicLayoutEffect(() => {
    if (!isFirstRender) return;

    heroTimeline.current
      .from(heroChildren('.hero__title'), {
        scale: 3,
        autoAlpha: 0,
        delay: 3,
        duration: 1,
      })
      .from(
        heroChildren('.hero__subtitle'),
        {
          y: 150,
          duration: 1,
        },
        '-=0.3',
      )
      .from(
        heroChildren('.hero__button'),
        {
          y: 150,
          duration: 1,
        },
        '-=0.5',
      );
    setFirstRender(false);

    return () => {
      heroTimeline.current.kill();
    };
  }, []);

  return (
    <Container className="flex min-h-[50vh] w-full items-center justify-center overflow-hidden text-center">
      <div
        ref={heroRef}
        className="flex w-full flex-col items-center gap-5 text-center"
      >
        <h1 className="hero__title mx-auto mt-16 flex w-fit max-w-4xl flex-col whitespace-nowrap bg-gradient-to-b from-orange-400 to-orange-500 bg-clip-text text-center font-sans text-6xl font-extrabold uppercase tracking-wider text-transparent md:text-9xl lg:mt-40">
          <span>Leah</span> <span>Gardner</span>
        </h1>

        <p className="hero__subtitle font-serif text-base capitalize md:text-lg">
          Original paintings and fine art prints by Leah Gardner.
        </p>

        <Link
          to="/shop"
          className="hero__button w-full max-w-[200px] bg-orange-500 px-6  py-4 text-center text-sm uppercase tracking-wider text-orange-50 transition-colors duration-500 ease-in hover:bg-orange-600 md:text-base"
        >
          Shop All
        </Link>
      </div>
    </Container>
  );
};

export default Hero;
