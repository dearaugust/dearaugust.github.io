import React from 'react';

class Test extends React.Component {
  constructor(){
    super();
    console.log('tset constructor');
  }
  componentWillReceiveProps(){
    console.log('test------------will receive props'); //组件将要接收新的 Props
  } // props 发生变化触发
  componentWillUnmount(){
    
  }
  render(){
    return(
      <div>
        Test下的num:{this.props.num}
      </div>
    )
  }
}

export default Test ;
