import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ShopifyLocalImage {
  altText: string;
  localFile: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export interface ShopifyProduct extends GatsbyTypes.ShopifyProduct {
  image: ShopifyLocalImage;
  featuredImage: ShopifyLocalImage;
}

export interface ShopifyFeaturedProduct extends GatsbyTypes.ShopifyProduct {
  featuredImage: ShopifyLocalImage;
}

export interface INavLink {
  url: string;
  label: string;
  type?: 'external';
}
