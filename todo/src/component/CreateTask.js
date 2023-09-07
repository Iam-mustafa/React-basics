import React, {Component} from 'react'
export default class CreateTask extends Component{
    constructor(props){
        super(props);
        this.state={
            task:''
        }
    }
    handleChange= (event) => {
        this.setState({task:event.target.value});
    };
    handeleSubmit = (event) =>{
        event.preventDefault();
        this.props.CreateTask(this.state.task);
        this.setState({task:''});
    }
    render(){
        return(
           <form onSubmit={this.handeleSubmit}>
               <input type="text" placeholder="Enter task"
               value={this.state.task} onChange={this.handleChange} autoFocus/>
               <button classname="add" type="Submit">Add</button>
           </form>
        )
    }
}