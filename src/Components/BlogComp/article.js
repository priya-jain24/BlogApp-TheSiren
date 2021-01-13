import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faYoutubeSquare, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import {faThumbsUp, faShare} from '@fortawesome/free-solid-svg-icons';
import './Styles/article.css';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    render() {
        return (
            <div class="article-container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="article-comments">
                            <div class="article-likes">
                            <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                            <span>9.3k</span>
                            </div>
                            <div class="article-share">
                            <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
                            <span>Share this article</span>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="article-block">
                            <div class="article-heading">
                                <h4>{this.state.data.title}</h4>
                            </div>
                            <div>
                                <div class="author-detail">
                                    <img src="../../Mask.png"></img>
                                    <div class="author-name">
                                        <p id="a_name">{this.state.data.author}</p>
                                        <p id="a_date">{this.state.data.date}</p>
                                    </div>
                                </div>
                                <div class="share-social">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                    <FontAwesomeIcon icon={faYoutubeSquare} />
                                </div>
                            </div>
                            <div class="article-data">
                                <img src={this.state.data.imgpath}></img>
                                <p>{this.state.data.description}</p>
                            </div>
                            <div class="article-likes">
                            <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                            <span>9.3k</span>
                            </div>
                            <hr/>
                            <div class="author-detail">
                                    <img src="../../Mask.png"></img>
                                    <div class="author-name">
                                        <p id="a_by">WRITTEN BY</p>
                                        <p id="a_name">{this.state.data.author}</p>
                                        <p id="a_date">{this.state.data.date}</p>
                                    </div>
                                </div>
                                <hr/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Article;