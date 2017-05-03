import React from 'react';

class CardArr extends React.Component {
  render(){
    let {data} = this.props //结构赋值 let声明变量{data}; props:属性 
    console.log(data);
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
    let cards = data.map( item => //遍历data数组,传item参数
      <div style={styles.root} key={item.index}>
        <div style={styles.index}>{item.index}</div>
        <div>
          <h3>{item.title}</h3>
          <p>{item.date}</p>
        </div>
      </div>
    )
    return(
      <div>
        {cards}
      </div>
    )
  }
}

export default CardArr
