import React from "react";
import UserClass from "./UserClass";


class AboutUs extends React.Component{

    constructor(){
        super()
        console.log(' parent constructor')
    }
    
    componentDidMount(){
        console.log('this is parent componentDidMount')
    }
    render(){
       console.log('this is parent render')
        return(
            <>
            <div className="m-3">
                <h1>About Us</h1>
                <h2>we are here to serve the food from various restaurents</h2>
            </div>
            <UserClass name={'Suresh Teja Class'}/>
            </>
        )
    }
}

// const AboutUs=()=>{
//     return(
//         <>
//         <div className="m-3">
//             <h1>About Us</h1>
//             <h2>we are here to serve the food from various restaurents</h2>
//         </div>
//         <UserClass name={'Suresh Teja Class'}/>
//         </>
//     )
// }

export default AboutUs;