import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/heading.css';

class Heading extends React.Component{
    
    render(){
        return(
            <div class="section-heading">
                <h3 class="section-main-heading">{this.props.title}</h3>
                <hr></hr>
            </div>
        )
    }
}
export default Heading;