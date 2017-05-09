import React from 'react';

class Table extends React.Component {
  constructor(){
    super();
    this.state = {
      data:[
        {
          name:'javascript',
          one:'12',
          num:'1',
          id:Date.now()
        }
      ]
    }
  };
  // change(obj){
  //       this.setState({
  //           data:[...this.state.data,obj]
  //       })
  //   }
  render(){
    console.log(this);
    return(
      <div>
        <table className="table table-bordered table-hover">
          {/* <caption className='text-center'>购物车</caption> */}
          <tbody>
            <tr style={{fontSize:'20px'}}>
              <td>名称</td>
              <td>单价</td>
              <td>数量</td>
              <td>小计</td>
              <td>操作</td>
            </tr>
          </tbody>
          <tbody>
            {
              this.state.data.map( item =>(
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.one}</td>
                    <td>{item.num}</td>
                    <td>{item.one*item.num}</td>
                    <td><button className="btn btn-danger">删除</button></td>
                  </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;
