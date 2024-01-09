import { Component } from "react";

class Quez extends Component{
    constructor(){
        super();
        this.state={
            count:1,
            vehicles:["Bus" , "Car" , "Bicycle" , "Motorcycle"],
            favorite:"car",
            number:-1
        };
    }
    //Change the favorite
    changeFavoritesCar=()=>{
        this.setState({favorite :"bmw"})
    }
    //Change the count 
    changeCount=()=>{
       this.setState((preState)=>({count :preState.count+1}))
    };
    //Change the number with two values or arrow function
    changeNumber=()=>{
        this.setState({
            number: this.state.number +1
        },
        ()=>{
            this.setState({
                number :this.state.number +1
            })
        })
    }
    
    render(){
        const {count,vehicles,favorite,number}=this.state;
        return(
            <>
            <h1 onClick={this.changeCount}>This is {count}</h1>
            <h1>This is {vehicles}</h1>
            <h1 onClick={this.changeFavoritesCar}>This is {favorite}</h1>
            <h1>this is number {number}</h1>
            <button onClick={this.changeNumber}>click</button>
            </>
        )
    }

}
export default Quez