import React from "react";

class Deletebutton extends React.Component{
    render(){
        const style={
            backgroundColor:"azure",
            position:"relative",
            cssFloat:"right",
        }
        return(
            <button type="button" style={style}>delete</button>
        )
    }
}

export default Deletebutton