import ProductCard from '@/components/common/product-card';
import Container from '@/components/layout/container';
import { ShopifyProduct } from '@/types';
import { Link } from 'gatsby';

interface ProductCollectionProps {
  title: string;
  products: ShopifyProduct[];
}

const ProductCollection = ({ title, products }: ProductCollectionProps) => {
  const firstFourProducts = products.slice(0, 4);

  return (
    <Container>
      <div className="mt-16 flex w-full flex-col items-center lg:my-16 lg:mt-32">
        <h2 className=" font-serif text-2xl font-normal uppercase lg:text-4xl">
          {title}
        </h2>

        <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {firstFourProducts.map(
            ({ title, handle, id, priceRangeV2, featuredImage }) => {
              return (
                <ProductCard
                  key={id}
                  name={title}
                  slug={handle}
                  price={`${priceRangeV2.minVariantPrice.amount} ${priceRangeV2.minVariantPrice.currencyCode}`}
                  image={featuredImage}
                />
              );
            },
          )}
        </div>
        <div className="mt-4 flex w-full items-center justify-center border border-orange-200 py-3">
          <Link
            className="underline-['red'] uppercase text-gray-600 underline decoration-transparent underline-offset-1 transition-all duration-300 hover:text-orange-500"
            to="/shop"
          >
            Shop All
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ProductCollection;
