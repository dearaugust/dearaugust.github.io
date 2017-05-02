import React from 'react'

class Header extends React.Component {
  render(){

    return(
      <div style={{borderBottom:'1px solid #ccc'}} id="header" className="clearfix">
        <div>
          <p>Project name</p>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    )
  }
};

export default Header ;
