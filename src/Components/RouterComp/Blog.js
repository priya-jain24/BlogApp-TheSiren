import React from 'react';
import {data} from './data';
import BlogHeading from '../BlogComp/blogheading';
import BlogSection from '../BlogComp/blogsection';
import 'bootstrap/dist/css/bootstrap.min.css';

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blogData:{
                id: 1,
                title: "Joshua Tree Overnight Adventure",
                type: "Travel",
                date: "August 21 2017",
                imgpath: "../../photo-1.jfif",
                author:"Dmitry Nozhenko",
                tags:["Travel","Adventure"],
                description: "Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces."
              },
            relatedblog:data.LatestBlogArr
        }
    }
    /*updateData = (val) =>{
        this.setState({blogData:val}) 
    }
    getData(){
        var blogcat = this.props.match.params.blog_category;
        var blogIdData = this.props.match.params.blog_id;
        var blogtype = blogIdData.split("_")[0];
        var blogId = blogIdData.split("_")[1];
        if(blogcat === 'home'){
            console.log(data[blogtype].filter(x => x.id == blogId)[0]);
            this.updateData(data[blogtype].filter(x => x.id == blogId)[0])
        }
        else{
            this.updateData(data[blogcat][blogtype].filter(x => x.id == blogId)[0]) 
        }
    } */
    render(){
        return(
            <React.Fragment>
                <div class="container-fluid">
                    <div class="main-container">
                        <BlogHeading></BlogHeading>
                        <BlogSection blogData={this.state.blogData} relatedBlogs={this.state.relatedblog}></BlogSection>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Blog;