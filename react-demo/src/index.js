import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js'

class Hello extends React.Component {
  render(){
    return(
      <div>
        <App></App>
      </div>
    )
  }
}

ReactDOM.render( <Hello />,document.querySelector('#root'))
