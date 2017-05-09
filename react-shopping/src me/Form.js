import React from 'react';

class Form extends React.Component {
  constructor(){
    super();
    this.state={
      name:'',
      one:'',
      num:'',
      id:Date.now()
    }
  }
  handleSubmit(e){
    e.preventDefault();
  }
  handleChange(e){
    let name = e.target.name
    this.setState={
      [name] : e.target.value,
      id:Date.now()
    }
  }
  // handleClick(){
  //   console.log(this);
  //   this.setState({
  //     data:[...this.state.data]
  //   })
  // }
  render(){
    console.log(this.state.data);
    return(
      <div>
        <form className="form-inline text-center" onSubmit={this.handleSubmit.bind(this)}>
          <p>书名</p>
          <input className='form-control' type='text' name='name' value={this.state.name} onChange={this.handleChange.bind(this)}/>

          <p>数量</p>
          <input className='form-control' type='number' name='num' value={this.state.num} onChange={this.handleChange.bind(this)}/>

          <p>单价</p>
          <input className='form-control' type='number' name='one' value={this.state.one} onChange={this.handleChange.bind(this)} />

          <button onClick={this.handleClick.bind(this)} className='btn btn-default'>添加</button>
        </form>
      </div>
    )
  }
}

export default Form;
