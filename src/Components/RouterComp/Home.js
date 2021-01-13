import React from 'react';
import HeaderMain from './../Header/HeaderMain'
import Main from './../MainComp/Main';
import Subsections from './../Subsections/MainSubsections';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/home.css';
import './data';
import { data } from './data';
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
          header: data.header,
          MainBlogArr: data.MainBlogArr,
          LatestBlogArr:data.LatestBlogArr,
          LatestArticleArr:data.LatestArticleArr,
          TopPosts:data.TopPosts,
          LatestStoriesArr:data.LatestStoriesArr
        }
      }
    render() {
        return (
            <React.Fragment>
                <div class="container-fluid">
                    <div class="maincontainer">
                        <HeaderMain linklist={this.state.header}></HeaderMain>
                        <Main cardarr={this.state.MainBlogArr}></Main>
                        <Subsections LatestList={this.state.LatestBlogArr} LatestArticleList={this.state.LatestArticleArr} TopPostsArr={this.state.TopPosts} LatestStoriesList={this.state.LatestStoriesArr}></Subsections>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Home;