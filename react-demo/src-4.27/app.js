import React from 'react';

import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';

export default class App extends React.Component {
  render(){
    return(
      <div id="app">
        <Header></Header>
        <Main/>
        <Footer/>
      </div>
    )
  }
};
