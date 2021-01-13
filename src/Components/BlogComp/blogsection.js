import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from './article.js';
import Relatedblog from './relatedarticle.js';

class BlogSection extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Article data={this.props.blogData}></Article>
                <Relatedblog data_arr = {this.props.relatedBlogs}></Relatedblog>
            </React.Fragment>

        )
    }
}
export default BlogSection;