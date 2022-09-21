import Container from '@/components/layout/container';
import { GatsbyImage } from 'gatsby-plugin-image';
import AddToCart from '../common/add-to-cart';

interface IFeaturedProduct {
  product: GatsbyTypes.ShopifyProduct;
  imageFirst: boolean;
}

const FeaturedProducts = ({ product, imageFirst }: IFeaturedProduct) => {
  const { title, variants, priceRangeV2, featuredImage } = product;

  return (
    <Container className="m-12 grid w-full grid-cols-1 lg:my-16 lg:grid-cols-2">
      <div
        className={`flex flex-col items-center justify-center border border-orange-200 bg-orange-50 bg-opacity-50 py-10 px-4 ${
          imageFirst ? 'border-t-0 md:border-l-0 lg:border-t' : ''
        }`}
      >
        <div className="flex max-w-md flex-col gap-3">
          <h2 className="font-serif text-lg md:text-3xl">{title}</h2>

          <AddToCart variants={variants} />
        </div>
      </div>

      <div
        className={`flex items-center  justify-center border border-b-0 border-orange-200  bg-orange-50 py-10 px-4 md:border-b ${
          imageFirst ? '-order-1' : '-order-1 lg:order-2 lg:border-l-0'
        }`}
      >
        <div className="border border-orange-200 bg-white bg-opacity-60 p-4 pb-8 backdrop-blur-md">
          <GatsbyImage
            alt={title}
            className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
            image={featuredImage?.localFile?.childImageSharp?.gatsbyImageData!}
          />
          <div className="mt-2 flex justify-between gap-4 text-xs uppercase text-gray-400">
            <span>{title}</span>
            <span>
              {priceRangeV2.minVariantPrice.amount}
              {priceRangeV2.minVariantPrice.currencyCode}
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedProducts;
