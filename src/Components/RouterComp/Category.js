import React from 'react';
import HeaderMain from './../Header/HeaderMain';
import CategorySection from '../Subsections/CategorySection';
import {data} from './data';
class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: data.header,
            'bollywood': data.bollywood,
            'technology': data.technology,
            'hollywood': data.hollywood,
            'fitness': data.fitness,
            'food': data.food,
            'cat': this.props.match.params.category_name
        }
    }

    render() {
        if (this.state.hasOwnProperty(this.state.cat.toLowerCase())) {
            return (
                <React.Fragment>
                    <div class="container-fluid">
                        <div class="maincontainer">
                            <HeaderMain linklist={this.state.header}></HeaderMain>
                            <CategorySection articleArr={this.state[this.state.cat].LatestArticleArr} articletitle={this.state.cat} toppostsArr={this.state[this.state.cat].TopPosts} topposttitle="Top Posts"></CategorySection>
                        </div>
                    </div>

                </React.Fragment>
            )
        }
        else {
            return (<h3>Error. Please choose different category</h3>)
        }

    }
}
export default Category;