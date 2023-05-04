import React, { Component } from "react";
import GeneralButton from "./GeneralButton";

class General extends Component{
    constructor(props){
        super(props);
        this.state = {
            showForm: false,
        };
        this.onClickButt = this.onClickButt.bind(this);
    }

    onClickButt(){
        this.setState((prevState) => ({
            showForm: !prevState.showForm,
        }))
    }
    render(){
        const form = this.state.showForm ? (
            <form>
                <label htmlFor="name">Name: </label>
                <input 
                className="name">
                </input>
            </form>
        ) :null;
        return(
            <div className="General">
                <h1>General</h1>
                <GeneralButton onClicked={this.onClickButt}></GeneralButton>
                {form}
            </div>
        )
    }
}
export default General
