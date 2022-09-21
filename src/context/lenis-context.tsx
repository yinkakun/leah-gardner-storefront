import { useContext, createContext, useState } from 'react';

const LenisContext = createContext<any>(null);

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState(null);

  return (
    <LenisContext.Provider value={{ lenis, setLenis }}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => {
  const lenis = useContext(LenisContext);

  if (lenis === 'undefined') {
    throw new Error('Lenis not initialized');
  }

  return lenis;
};
