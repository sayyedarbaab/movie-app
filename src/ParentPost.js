import { Component } from "react";
import ChildNav from './ChildNav'

class ParentPost extends Component{
    constructor(){
        super();
        this.state={
            number:0
        }
    }
    incNumber=()=>{
        this.setState({
            number: this.state.number +=1
        })
    }
    render(){
      return (
        <div>
          <ChildNav numIncrease={this.state.number}/>
                 <div>
          <button onClick={()=>this.incNumber()}>Add to Cart</button>
        </div>
        </div>
      )
    }
}
export default ParentPost