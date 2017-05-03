import React from 'react';

class Wheel extends React.Component {
  handleWheel(num,e){
    console.log(e);
  }
  render(){
    return(
      <div style={{width:'400px',height:'400px',background:'teal'}}>
        Wheel<br/>
      </div>
    )
  }
}

export default Wheel ;
