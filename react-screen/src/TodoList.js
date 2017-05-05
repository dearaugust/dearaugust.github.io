import React from 'react';

class TodoList extends React.Component {
  handleChecked(id){
    // console.log(i);
    this.props.completed(id);
  }
  render(){
    // console.log(this.props);
    // this.props.completed()
    return(
      <ul style={{listStyle:'none',padding:'0'}}>
        {
          this.props.data.map( item =>
            <li key={item.id} style={{borderBottom:'1px solid #ccc',marginBottom:'5px'}}>
              <input type='checkbox' className='pull-left' checked={item.completed}
              onChange={this.handleChecked.bind(this,item.id)}/>

              <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>{item.text}</span>

              <span className='glyphicon glyphicon-remove-sign pull-right' aria-hidden="true"
              onClick={()=> this.props.remove(item.id)}></span>
            </li>
          )
        }
      </ul>
    )
  }
}
export default TodoList;
