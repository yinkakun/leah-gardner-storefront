import clsx from 'clsx';
import gsap from 'gsap';
import { useState, useRef, useCallback, useEffect } from 'react';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorHasMoved, setCursorHasMoved] = useState(false);

  const trailMouse = ({ clientX, clientY }: MouseEvent) => {
    gsap.to(cursorRef.current, {
      x: clientX,
      y: clientY,
      ease: 'expo.out',
      duration: cursorHasMoved ? 0.7 : 0,
    });
    setCursorHasMoved(true);
  };

  const onMouseMove = useCallback(trailMouse, [cursorHasMoved]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove, false);

    return () => {
      window.removeEventListener('mousemove', onMouseMove, false);
    };
  }, [onMouseMove]);

  return (
    <div
      className={clsx(
        'pointer-events-none fixed inset-0 z-[10000] h-full w-full overflow-hidden',
        cursorHasMoved ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div ref={cursorRef}>
        <div className="absolute h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-400 bg-white opacity-40 backdrop-blur-lg duration-700 ease-out-expo" />
      </div>
    </div>
  );
};

export default Cursor;
