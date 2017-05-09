import React from 'react'
export default class Top extends React.Component{
    constructor(){
        super();
        this.state = {
            info :[
                {name:"react",price:10,num:10,id:Date.now()}
            ]
        }

    }
    change(obj){
        this.setState({
            info:[...this.state.info,obj]
        })
    }
    handleClick(id){
        let index = this.state.info.findIndex(item=>item.id===id);
        this.state.info.splice(index,1);
        this.setState({
            info:this.state.info
        })
    }
    total(){
        let arr = this.state.info;
        var re = 0;
        for (var i = 0; i < arr.length; i++) {
            re = re + arr[i].price*arr[i].num;
        }
        return re;
    }
     render(){
         return(
             <div>
                 <table className='table table-striped'>
                     <caption className='text-center'>购物车</caption> 
                     <thead>
                         <tr>
                             <th>名称</th>
                             <th>单价</th>
                             <th>数量</th>
                             <th>小计</th>
                             <th>操作</th>
                         </tr>
                     </thead>
                     <tbody>
                        {
                            this.state.info.map(item=>
                                <tr key={item.id} className='success'>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.num}</td>
                                    <td>{item.num*item.price}</td>
                                    <td><button className='btn btn-danger' onClick={this.handleClick.bind(this,item.id)}>删除</button></td>
                                </tr>
                            )
                        }
                     </tbody>
                     <tfoot>
                         <tr>
                             <td>总价：{this.total()}</td>
                         </tr>
                     </tfoot>
                 </table>
             </div>
         )
     }
 }
