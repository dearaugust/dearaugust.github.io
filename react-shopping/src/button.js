import React from 'react'
export default class Button extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            price:'',
            num:'',
            id:''
        }
    }
    submit(e){
        e.preventDefault();
    }
    handleChange(e){
        let name = e.target.name;
        this.setState({
            [name]:e.target.value,
            id:Date.now()
        })
    }
    reset(){
        this.setState({
            name:'',
            price:'',
            num:'',
            id:''
        })
    }
    componentDidMount(){
        console.log(this.state);
    }
     render(){
         return(
             <div>
                <form onSubmit={this.submit.bind(this)}>
                    书名<br/><input className="input-xxlarge" type="text" name='name' onChange={this.handleChange.bind(this)} value={this.state.name}/><br/><br/>
                    单价<br/><input className="input-xxlarge" type="number" name='price' onChange={this.handleChange.bind(this)} value={this.state.price}/><br/><br/>
                    数量<br/><input className="input-xxlarge" type="number" name='num' onChange={this.handleChange.bind(this)} value={this.state.num}/><br/><br/>
                </form>
             </div>
         )
     }
 }
