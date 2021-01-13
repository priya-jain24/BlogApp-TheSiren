import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './heading';
import './Styles/lateststory.css';
import {Link} from 'react-router-dom';
import { generateLink } from '../RouterComp/BlogLink.js';

class LatestStory extends React.Component {
    render() {
        return (
            <div id="Lateststory-section" class="subsections">
                <Heading title={this.props.title}></Heading>
                <hr class="lateststory-hr"></hr>
                <div id="lateststory-cards">
                    {this.props.latestStoryArr.map(story =>
                        <Link to={generateLink('home', 'LatestStoriesArr',story)}>
                            <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">{story.title}</h3>
                                <p class="card-text card-desc">{story.description}</p>
                                <p class="card-text">{story.type.toUpperCase()} <span class="latest-date">/ {story.date}</span></p>
                            </div>
                        </div>
                        </Link>
                        
                    )}
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default LatestStory;
/*{this.props.latestStoryArr.map(story =>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">{story.title}</h4>
            <p class="card-text">{story.description}</p>
            <p class="card-text">{story.type} / {story.date}</p>
        </div>
    </div>
)} */