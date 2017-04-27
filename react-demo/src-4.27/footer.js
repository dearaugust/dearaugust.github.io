import React from 'react';
import Main from './main.js';

import img2 from './timgReact.jpg'
import {red, teal, style} from './theme.js'

class Footer extends React.Component {
  getStyles(){
    return{
      textAlign:'center',
      color:'lightgreen'
    }
  }
  render(){
    // let styles = {
    //   sty1:{
    //     fontSize:'30px',
    //     color:'#00BCD4'
    //   },
    //   sty2:{
    //     textAlign:'center',
    //     color:'yellow'
    //   }
    // }
    return(
      <div id="footer" style={{color:red,fontSize:'15px'}}>
        <h1 style={this.getStyles()}>I'm a 尾部</h1>
        <p style={style}>我是P标签</p>
        <img className="img" alt="img" src={img2}/>
        {/* <Main></Main> */}
      </div>
    )
  }
};

export default Footer;
