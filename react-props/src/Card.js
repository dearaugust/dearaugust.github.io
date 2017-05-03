import React from 'react';


class Card extends React.Component {
  render(){
    let styles ={
      root: {
        height: '80px'
      },
      index: {
        width: '80px',
        height: '80px',
        lineHeight: '80px',
        float: 'left',
        textAlign: 'center',
        background: 'teal',
        color: '#fff',
        fontSize: '24px'
      }
    }
    return(
      <div style={styles.root} >
        {
          console.log(this)
        }
        <div style={styles.index} >{this.props.index}</div>
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.date}</p>
        </div>
      </div>
    )
  }
}
// props : 调用父组件属性
Card.defaultProps = {
  index: 0,
  title: '默认标题',
  date: '2017.4.28'
} //赋值执行赋值后的属性,不赋值执行默认属性

export default Card;
