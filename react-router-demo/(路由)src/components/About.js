import React from 'react';
import { Route,Link } from 'react-router-dom';

const Diyi = () => <h1>第一介绍</h1>
const Dier = () => <h1>第二介绍</h1>
const Disan = () => <h1>第三介绍</h1>

class About extends React.Component {
  render(){
    console.log(this.props);
    let {match} = this.props
    return(
      <div>
        About页面<br/>
        <Link to={`${match.url}/diyi`}>第一</Link><br/>
        <Link to={`${match.url}/dier`}>第二</Link><br/>
        <Link to={`${match.url}/disan`}>第三</Link><br/>

        <Route exact path={`${match.url}`} component={Diyi}/>
        <Route path={`${match.url}/diyi`} component={Diyi}/>
        <Route path={`${match.url}/dier`} component={Dier}/>
        <Route path={`${match.url}/disan`} component={Disan}/>
      </div>
    )
  }
}


export default About;
