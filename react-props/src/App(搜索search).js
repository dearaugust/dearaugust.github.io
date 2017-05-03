import React from 'react';

class App extends React.Component {
  constructor(){  //给属性赋值
    super();
    this.state = {
      data : [
        {index: 1, title: '第一天', date: '2017.3.6'},
        {index: 2, title: 'hello world', date: '2017.3.6'},
        {index: 3, title: '爱迪生大', date: '2017.3.6'},
        {index: 4, title: '吃吃吃', date: '2017.3.6'},
        {index: 6, title: 'react and redux', date: '2017.3.6'}
      ],
      value: '',  //value默认为'空'
      num:0
    }
  }
  handleInput(){
    this.setState({value: this.input.value}) 
    // onChange : 用户改变输入域时执行
  }
  handleClick(){
    this.setState( prevState => ({num: prevState.num +10}))
  }
  render(){
    let newDate = this.state.value ?
      this.state.data.filter( item =>
        item.title.toLowerCase().includes(this.state.value.toLowerCase())
      )
      : this.state.data  //判断'value'是否有值,有就显示数组对应'data'属性;没有值就显示所有'data'属性
    return(
      <div>
        <input onChange={this.handleInput.bind(this)} ref={input => this.input = input} />
        {this.state.num}
        <button onClick={this.handleClick.bind(this)}>+10</button>
        {
          newDate.map( item =>  //data属性赋值为 item
            <div key={item.index} style={{border:'1px solid #ccc',margin:'5px'}}>
              <span>{item.index}</span>
              <p>{item.title}</p>
              <p>{item.date}</p>
            </div>
          )
        }
      </div>
    )
  }
}

export default App
