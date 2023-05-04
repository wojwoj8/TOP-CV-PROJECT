import React, { Component } from "react";
import GeneralButton from "./GeneralButton";

class General extends Component{
    constructor(props){
        super(props);
        this.state = {
            showForm: false,
            data: {
                name: '',
                surname: '',
                email: '',
            },
            
        };
        this.onClickButt = this.onClickButt.bind(this);
    }

    onClickButt = () => {
        this.setState((prevState) => ({
            showForm: !prevState.showForm,
        }))
    }
    onEdit = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
          data: {
            ...prevState.data,
            [name]: value,
          },
        }));
      }
    onSub = (e) =>{
        e.preventDefault();
        // this.setState
    }
    render(){
        // const {name, surname, email} = this.state;

        const form = this.state.showForm ? (
            <form onSubmit={this.onSub}>
                <label htmlFor="name">Name: </label>
                <input
                name="name"
                onChange={this.onEdit}
                value={this.state.data.name} 
                className="name">
                </input>
                <label htmlFor="surname">Surname: </label>
                <input
                onChange={this.onEdit} 
                value={this.state.data.surname} 
                name="surname"
                className="surname">
                </input>
                <label htmlFor="email">Email: </label>
                <input
                onChange={this.onEdit}
                name="email"
                value={this.state.data.email} 
                type="email" 
                className="email">
                </input>
                <button type="submit">Submit</button>
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
