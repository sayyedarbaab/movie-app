import { Component } from "react"
import styled from "styled-components";
class NavbarModule extends Component{
    render(){
        const CartCount=styled.div`
background-color:${(props)=> props.color};
border-radius: 50%;
padding: 4px 8px;
position:absolute;
right:35px;
top:-5px;
font-size: 12px;
visibility: ${(props)=>props.show?"visible":"hidden"};
color:white;
`;
const CartImg=styled.img`
    height: 40px;
    width: 40%;
    margin-right: 45px;
`;
const CartIconContainer=styled.div`
position: relative;
cursor: pointer;
`;
        return(
            <>
            <div className="nav">
                <div className="title-2">Movie-App</div>

                <CartIconContainer>
                    <CartImg alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" style={styled.CartIconContainer}></CartImg>
                    <CartCount color="green" show={true}>0</CartCount>
                </CartIconContainer>
            </div>
            </>
        )
    }
}
export default NavbarModule