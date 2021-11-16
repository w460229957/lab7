import React from "react";
import SearchBar from "./searchBar";
import Todolist from "./todoList";

class Mainboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: 
                [   {id:"1",identifier:"1",name:"lab1"},
                    {id:"2",identifier:"2",name:"lab2"},
                    {id:"3",identifier:"3",name:"lab3"},
                    {id:"4",identifier:"4",name:"lab4"},
                    {id:"5",identifier:"5",name:"lab forever"}
                ],
            counter:5
        };
        this.triggerAddItem = this.triggerAddItem.bind(this);
        this.dropItem = this.dropItem.bind(this);
    }

    triggerAddItem(newTaskName){
        console.log(newTaskName);
        const newArray =[...this.state.list,{id:`${this.state.list+1}`,identifier:`${this.state.list+1}`,name:newTaskName}];
        this.setState({list:newArray});
    }
    dropItem(identifier){
        //The filter function does not support old browsers. It was introduced by ES6
        //I just found out I could not use the splice function to achieve the same goal as the filter function
        const newArray =this.state.list.filter(item => item.identifier !== identifier);
        this.setState({list:newArray})
        console.log("Hello!");
        console.log(typeof this.state.list);
}
    render(){
        const style = {
            width:"fit-content",
            margin:"auto",
            backgroundColor: "#00FFC5",
            padding:"2%"
        }
        return(
            <div style={style}>
                <SearchBar triggerAddItem = {this.triggerAddItem}/>
                <Todolist itemList = {this.state.list} dropItem = {this.dropItem}/>
            </div>

        );
    }

}

export default Mainboard;