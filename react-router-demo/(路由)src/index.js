import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

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
  <App title='august' age={160819} />,
  document.getElementById('root')
);
