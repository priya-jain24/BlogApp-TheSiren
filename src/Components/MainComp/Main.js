import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Main.css';
import { Link } from 'react-router-dom';
import {generateLink} from '../RouterComp/BlogLink.js';
class Main extends React.Component {
    generateID(item) {
        return "card-" + item.id;
    }

    render() {
        return (
            <React.Fragment>
                <div class="top-cards">
                    <Link to={generateLink('home', 'MainBlogArr',this.props.cardarr[0])}>
                        <div class="card bg-dark text-white" id={this.generateID(this.props.cardarr[0])}>
                            <img class="card-img" src={this.props.cardarr[0].imgpath} alt="card image" />
                            <div class="card-img-overlay">
                                <h4 class="card-title">{this.props.cardarr[0].title}</h4>
                                <p class="card-text">{this.props.cardarr[0].type}/{this.props.cardarr[0].date}</p>
                            </div>
                        </div>
                    </Link>

                    <div class="other-cards">
                        <Link to={generateLink('home', 'MainBlogArr',this.props.cardarr[1])}>
                            <div class="card bg-dark text-white" id={this.generateID(this.props.cardarr[1])}>
                                <img class="card-img" src={this.props.cardarr[1].imgpath} alt="card image" />
                                <div class="card-img-overlay">
                                    <h4 class="card-title">{this.props.cardarr[1].title}</h4>
                                    <p class="card-text">{this.props.cardarr[1].type}/{this.props.cardarr[1].date}</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={generateLink('home', 'MainBlogArr',this.props.cardarr[2])}>
                            <div class="card bg-dark text-white" id={this.generateID(this.props.cardarr[2])}>
                                <img class="card-img" src={this.props.cardarr[2].imgpath} alt="card image" />
                                <div class="card-img-overlay">
                                    <h4 class="card-title">{this.props.cardarr[2].title}</h4>
                                    <p class="card-text">{this.props.cardarr[2].type}/{this.props.cardarr[2].date}</p>
                                </div>
                            </div>
                        </Link>

                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Main;

/*{this.props.cardarr.map(item =>
    <div class="card bg-dark text-white" id={this.generateID(item)}>
        <img class="card-img" src={item.imgpath} alt="card image"/>
            <div class="card-img-overlay">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.type}/{item.date}</p>
            </div>
    </div>
  )}*/
