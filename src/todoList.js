import React  from "react";
import Todoitem from "./todoItem";

class Todolist extends React.Component{
    render(){
        const style={
            backgroundColor:"purple",
            color:"white"
        }
        return(
            <ol style={style}>
                {this.props.itemList.map(element => (
                <Todoitem itemName = {element.name} key= {element.id}/>))}
            </ol>
        )
    }
}

export default Todolist