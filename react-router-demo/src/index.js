import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import TodoList from './Todolist.js'

// function App({title,age}){
//   // console.log(props);
//   return(
//     <div>
//       {title}
//       <br/>
//       {age}
//     </div>
//   )
// }

ReactDOM.render(
  <TodoList/>,
  document.getElementById('root')
);
