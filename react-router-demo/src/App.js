import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

import Home from './components/Home.js'
import Topic from './components/Topic.js'
import Header from './Header.js'
import User from './components/User.js'


class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Route render={props => (
          <div>
            <Header/>

            <Route exact path='/' component={Home} />
            <Route path='/topic/:id' component={Topic} />
            <Route path='/user/:loginname' component={User} />

            <h1>底部Footer</h1>
          </div>
        )} />
      </BrowserRouter>
    )
  }
}

export default App;
