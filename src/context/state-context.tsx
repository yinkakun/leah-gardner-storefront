import { useState, createContext, useContext } from 'react';

interface IStateContext {
  isFirstRender: boolean;
  setFirstRender: React.Dispatch<React.SetStateAction<boolean>>;
}

const StateContext = createContext<IStateContext | null>(null);

interface StateContextProps {
  children: React.ReactNode;
}

export const StateProvider = ({ children }: StateContextProps) => {
  const [isFirstRender, setFirstRender] = useState(true);

  return (
    <StateContext.Provider value={{ isFirstRender, setFirstRender }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error('useStateContext must be used within a StateProvider');
  }

  return context;
};
