import React from 'react';
import Heading from './heading';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/latestarticlesection.css';
import Advertisment from './advertisment';
import LatestArticle from './LatestArticle';

class LatestArticleSection extends React.Component {
    render() {
        return (
            <div id="LatestArticle-section" class="subsections">
                <Heading title={this.props.title}></Heading>
                <div class="row" id="latestarticle-row">
                    <div class="col-md-8">
                        <LatestArticle articleArr={this.props.articleArr} ></LatestArticle>
                    </div>
                    <div class="col-md-4">
                        <Advertisment></Advertisment>
                    </div>
                </div>

            </div>
        )
    }

}
export default LatestArticleSection;