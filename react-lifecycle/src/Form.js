import React from 'react';

class Form extends React.Component {
  constructor(){
    super();
    this.state={
      text: '',
      textarea: '',
      select: 'lime',
      radio: 'girl',
      checkbox: true
    }
  }
  handleSubmit(e){
    e.preventDefault();    //'preventDefault'阻止跳转 阻止默认事件
    // console.log(e.target);
    // e.target.reset();  //清空表单元素里输入的值
    let obj = {
      text: this.state.text,
      textarea: this.state.textarea,
      select: this.state.select,
      radio: this.state.radio,
      checkbox: this.state.checkbox,
    }
    console.log(obj);
  }
  handleInput(e){
    let target = e.target;
    console.log(target.name);
    let value = target.name === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name] : value
    })
    console.log(value);
  }
  // handleChange(e){
  //   console.log(e.target.value);
  //   this.setState({input: e.target.value})
  //   console.log(e);
  // }
  // textarea(e){
  //   console.log(e.target.value)
  // }
  // handleSelect(e){
  //   console.log(e.target.value);
  //   this.setState({select: e.target.value})
  // }
  // handleRadio(e){
  //   console.log(e.target.value);
  //   this.setState({input: e.target.value})
  // }
  // handleCheckbox(e){
  //   console.log(e.target.checked);
  //   this.setState({checked: e.target.checked})
  // }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <input name='text' placeholder='name' value={this.state.value} onChange={this.handleInput.bind(this)} />
          <input name='text' placeholder='name' defaultValue='dearaugust' ref={input =>this.input = input}/>
          <br/>

          <textarea name="textarea" value={this.state.value} onChange={this.handleInput.bind(this)}  rows='8' cols="50" />
          <br/>

          <select name="select" value={this.state.select} onChange={this.handleInput.bind(this)}>
            <option value='grapefruit'>grapefruit</option>
            <option value='lime'>lime</option>
          </select>
          <select name="select" defaultValue='grapefruit'>
            <option value='grapefruit'>grapefruit</option>
            <option value='lime'>lime</option>
          </select>
          <br/>
          <h4>单选:</h4>
          男
          <input name='radio' checked={this.state.radio === "boy"} type='radio' value='boy'
          onChange={this.handleInput.bind(this)}/>
          女
          <input name='radio' checked={this.state.radio === "girl"} type='radio' value='girl'
          onChange={this.handleInput.bind(this)}/>
          <br/>
          <h4>多选:</h4>
          同意
          <input name='checkbox' type='checkbox' checked={this.state.checkbox}
          onChange={this.handleInput.bind(this)}/>
          <button>提交</button>
        </form>
      </div>
    )
  }
}

export default Form ;
