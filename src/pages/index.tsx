import { Fragment } from 'react';
import Hero from '@/components/sections/hero';
import ProductCollection from '@/components/sections/product-collection';
import FeaturedProducts from '@/components/sections/featured-product';
import Newsletter from '@/components/sections/newsletter';
import Reviews from '@/components/sections/reviews';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '@/components/common/seo';
import AnimateReveal from '@/components/common/animate-reveal';
import Disclaimer from '@/components/sections/disclaimer';

const Homepage = () => {
  const query = useStaticQuery(graphql`
    {
      new: shopifyCollection(handle: { eq: "newest" }) {
        products {
          title
          handle
          id
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
      originals: shopifyCollection(handle: { eq: "originals" }) {
        products {
          title
          handle
          id
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
      limitedEditions: shopifyCollection(handle: { eq: "limited-editions" }) {
        products {
          title
          handle
          id
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
      featured: shopifyCollection(handle: { eq: "featured-product" }) {
        products {
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
          variants {
            id
            price
            title
            storefrontId
          }
        }
      }
    }
  `);

  return (
    <Fragment>
      <SEO title="Home" />
      <Hero />
      <AnimateReveal delay={3.5}>
        <ProductCollection title="Latest Works" products={query.new.products} />
      </AnimateReveal>
      <AnimateReveal>
        <FeaturedProducts
          product={query.featured.products[1]}
          imageFirst={true}
        />
      </AnimateReveal>
      <AnimateReveal>
        <ProductCollection
          title="Originals"
          products={query.originals.products}
        />
      </AnimateReveal>
      <AnimateReveal>
        <FeaturedProducts
          product={query.featured.products[2]}
          imageFirst={false}
        />
      </AnimateReveal>
      <AnimateReveal>
        <ProductCollection
          title="Limited Editions"
          products={query.limitedEditions.products}
        />
      </AnimateReveal>
      <AnimateReveal>
        <FeaturedProducts
          product={query.featured.products[3]}
          imageFirst={false}
        />
      </AnimateReveal>

      <div className="my-12 lg:my-16">
        <Reviews />
      </div>

      <AnimateReveal>
        <Newsletter />
      </AnimateReveal>

      <AnimateReveal>
        <Disclaimer />
      </AnimateReveal>
    </Fragment>
  );
};

export default Homepage;
