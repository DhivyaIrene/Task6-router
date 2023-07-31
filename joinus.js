import React,{Component} from "react";
class Kdappj extends React.Component{
    constructor(){
        super();
        this.state={username:"",age:null,errmsg:""}
    }
    uservalue=(event)=>
    {
        let n=event.target.name;
        let v=event.target.value;
        let err="";
        if(n=="phn")
        {
            if(v!="" && !Number(v))
            {
                event.preventDefault();
                alert("Invalid Phone Number!");
            }
        }
        this.setState({errmsg:err});
        this.setState({[n]:v});
    }
    formsubmit=(event)=>
    {
        event.preventDefault();
        alert("Form Submitted");
    }
    render(){
        return(
            <form action="post">
                <p>Enter your Phone Number: <input type="text" name="phn" onChange={this.uservalue}></input></p>
                <button onClick={this.formsubmit}>SUBMIT</button>
                {this.state.errmsg}
            </form> 
        );
    }
}
export default Kdappj;