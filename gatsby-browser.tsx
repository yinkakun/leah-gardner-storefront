import './src/styles/fonts.css';
import './src/styles/global.css';
import './src/styles/tailwind.css';
import React from 'react';
import Layout from './src/components/layout/layout';
import { CartProvider } from './src/context/cart-context';
import { LenisProvider } from './src/context/lenis-context';
import { StateProvider } from './src/context/state-context';

interface wrapPageElementProps {
  element: React.ReactNode;
}

export const wrapPageElement = ({ element }: wrapPageElementProps) => (
  <LenisProvider>
    <CartProvider>
      <StateProvider>
        <Layout>{element}</Layout>
      </StateProvider>
    </CartProvider>
  </LenisProvider>
);
