import React from 'react';

class Events extends React.Component {
  handleClick(num,e){
    console.log('aaa');
    e.preventDefault();
  }
  render(){
    return(
      <div>
        Events<br/>
        <a href='https://baidu.com' onClick={this.handleClick.bind(this,212)}>baidu</a>
      </div>
    )
  }
}

export default Events ;
