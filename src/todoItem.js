import React from "react";
import Deletebutton from "./deleteButton";

class Todoitem extends React.Component{
    render(){
        const style = {
            border: "bold solid black",
            margin:"2% 0%"
        }
        const buttonStyle={
            backgroundColor:"azure",
            position:"relative",
            cssFloat:"right",
        }
        return(
            <li style={style}>{this.props.itemName}<button type="button" style = {buttonStyle} onClick={() => this.props.dropItem(this.props.identifier)}>Delete</button></li>
        )
    }
}

export default Todoitem