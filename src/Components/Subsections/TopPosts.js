import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './heading';
import './Styles/topposts.css';
import { Link } from 'react-router-dom';
import { generateLink } from '../RouterComp/BlogLink.js';

class TopPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topPost: this.props.toppostsArr[0],
            OtherPost: this.props.toppostsArr.slice(1, 4)
        }
    }
    render() {
        return (
            <div>
                <Heading title={this.props.title}></Heading>
                <div id="topPosts-cards">
                    <Link to={generateLink('home', 'TopPosts', this.state.topPost)}>
                        <div class="card" id="topPost-maincard">
                            <img class="card-img-top" src={this.state.topPost.imgpath} alt="Blog image"></img>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-10">
                                        <h4 class="card-title">{this.state.topPost.title}</h4>
                                        <p class="card-text">{this.state.topPost.type} <span class="latest-date">/ {this.state.topPost.date}</span></p>
                                    </div>
                                    <div class="col-md-2">
                                        <p class="card-text card-id">{this.state.topPost.id}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Link>

                    <hr></hr>
                    <div id="topPost-othercards">
                        {this.state.OtherPost.map(post =>
                            <>
                                <Link to={generateLink('home', 'TopPosts', post)}>
                                    <div class="card">
                                        <img class="card-img" src={post.imgpath} alt="Blog image"></img>
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-10">
                                                    <h5 class="card-title">{post.title}</h5>
                                                    <p class="card-text">{post.type} <span class="latest-date">/ {post.date}</span></p>
                                                </div>
                                                <div class="col-md-2">
                                                    <p class="card-text card-id">{post.id}</p>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </Link>

                                <hr></hr>
                            </>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default TopPosts;
