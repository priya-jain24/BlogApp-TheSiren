import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/blogheading.css';

class BlogHeading extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col-md-10" id="blog-heading">
                    <h6 id="slant-heading">The</h6><h2>Siren</h2>
                </div>
                <div class="col-md-2">
                    <button type="button" class="btn btn-sm started-btn">Get Started</button>
                </div>
            </div>
        )
    }
}
export default BlogHeading;