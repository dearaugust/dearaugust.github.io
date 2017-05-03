import React from 'react';

class Child extends  React.Component {
  render(){
    console.log(this.props);  // children 方法
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Child
