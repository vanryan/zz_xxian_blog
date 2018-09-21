import React from 'react';
import Post from '../Post';

class CollectionTemplateDetails extends React.Component {
  render() {
    const items = [];
    const { collection } = this.props.pathContext;
    const posts = this.props.data.allMarkdownRemark.edges;
    posts.forEach((post) => {
      items.push(<Post data={post} key={post.node.fields.slug} />);
    });

    return (
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">
              {collection.toUpperCase()}
            </h1>
            <div className="page__body">
              {items}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CollectionTemplateDetails;
