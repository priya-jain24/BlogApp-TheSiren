import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/latestarticle.css';
import { Link } from 'react-router-dom';
import { generateLink } from '../RouterComp/BlogLink.js';

class LatestArticle extends React.Component {
    render() {
        return (
            <div id="latestArticle-cards">
                {this.props.articleArr.map(article =>
                    <>
                        <hr></hr>
                        <Link to={generateLink('home', 'LatestArticleArr',article)}>
                            <div class="card">
                                <img class="card-img" src={article.imgpath} alt="Blog image"></img>
                                <div class="card-body">
                                    <h4 class="card-title">{article.title}</h4>
                                    <p class="card-text card-desc">{article.description}</p>
                                    <p class="card-text mt-5">{article.type} <span class="latest-date">/ {article.date}</span></p>
                                </div>
                            </div>
                        </Link>

                    </>
                )}
            </div>
        )
    }
}

export default LatestArticle;