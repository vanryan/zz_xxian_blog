import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import CollectionTemplateDetails from '../components/CollectionTemplateDetails';

class CollectionTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const { collection } = this.props.pathContext;

    return (
      <div>
        <Helmet title={`${collection} - ${title}`} />
        <Sidebar {...this.props} />
        <CollectionTemplateDetails {...this.props} />
      </div>
    );
  }
}

export default CollectionTemplate;

export const pageQuery = graphql`
  query CollectionPage($collection: String) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
        }
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { collection: { eq: $collection} layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
