import React  from "react";
import Todoitem from "./todoItem";

class Todolist extends React.Component{

    render(){
        const style={
            backgroundColor:"#ADF5FF"
        }
        return(
            <div>
                <ol style={style}>
                    {this.props.itemList.map(element => (
                    <Todoitem itemName = {element.name} identifier= {element.id} key= {element.id} dropItem ={this.props.dropItem}/>))}
                </ol>
                <br/>
                <p>Total tasks:{this.props.itemList.length}</p>
            </div>
 
        )
    }
}

export default Todolist