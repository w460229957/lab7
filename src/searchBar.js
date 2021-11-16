import React from "react";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchInput:""};
    }
    render(){
        const style ={
            width:"fit-content",
            margin:"auto"
        }
        return (
            <div style = {style}>
                <label htmlFor="searchInput">Add a new task</label>
                <input type="text" id="searchInput" onChange={(event)=>this.setState({searchInput:event.target.value})}/>
                <button type="button" onClick={()=>{this.props.triggerAddItem(this.state.searchInput)}}>Add!</button>
            </div>
        )
    }
}

export default SearchBar