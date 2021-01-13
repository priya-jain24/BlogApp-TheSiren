import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopPosts from './TopPosts';
import './Styles/toppostssection.css';
class TopPostSection extends React.Component{

    render(){
        return(
            <div id="TopPosts-section" class="subsections">
                <div class="row">
                <div class="col-md-8">
                        <div class="card" id="toppost-main">
                            <img class="card-img-top" src="../photo-1.jfif" alt="Blog image"></img>
                            <div class="card-img-overlay">
                                <h4 class="card-title">Title of verticle gallery</h4>
                                <p class="card-text">Travel / August 21 2017</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4" id="topPosts-head">
                        <TopPosts toppostsArr={this.props.toppostsArr} title={this.props.title}></TopPosts>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopPostSection;