import { Link, graphql, useStaticQuery } from 'gatsby';
import { useState, Fragment, useEffect } from 'react';
import { Slant as Hamburger } from 'hamburger-react';
import Container from '@/components/layout/container';
import NavLinks from '@/components/common/nav-links';
import { Dialog, Transition } from '@headlessui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Cart from '../common/cart';
import { useLenis } from '@/context/lenis-context';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { lenis } = useLenis();

  const closeMenu = () => {
    setOpen(false);
  };

  const openMenu = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
    }

    if (!isOpen) {
      lenis?.start();
    }
  }, [isOpen, lenis]);

  const query = useStaticQuery(graphql`
    {
      products: allShopifyProduct(
        filter: {
          collections: { elemMatch: { handle: { eq: "featured-product" } } }
        }
        limit: 3
      ) {
        nodes {
          title
          handle
          id
          description
          descriptionHtml
          priceRangeV2 {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            altText
          }
        }
      }
      collections: allShopifyCollection {
        nodes {
          handle
          title
        }
      }
    }
  `);
  interface ICollection {
    handle: string;
    title: string;
  }

  const featuredProduct = query.products.nodes;
  const collections: ICollection[] = query.collections.nodes;

  const collectionLink = collections
    .filter(({ handle }) => handle !== 'all')
    .map((collection) => {
      return {
        label: collection.title,
        url: `/shop/#${collection.handle}`,
      };
    });

  return (
    <header className="fixed left-0 right-0 top-0 z-[60] flex h-12 border-b border-orange-400 border-opacity-40 bg-orange-50 bg-opacity-80 font-normal backdrop-blur-lg">
      <Container className="flex w-full items-center justify-between">
        <button
          className={`-ml-3 flex items-center text-xs  uppercase opacity-80 ${
            isOpen ? ' pointer-events-none' : ''
          }`}
          onClick={openMenu}
        >
          <Hamburger toggled={isOpen} size={16} />
          <span>Shop</span>
        </button>

        <Link
          to="/"
          className="font-serif text-base uppercase tracking-[0.2em] antialiased"
        >
          Leah Gardner
        </Link>
        <Cart />
      </Container>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog onClose={closeMenu} className="relative z-50">
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

          <Transition.Child
            as={Fragment}
            enterFrom="opacity-0 -translate-y-full"
            enterTo="translate-y-0 opacity-100"
            enter="ease-out duration-500"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
            leave="ease-in duration-300"
          >
            <nav className="via-bg-orange-50 fixed top-12 z-50 w-full border-0 border-b border-orange-300 bg-gradient-to-r from-orange-50 via-orange-50 to-orange-50 py-10">
              <Dialog.Panel>
                <div className="flex h-full w-full flex-col">
                  <Container className="flex w-full flex-col">
                    <div className="flex w-full items-center justify-between gap-5">
                      <NavLinks
                        onCLick={closeMenu}
                        heading="Collections"
                        links={collectionLink}
                      />

                      <FeaturedProduct
                        products={featuredProduct}
                        onCLick={closeMenu}
                      />
                    </div>
                  </Container>
                </div>
              </Dialog.Panel>
            </nav>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Header;

interface IFeaturedProduct {
  products: GatsbyTypes.ShopifyProduct[];
  onCLick?: () => void;
}

const FeaturedProduct = ({ products, onCLick }: IFeaturedProduct) => {
  return (
    <div className="hidden lg:flex">
      <div className="flex gap-8">
        {products.map((product) => {
          const { featuredImage, title, handle, priceRangeV2 } = product;

          return (
            <Link
              to={`/shop/${handle}`}
              className="flex flex-col gap-4 border border-orange-300 bg-white bg-opacity-70 p-4 backdrop-blur-xl"
              key={product.handle}
              onClick={onCLick}
            >
              <div>
                <GatsbyImage
                  alt={title}
                  image={
                    featuredImage?.localFile?.childImageSharp?.gatsbyImageData!
                  }
                  className="h-48 w-48"
                />
              </div>
              <div className="flex gap-2 text-xs uppercase">
                <h3 className="font-serif">{title}</h3>
                <span>$ {priceRangeV2?.minVariantPrice?.amount} </span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="writing-mode-vertical-rl ml-4 text-center font-serif text-sm uppercase tracking-widest opacity-80">
        <span className="">Featured Products</span>
      </div>
    </div>
  );
};
