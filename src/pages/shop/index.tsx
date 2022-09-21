import { graphql, useStaticQuery } from 'gatsby';
import Newsletter from '@/components/sections/newsletter';
import Container from '@/components/layout/container';
import ProductCard from '@/components/common/product-card';
import { Fragment } from 'react';
import { ShopifyProduct } from '@/types';
import FlipMove from 'react-flip-move';

const ShopPage = ({ location }: { location: Location }) => {
  return (
    <Fragment>
      <Header />
      <ProductGrid location={location} />
      <Newsletter />
    </Fragment>
  );
};

export default ShopPage;

const ProductGrid = ({ location }: { location: Location }) => {
  const query = useStaticQuery(graphql`
    {
      products: allShopifyProduct {
        nodes {
          title
          handle
          id
          collections {
            handle
          }
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

  const allProducts: ShopifyProduct[] = query.products.nodes;
  const collections: ICollection[] = query.collections.nodes;

  const hash = location.hash.replace('#', '');
  const filterProducts = () => {
    if (hash === '') return allProducts;

    const isHashInCollections = collections.some(
      ({ handle }) => handle === hash,
    );
    if (!isHashInCollections) return allProducts;

    const filteredProducts = allProducts.filter((product) =>
      product.collections.some(({ handle }) => handle === hash),
    );

    return filteredProducts;
  };

  const filteredProducts = filterProducts();

  return (
    <Container>
      <div className="mt-4 flex w-full flex-wrap gap-4 lg:flex-nowrap">
        <div className="sticky top-20 h-fit shrink-0 grow basis-60 border border-orange-300 p-4 md:grow-0">
          <Sidebar collections={collections} location={location} />
        </div>

        {/* @ts-ignore */}
        <FlipMove className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {filteredProducts.map((product) => {
            const { id, handle, title, priceRangeV2, featuredImage } = product;
            return (
              <ProductCard
                key={id}
                name={title}
                slug={handle}
                image={featuredImage}
                price={`${priceRangeV2.minVariantPrice.amount} ${priceRangeV2.minVariantPrice.currencyCode}`}
              />
            );
          })}
        </FlipMove>
      </div>
    </Container>
  );
};

const Header = () => {
  return (
    <Container>
      <div className="w-full py-12 pt-20">
        <h1 className="text-center font-serif text-4xl uppercase md:text-6xl">
          Shop
        </h1>
      </div>
    </Container>
  );
};

interface SidebarProps {
  collections: { handle: string; title: string }[];
  location: Location;
}

const setHash = (hash: string) => {
  location.hash = hash;
};

const Sidebar = ({ collections, location }: SidebarProps) => {
  const hash = location.hash.replace('#', '');
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => setHash('')}
        className={`${
          hash === '' ? 'text-orange-600' : ''
        }  select-none text-left text-sm uppercase`}
      >
        All
      </button>
      {collections
        .filter(({ handle }) => handle !== 'all')
        .map(({ title, handle }) => {
          const hash = location.hash.replace('#', '');

          return (
            <button
              onClick={() => setHash(handle)}
              key={handle}
              className={`flex items-center gap-2 ${
                hash === handle ? 'text-orange-600' : ''
              } text-left text-sm uppercase`}
            >
              {title}
            </button>
          );
        })}
    </div>
  );
};
