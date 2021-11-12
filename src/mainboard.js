import React from "react";
import SearchBar from "./searchBar";
import Todolist from "./todoList";

class Mainboard extends React.Component{
    render(){
        const style = {
            width:"fit-content",
            margin:"auto",
            backgroundColor: "coral",
            padding:"2%"
        }
        const sampleList = 
                    [
                        {id:"item1",name:"lab1"},
                        {id:"item2",name:"lab2"},
                        {id:"item3",name:"lab3"},
                        {id:"item4",name:"lab4"},
                        {id:"item5",name:"lab forever"}
                    ]
        return(
            <div style={style}>
                <SearchBar/>
                <Todolist itemList = {sampleList}/>
            </div>

        );
    }

}

export default Mainboard;