import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ShopifyLocalImage } from '@/types';
import { forwardRef } from 'react';

interface ProductCardProps {
  name: string;
  price: string;
  slug: string;
  image: ShopifyLocalImage;
  ref: React.Ref<HTMLDivElement>;
}

const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  (props, ref) => {
    const { name, price, slug, image } = props;
    return (
      <div ref={ref} className="product-card border border-orange-300">
        <Link to={`/shop/${slug}`}>
          <div className=" flex flex-col gap-4 p-4">
            <GatsbyImage
              alt={image.altText || name}
              className="aspect-square"
              image={image.localFile.childImageSharp.gatsbyImageData}
            />
            <div className="item flex justify-between text-xs uppercase text-gray-500">
              <span>{name}</span>
              <span>{price}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  },
);

ProductCard.displayName = 'ProductCard';

export default ProductCard;
