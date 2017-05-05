import React from 'react';

class TodoFilter extends React.Component {
  render(){
    let btns = ['ALL','ACTIVE','COMPLETED'];
    // let className = ['btn btn-default','btn btn-success','btn btn-warning']
    return(
      <div>
        分类:
        {
          btns.map( (item,index) =>
            <button key={index} onClick={()=>this.props.select(item)}
            className={`btn ${this.props.filter===item ? 'btn-primary' : 'btn-default'}` }>{item}</button>
          )
        }
        {/* <input value={document.getElementById('range').value}></input> */}
        {/* <input id="range" type='range'></input>
        <input type='number'></input>
        <input type='date'></input> H5新增表单元素 */}

      </div>
    )
  }
}

export default TodoFilter;
