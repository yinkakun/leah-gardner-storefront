import SEO from '@/components/common/seo';
import Layout from '@/components/layout/layout';

const NotFound = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <p>Sorry, page not found!</p>
    </Layout>
  );
};

export default NotFound;
