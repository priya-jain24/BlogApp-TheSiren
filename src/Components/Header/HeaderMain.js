import React from 'react';
import './Styles/HeaderMain.css';
import {Link} from 'react-router-dom';

class HeaderMain extends React.Component{

    render(){
        return(
            <React.Fragment>
            <div id="top-heading">
                <h5 id="slant-heading">The</h5><h2>Siren</h2>
            </div>
            <div id="header-nav">
                {this.props.linklist.map(item_header => 
                    <div class="header-item">
                    <Link to={item_header.link} target="_blank">{item_header.title}</Link>
                    </div>
                )}
            </div>
            <hr></hr>
            </React.Fragment>
        )
    }
}

export default HeaderMain;