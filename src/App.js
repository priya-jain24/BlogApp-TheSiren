import React from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import Home from './Components/RouterComp/Home';
import Category from './Components/RouterComp/Category';
import Blog from './Components/RouterComp/Blog';
class App extends React.Component {
 

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/category/:category_name" component={Category} />
            <Route path="/blog/:blog_category/:blog_id" component={Blog} />
            <Route path="/home" component={Home} />
            <Route path="/" exact render={()=>(<Redirect to="/home"></Redirect>)} />
          </Switch>
        </BrowserRouter>
    )
  }
}


export default App;
