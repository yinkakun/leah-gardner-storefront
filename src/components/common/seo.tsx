import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

interface seoProps {
  title?: string;
  description?: string;
  image?: string;
}

const SEO = ({ title, description, image }: seoProps) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          url
          title
          description
        }
      }
    }
  `);

  const {
    url,
    title: siteTitle,
    description: siteDescription,
  } = data.site.siteMetadata;

  const metaImage = image;
  const metaTitle = title || siteTitle;
  const metaDescription = description || siteDescription;

  return (
    <Helmet
      titleTemplate={`%s - ${siteTitle}`}
      defaultTitle={siteTitle}
      title={title}
    >
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:title" content={metaTitle} />
      <meta name="description" content={description} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:description" content={metaDescription} />
    </Helmet>
  );
};

export default SEO;
