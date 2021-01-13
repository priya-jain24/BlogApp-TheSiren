import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LatestArticle from './LatestArticle';
import Advertisment from './advertisment';
import TopPosts from './TopPosts';

class CategorySection extends React.Component{
    render(){
        return(
            <div class="row">
                <div class="col-md-8">
                    <LatestArticle articleArr={this.props.articleArr} title={this.props.articletitle}></LatestArticle>
                </div>
                <div class="col-md-4">
                    <TopPosts toppostsArr={this.props.toppostsArr} title={this.props.topposttitle}></TopPosts>
                    <Advertisment></Advertisment>
                </div>
            </div>
        )
    }
}
export default CategorySection;