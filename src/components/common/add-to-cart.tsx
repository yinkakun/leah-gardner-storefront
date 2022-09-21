import { useCart, useAddItem } from '@/context/cart-context';
import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDown, Minus, Plus } from 'react-feather';

interface AddToCartProps {
  variants: readonly GatsbyTypes.ShopifyProductVariant[];
}

const AddToCart = ({ variants }: AddToCartProps) => {
  const { cart } = useCart();
  const { isAdding } = cart;
  const addItem = useAddItem();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(variants[0]);

  const handleAddToCart = () => {
    addItem({ variantId: variant.storefrontId, quantity });
  };

  return (
    <div className="">
      <span className="font-serif text-2xl">${variant.price}</span>
      <div className="mt-6 flex w-full  flex-col gap-3">
        {variants.length > 1 && (
          <SizeSelector
            variant={variant}
            variants={variants}
            setVariant={setVariant}
          />
        )}
        <div className="flex w-full max-w-sm flex-wrap gap-3">
          <QuantityStepper quantity={quantity} setQuantity={setQuantity} />
          <button
            className={`h-10 min-w-[150px] grow bg-orange-500 px-8 py-2 text-sm uppercase text-white duration-300 hover:bg-orange-600 disabled:bg-orange-400 ${
              isAdding ? 'cursor-wait' : ''
            }`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;

interface QuantityStepperProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const QuantityStepper = ({ quantity, setQuantity }: QuantityStepperProps) => {
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="flex h-10 grow border border-orange-400">
      <button
        className="flex grow items-center justify-center border-r border-orange-400 bg-orange-100 p-2 px-5 duration-200 hover:bg-orange-200"
        onClick={handleDecrement}
      >
        <Minus size={16} />
      </button>
      <span className="flex grow items-center justify-center px-6 py-2">
        {quantity}
      </span>
      <button
        className="flex grow items-center justify-center border-l border-orange-400 bg-orange-100 p-2 px-5 duration-200 hover:bg-orange-200"
        onClick={handleIncrement}
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

interface SizeSelectorProps {
  variant: GatsbyTypes.ShopifyProductVariant;
  variants: readonly GatsbyTypes.ShopifyProductVariant[];
  setVariant: React.Dispatch<
    React.SetStateAction<GatsbyTypes.ShopifyProductVariant>
  >;
}

const SizeSelector = ({ variant, variants, setVariant }: SizeSelectorProps) => {
  return (
    <div className="w-full max-w-sm">
      <Listbox value={variant} onChange={setVariant}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default border border-orange-400 bg-orange-50 bg-opacity-50 py-2 pl-3  sm:text-sm">
            <div className="flex items-center justify-between pr-10 backdrop-blur-md">
              <div className="block truncate">{variant.title}</div>
              <span>${variant.price}</span>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDown size={16} aria-hidden="true" />
              </div>
            </div>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leaveTo="opacity-0"
            leaveFrom="opacity-100"
            leave="transition ease-in duration-100"
          >
            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto border border-orange-400">
              {variants.map((variant) => {
                return (
                  <Listbox.Option
                    key={variant.id}
                    value={variant}
                    className={({ active }) =>
                      `flex justify-between border-t border-orange-100 px-3 py-2 pr-10 text-sm first-of-type:border-t-0 ${
                        active ? 'bg-orange-100' : 'bg-orange-50'
                      }`
                    }
                  >
                    <div>{variant.title}</div> <span>${variant.price}</span>
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
