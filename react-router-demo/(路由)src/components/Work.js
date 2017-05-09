import React from 'react';

class Work extends React.Component {
  render(){
    return(
      <div>
        work 页面组件<br/>
        <p>显示当前'/'后的内容为 : {this.props.match.params.work}</p>
      </div>
    )
  }
}

export default Work;
