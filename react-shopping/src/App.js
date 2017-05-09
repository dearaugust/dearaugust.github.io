import React from 'react'
import Button from './button.js'
import Top from './Top.js'
export default class App extends React.Component{
    handleClick(){
        console.log(this.button.state);
        this.top.change(this.button.state);
        this.button.reset();
    }
     render(){
         return(
             <div>
                <Top ref={top=>this.top=top}></Top>
                <Button ref={button=>this.button=button}></Button>
                <button className='btn btn-success' onClick={this.handleClick.bind(this)}>提交</button>
             </div>
         )
     }
 }
