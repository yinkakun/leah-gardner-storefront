import Client, { Cart, Client as IClient } from 'shopify-buy';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { errorToast, successToast } from '@/components/common/toast';

const STORE_URL = process.env.GATSBY_SHOPIFY_STORE_URL;
const ACCESS_TOKEN = process.env.GATSBY_STOREFRONT_ACCESS_TOKEN;

const createShopifyClient = () => {
  if (!STORE_URL || !ACCESS_TOKEN) {
    throw new Error('Missing Shopify Store URL or Access Token');
  }

  const client = Client.buildClient({
    domain: STORE_URL,
    storefrontAccessToken: ACCESS_TOKEN,
  });

  return client;
};

const shopifyClient = createShopifyClient();

interface ICartState extends Cart {
  isAdding: boolean;
  isUpdating: boolean;
  isRemoving: boolean;
  shopifyClient: IClient;
}

const initialCartState: ICartState = {
  id: '',
  webUrl: '',
  completedAt: '',
  checkoutUrl: '',
  subtotalPrice: '',
  lineItems: [],
  lineItemCount: 0,
  shopifyClient,
  isAdding: false,
  isUpdating: false,
  isRemoving: false,
};

interface ICartContext {
  cart: ICartState;
  setCart: React.Dispatch<React.SetStateAction<ICartState>>;
}

const CartContext = createContext<ICartContext | null>(null);

const shopifyCheckoutId = 'shopify_checkout_id';

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState(initialCartState);
  const [initializedCart, setInitializedCart] = useState(false);

  useEffect(() => {
    if (initializedCart) return;

    const initializeCart = async () => {
      const checkoutID =
        typeof window !== 'undefined'
          ? localStorage.getItem(shopifyCheckoutId)
          : false;

      const setCheckoutId = (checkoutId: string) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem(shopifyCheckoutId, checkoutId);
        }
      };

      if (!checkoutID) {
        const newCheckout = await cart.shopifyClient.checkout.create();
        setCheckoutId(newCheckout.id.toString());
        setCart({ ...cart, ...newCheckout });
        return;
      }

      try {
        const existingCheckout = await cart.shopifyClient.checkout.fetch(
          checkoutID,
        );

        if (existingCheckout.completedAt) {
          setCheckoutId('');
          setCart(initialCartState);
          return;
        }

        setCart({ ...cart, ...existingCheckout });
        return;
      } catch (error) {
        localStorage.setItem(shopifyCheckoutId, '');
      }
    };

    initializeCart();
    setInitializedCart(true);
  }, [initializedCart, cart, setCart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined || context === null) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};

const TWO_SECONDS = 2000;

interface addItemParams {
  variantId: string;
  quantity: number;
}

export const useAddItem = () => {
  const { cart, setCart } = useCart();

  const addItem = async ({ variantId, quantity }: addItemParams) => {
    if (quantity <= 0) return;
    try {
      setCart((prevState) => ({ ...prevState, isAdding: true }));
      const { shopifyClient, id } = cart;
      const newCart = await shopifyClient.checkout.addLineItems(id, [
        { variantId, quantity },
      ]);
      setCart((prevState) => ({ ...prevState, ...newCart, isAdding: false }));
      successToast('Item added to cart');
    } catch (error) {
      errorToast('Error adding item to cart');
      setTimeout(() => {
        setCart((prevState) => ({ ...prevState, isAdding: false }));
      }, TWO_SECONDS);
    }
  };

  return addItem;
};

interface removeItemParams {
  lineItemId: string;
}

export const useRemoveItem = () => {
  const { cart, setCart } = useCart();

  const removeItem = async ({ lineItemId }: removeItemParams) => {
    try {
      setCart((prevState) => ({ ...prevState, isRemoving: true }));
      const { shopifyClient, id } = cart;
      const newCart = await shopifyClient.checkout.removeLineItems(id, [
        lineItemId,
      ]);
      setCart((prevState) => ({ ...prevState, ...newCart, isRemoving: false }));
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        setCart((prevState) => ({ ...prevState, isRemoving: false }));
      }, TWO_SECONDS);
    }
  };

  return removeItem;
};

interface updateItemParams {
  variantId: string;
  quantity: number;
}

export const useUpdateItem = () => {
  const { cart, setCart } = useCart();

  const updateItem = async ({ variantId, quantity }: updateItemParams) => {
    if (quantity <= 0) return;
    try {
      setCart((prevState) => ({ ...prevState, isUpdating: true }));
      const { shopifyClient, id } = cart;
      const newCart = await shopifyClient.checkout.updateLineItems(id, [
        { id: variantId, quantity },
      ]);
      setCart((prevState) => ({ ...prevState, ...newCart, isUpdating: false }));
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        setCart((prevState) => ({ ...prevState, isUpdating: false }));
      }, TWO_SECONDS);
    }
  };

  return updateItem;
};
