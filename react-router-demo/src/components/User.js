import React from 'react';

class User extends React.Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  render(){
    console.log(this.state.data);
    return(
      <div>
        Userasdasdasd asd
      </div>
    )
  }
}

export default User;
