import React from "react";

class UserClass extends React.Component{
    //props must be called in constructor method and want to access the props in jsx we need to use super() where it helps to refer the 'this object' in the constructor because in js this refers to the current object.
    constructor(props){
        super(props)

        //to create the state variables and get access in jsx
        this.state={
            count:0
        }
        console.log('this is a child constructor')
    }
    componentDidMount(){
        console.log("This is a child componentDidMount")
    }
    render(){
        console.log('this is a child render')
       const {name}=this.props
        return(
            <div className="user-card">
                <h3>count:{this.state.count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count +1
                    })
                }}>count increase</button>
                <p>Name: {name}</p>
                <p>Location: Charlotte</p>
            </div>
        )
    }
}

export default UserClass;