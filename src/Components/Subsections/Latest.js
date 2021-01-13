import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './heading';
import './Styles/latest.css';
import { Link } from 'react-router-dom';
import {generateLink} from '../RouterComp/BlogLink.js';

class Latest extends React.Component{
    render(){
        return(
            <div id="Latest-section" class="subsections">
                <Heading title={this.props.title}></Heading>
                <div id="latest-cards">
                {this.props.latestArr.map(blog =>
                    <Link to={generateLink('home','LatestBlogArr',blog)}>
                        <div class="card">
                        <img class="card-img-top" src={blog.imgpath} alt="Blog image"></img>
                        <div class="card-body">
                            <h4 class="card-title">{blog.title}</h4>
                            <p class="card-text card-desc">{blog.description}</p>
                            <p class="card-text">{blog.type} <span class="latest-date">/ {blog.date}</span></p>
                        </div>
                    </div>
                    </Link>
                    
                )}
                </div>
            </div>
        )
    }
}

export default Latest;