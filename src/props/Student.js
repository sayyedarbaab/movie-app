// import { Component } from "react";

// class Student extends Component{
//     render(){
//         console.log(this.props)
//         const {name,marks}=this.props
//         return(
//             <>
//             <h1>Hello{name}</h1>
//             <p>Marks is{marks}</p>
//             </>
//         )
//     }
// }

function Student(props){
    const {name,marks}=props
    return(
        <>
        <h1>hello{name}</h1>
        <p>hello{marks}</p>
        </>
    )
}
export default Student