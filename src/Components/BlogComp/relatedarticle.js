import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/relatedarticle.css';

class Relatedarticle extends React.Component{

    render(){
        return(
            <div class="relatedArticles">
                <div class="relatedArticleheading">
                    <h6>More From The Siren</h6>
                </div>
                <hr/>
                <div id="related-cards">
                {this.props.data_arr.map(blog =>
                        <div class="card">
                        <img class="card-img-top" src={blog.imgpath} alt="Blog image"></img>
                        <div class="card-body">
                            <h4 class="card-title">{blog.title}</h4>
                            <div class="author-detail">
                                    <img src="../../Mask.png"></img>
                                    <div class="author-name">
                                        <p id="a_name">{blog.author}</p>
                                        <p id="a_date">{blog.date}</p>
                                    </div>
                                </div>
                        </div>
                    </div>                    
                )}
                </div>
            </div>
        )
    }
}
export default Relatedarticle;