import React from 'react';

class App extends React.Component {
  // let styles = {
  //
  // }
  render() {
    return (
      <div>
        <table className="table table-bordered table-hover">
          <tr>
            <td>名称</td>
            <td>单价</td>
            <td>数量</td>
            <td>小计</td>
            <td>操作</td>
          </tr>
          <tr>
            <td>名称</td>
            <td>单价</td>
            <td>数量</td>
            <td>小计</td>
            <td>操作</td>
          </tr>

        </table>
        <form>
          <p>书名</p>
          <input className='form-control' type='text'></input>
          <p>数量</p>
          <input className='form-control' type='number'></input>
          <p>单价</p>
          <input className='form-control' type='number'></input>
          <button className='btn btn-default'>添加</button>
        </form>
      </div>
    );
  }
}

export default App;
