import React from "react";

class SearchBar extends React.Component{
    render(){
        const style ={
            width:"fit-content",
            margin:"auto"
        }
        return (
            <div style = {style}>
                <label htmlFor="searchInput">Add a new task</label>
                <input type="text" id="searchInput"></input>
                <button type=""button>Add!</button>
            </div>
        )
    }
}

export default SearchBar