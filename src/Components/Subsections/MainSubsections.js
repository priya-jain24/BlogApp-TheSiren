import React from 'react';
import Latest from './Latest';
import LatestArticleSection from './LatestArticleSection';
import LatestStory from './LatestStory';
import TopPostsSection from './TopPostSection';
class MainSubsections extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <Latest latestArr={this.props.LatestList} title="The Latest"></Latest>
                <LatestArticleSection articleArr={this.props.LatestArticleList} title="Latest Articles"></LatestArticleSection>
                <TopPostsSection toppostsArr={this.props.TopPostsArr} title="Top Posts"></TopPostsSection>
                <LatestStory latestStoryArr={this.props.LatestStoriesList} title="Latest Stories"></LatestStory>
            </React.Fragment>
        )
    }
}
export default MainSubsections;