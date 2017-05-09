import React from 'react';

import Form from './Form.js';
import Table from './Table.js'

class App extends React.Component {
  // let styles = {
  //
  // }
  constructor(){
    super();
    // this.state={
    //   name:'javascript',
    //   one:'12',
    //   number:'1',
    //   sub:'12'
    // }
  }
  render() {
    console.log(this.data);
    return (
      <div>
        <Table ref={table => this.table = table}/>
        <h4>总价钱:</h4>
        <Form ref={form => this.form = form} />
      </div>
    );
  }
}

export default App;
