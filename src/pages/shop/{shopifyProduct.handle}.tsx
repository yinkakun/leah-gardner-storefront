import Container from '@/components/layout/container';
import { styled } from '@stitches/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ShopifyProduct } from '@/types';
import { Fragment } from 'react';
import AddToCart from '@/components/common/add-to-cart';
import { graphql } from 'gatsby';
import SEO from '@/components/common/seo';

const HtmlContent = styled('div', {
  '& *+*': {
    marginTop: '0.8rem',
  },
  b: {
    fontWeight: 400,
  },
});

const ShopItem = ({ data }: any) => {
  const { shopifyProduct } = data;
  const { title, variants, featuredImage, descriptionHtml }: ShopifyProduct =
    shopifyProduct;

  return (
    <Fragment>
      <SEO title={title} />
      <Container className="flex h-full w-full grow flex-col">
        <div className="flex h-full min-h-full grow flex-wrap items-center justify-around gap-10 py-20 md:py-10">
          <div className="border border-orange-300 bg-stone-600 bg-opacity-70 p-4 backdrop-blur-xl">
            <GatsbyImage
              className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
              image={featuredImage?.localFile?.childImageSharp?.gatsbyImageData}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <h1 className="font-serif text-4xl">{title}</h1>
            </div>
            <AddToCart variants={variants} />
            <div>
              <HtmlContent
                dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                className="max-w-lg text-sm text-gray-500"
              />
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default ShopItem;

export const query = graphql`
  query ProductQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      handle
      descriptionHtml
      variants {
        id
        price
        title
        storefrontId
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
`;
