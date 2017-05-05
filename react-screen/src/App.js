import React from 'react';

import TodoList from './TodoList.js';
import TodoFilter from './TodoFilter.js'

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      input: '',
      data: [
        // {text: 'dearaugust', completed: true, id: 1},
        // {text: '什么', completed: false, id:2}
      ],
      filter: 'ALL'
    }
  }
  componentWillMount(){
    if(!localStorage.todos){
      localStorage.todos = JSON.stringify([]) //空数组 保存成JSON格式字符串
    }
    this.setState({data: JSON.parse(localStorage.todos)})  //去除字符串转成JS对象 赋值给'data'
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.input);
    let value = this.state.input.trim();
    if(value){
      this.setState({
        data: [...this.state.data,{text:value, completed:false, id:Date.now()}], // 'completed'状态
        input:''
      })
      localStorage.todos = JSON.stringify([...this.state.data,{text:value, completed:false, id:Date.now()}])
      //加入本地cookies 保存为JSON格式
    }else{
      alert('输入的内容不能为空');
    }
    this.input.focus()
    this.setState({input: ''})
  }
  handleCompleted(id){ //接收'TodoList'传参 添加'删除划线'
    // console.log(index);  //拿到对应'li'下标
    let index = this.state.data.findIndex( item => item.id === id)
    let newData= this.state.data;
    newData[index].completed = !newData[index].completed;
    this.setState({data: newData })
    localStorage.todos = JSON.stringify(newData) //
  }
  handleRemove(id){ //删除添加的'l'
    console.log(id); //拿到对应'li'下标
    let index = this.state.data.findIndex( item => item.id === id)
    let r = confirm('是否确认删除')
    let newData= this.state.data;
    if(r){
      newData.splice(index,1);
      this.setState({data:newData })
    }
    localStorage.todos = JSON.stringify(newData) //
  }
  handleFilter(n){
    console.log(n);
    this.setState({filter:n})
  }
  render(){
    // console.log(this.state.data);
    let showData = this.state.filter === 'ALL' ?
      this.state.data :
      this.state.filter === 'ACTIVE' ?
      this.state.data.filter(item => !item.completed) :
      this.state.data.filter(item => item.completed)
      //判断是不是'ALL' 是(true)就执行; 是(false)就判断是不是'ACTIVE' 是就执行非'删除线',不是就执行'删除线'
    return(
      <div className="container">
        <h1 className="text-center">TODO</h1>

        <form className="form-inline text-center" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form-control" type='text'
          value={this.state.input}
          onChange={ e => this.setState({input:e.target.value}) }
          ref={input => this.input=input}/>
          <button className="btn btn-danger">Add</button>
        </form>

        <TodoList data={showData}
        completed={this.handleCompleted.bind(this)}
        remove={this.handleRemove.bind(this)}/>

        <TodoFilter select={this.handleFilter.bind(this)} filter={this.state.filter}/>
      </div>
    )
  }
}

export default App ;
