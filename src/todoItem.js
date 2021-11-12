import React from "react";
import Deletebutton from "./deleteButton";

class Todoitem extends React.Component{
    render(){
        const style = {
            backgroundColor:"green",
            border: "bold solid black",
            margin:"2% 0%"
        }
        return(
            <li style={style}>{this.props.itemName}<Deletebutton/></li>
        )
    }
}

export default Todoitem