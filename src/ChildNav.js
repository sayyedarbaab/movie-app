import { Component } from "react"

class ChildNav extends Component{
    render() {
        console.log(this.props)
         const {numIncrease}=this.props
      return (
        <>
        <div className="nav">
            <h1>{numIncrease}</h1>
        </div>
        </>
      )
    }
}
export default ChildNav