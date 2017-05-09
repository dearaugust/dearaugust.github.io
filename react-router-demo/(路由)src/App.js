import React from 'react';
import {HashRouter,BrowserRouter as Router,Route,Link,Redirect,Switch,NavLink} from 'react-router-dom';

import Home from './components/Home.js';
import About from './components/About.js';
import Work from './components/Work.js';
import Test from './components/Test.js';

import './App.css'
// const Work = (props) => {
//   console.log(props);
//   return(
//     <div>
//       我是work页面{props.match.params.work}
//     </div>
//   )
// }

let New = () => <h1>oh!shit!这是新页面!oh!shit!</h1>;
let NotFound = () => <h1>Oh!Bitch!This is 404!<br/><Link to='/'>返回首页</Link></h1>

class App extends React.Component {
  constructor(){
    super();
    this.state={
      admin : false
    }
  }
  // handleClick(){
  //   this.props.history.go(-1) //返回几步,'+'值就是前进,'-'值就是后退
  // }
  render() {
    return (
      <HashRouter>
        <div className="App">
          <h1>欢迎光临</h1>
          <NavLink to='/' exact activeClassName="selected">首页</NavLink>&nbsp;
          <NavLink to='/about' activeClassName="selected">About页面</NavLink>&nbsp;
          <NavLink to='/work/zxczxgf' activeClassName="selected">Work页面</NavLink>&nbsp;
          <NavLink to='/new' activeClassName="selected">New页面</NavLink>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' render={ props => this.state.admin ? <About {...props}/> : <Redirect to='/' /> } />
            <Route path='/work/:work' component={Work}/>
            <Route path='/new' component={New} />
            <Redirect from='/old' to='/new' />
            <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />
          </Switch>
          <p>@版权所有</p>
          {/* <button ref={button => this.button = button} onClick={this.handleClick.bind(this)} >返回</button> */}
        </div>
      </HashRouter>
    );
  }
}

export default App;
