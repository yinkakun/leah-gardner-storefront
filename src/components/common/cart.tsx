import { useState, useEffect, useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useCart, useRemoveItem, useUpdateItem } from '@/context/cart-context';
import { Base64 } from 'base64-string';
import { Link } from 'gatsby';
import { LineItem as ILineItem } from 'shopify-buy';
import { Minus, Plus } from 'react-feather';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getShopifyImage } from 'gatsby-source-shopify';
import { useLenis } from '@/context/lenis-context';
import gsap from 'gsap';

const formatUsd = (price: number | string) => {
  if (typeof price === 'string') {
    price = parseInt(price);
  }
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

const LineItemImage = ({ item }: { item: ILineItem }) => {
  const variantImage = {
    ...item.attrs.variant.image,
    originalSrc: item.attrs.variant.image.src,
  };
  const lineItemImage = getShopifyImage({
    width: 100,
    height: 100,
    layout: 'fixed',
    image: variantImage,
  });

  return (
    <GatsbyImage
      image={lineItemImage}
      alt={item.attrs.variant.image.altText || item.attrs.variant.title}
    />
  );
};

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeCart = () => setIsOpen(false);
  const { lenis } = useLenis();
  const openCart = () => {
    if (isOpen) {
      return;
    }

    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
    }

    if (!isOpen) {
      lenis?.start();
    }
  }, [isOpen, lenis]);

  const { cart } = useCart();
  const isCartEmpty = cart.lineItems.length === 0;

  const totalLineItems = cart.lineItems.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);

  return (
    <Fragment>
      <button
        className={`flex items-center gap-1 ${
          isOpen ? 'pointer-events-none' : ''
        }`}
        type="button"
        onClick={openCart}
      >
        <span className="text-xs uppercase opacity-80">
          {isOpen ? 'Close' : ' Cart'}
        </span>
        <span className="flex h-5 w-8 items-center justify-center rounded-full bg-zinc-700 p-2 text-xs text-orange-50">
          {totalLineItems && totalLineItems > 0 ? totalLineItems : 0}
        </span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeCart}>
          <Transition.Child
            as={Fragment}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            enter="ease-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            leave="ease-in duration-300"
          >
            <div className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-xl" />
          </Transition.Child>

          <div className="fixed inset-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0 translate-x-full"
            >
              <Dialog.Panel className="ml-auto flex h-screen w-full max-w-xl transform items-center justify-center overflow-y-auto border border-l border-orange-300 bg-orange-50 p-6 py-10 text-left align-middle shadow-xl transition-all">
                {isCartEmpty ? (
                  <EmptyCart closeCart={closeCart} />
                ) : (
                  <CartSummary />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
};

export default Cart;

interface EmptyCartProps {
  closeCart: () => void;
}

const EmptyCart = ({ closeCart }: EmptyCartProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h3 className="font-serif text-2xl uppercase md:text-4xl">
        Your cart is empty
      </h3>
      <Link
        to="/shop"
        onClick={closeCart}
        className="hover:bg-orange-600n mt-4 bg-orange-500 py-2 px-6 text-white duration-200"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

const CartSummary = () => {
  const { cart } = useCart();

  const handleCheckout = () => {
    window.open(cart.webUrl, '_self');
  };

  return (
    <div className="flex h-full w-full flex-col justify-between pt-4">
      <div>
        <h3 className="uppercase">Cart Summary</h3>

        <div className="mt-4 flex flex-col gap-6 md:gap-8">
          {cart.lineItems.map((item) => {
            return <LineItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between border-y border-orange-400 py-2 text-sm uppercase opacity-80">
          <span className="uppercase">
            Subtotal Total ({cart.lineItems.length} items)
          </span>
          <span>{formatUsd(cart.subtotalPrice)}</span>
        </div>
        <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
          <Link
            to="/"
            className=" border border-orange-400 bg-orange-50 py-2 px-6 text-sm uppercase duration-300 hover:bg-orange-100"
          >
            Continue Shopping
          </Link>
          <button
            className=" bg-orange-500  py-2 px-6 text-sm uppercase text-white duration-300 hover:bg-orange-600"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

const LineItem = ({ item }: { item: ILineItem }) => {
  const { cart } = useCart();
  const { isUpdating } = cart;
  const encode = new Base64();
  const quantity = item.quantity;
  const removeItem = useRemoveItem();
  const updateItem = useUpdateItem();
  const variantId = encode.encode(item.id.toString());
  const lineItemRef = useRef<HTMLDivElement>(null);

  const size = (() => {
    if (item.attrs.variant.title === 'Default Title') {
      return '';
    }
    return item.attrs.variant.title;
  })();

  const handleRemove = () => {
    gsap.to(lineItemRef.current, {
      autoAlpha: 0,
      duration: 0.3,
      height: 0,
      display: 'none',
      ease: 'sine.in',
      onComplete: () => {
        removeItem({ lineItemId: item.id.toString() });
      },
    });
  };

  const handleIncrement = () => {
    updateItem({
      variantId,
      quantity: item.quantity + 1,
    });
  };

  const handleDecrement = () => {
    updateItem({
      variantId,
      quantity: item.quantity - 1,
    });
  };

  return (
    <div className="flex items-center justify-between" ref={lineItemRef}>
      <div className="flex items-center gap-4">
        <div className="h-[100px] w-[100px] border">
          <LineItemImage item={item} />
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-serif text-base leading-none md:text-lg">
            {item.title}
          </div>

          <div className="flex items-center gap-4 text-xs uppercase opacity-75">
            <span>Price: {formatUsd(item.attrs.variant.price * quantity)}</span>
            {size && <span>Size: {size}</span>}
          </div>

          <div className="flex w-fit border border-orange-300">
            <button
              className={`border-r border-orange-300 bg-orange-100 p-1 duration-200 hover:bg-orange-200 ${
                isUpdating && 'cursor-wait'
              }`}
              onClick={handleDecrement}
              disabled={isUpdating || quantity === 1}
            >
              <Minus size={16} />
            </button>
            <div className="flex items-center justify-center px-2 text-xs">
              {item.quantity}
            </div>
            <button
              className={`border-l border-orange-300 bg-orange-100 p-1 duration-200 hover:bg-orange-200 ${
                isUpdating && 'cursor-wait'
              }`}
              onClick={handleIncrement}
              disabled={isUpdating}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex h-full flex-col justify-between">
          <button
            className="ml-auto w-fit text-xs uppercase underline underline-offset-4"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
