import React from 'react';
import PropTypes from 'prop-types';

class Btn extends React.Component {
  render(){
    console.log(this.props);
    let styles = {
      // border:'none',
      // outline: 'none',
      padding:`${this.props.pad}px`,
      background: this.props.bg,
      color:'#fff'
    }
    return(
      <button style={styles}>
        {this.props.title}
      </button>
    )
  }
}

Btn.defaultProps = {
  title: '我是默认的标题',
  pad: 10,
  bg: 'teal'
}
Btn.propTypes = {
  title: PropTypes.string,
  pad: PropTypes.number
}

export default Btn ;
// '父组件'传的东西放在'this.props'下
