import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'

import Home from './components/Home.js'

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <h1>cnode 中文社区 头部Header</h1>

          <button>全部</button>
          <button>精华</button>
          <button>分享</button>
          <button>问答</button>
          <button>招聘</button>
          <Route exact path='/' component={Home} />

          <h1>底部Footer</h1>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
