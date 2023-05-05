import React, { Component } from "react";
import GeneralButton from "./GeneralButton";
import Preview from "./Preview";


class General extends Component{
    constructor(props){
        super(props);
        this.state = {

            name: '',
            surname: '',
            email: '',
            
            
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

            ...prevState.data,
            [name]: value,

        }));
      }
    onSub = (e) =>{
        e.preventDefault();
        // this.setState
    }
    render(){
        // const {name, surname, email} = this.state;

        return(
            <div className="general">
                <h1>General</h1>
                <form className="general-form" onSubmit={this.onSub}>
                <label htmlFor="name">Name: </label>
                <input
                name="name"
                onChange={this.onEdit}
                value={this.state.name} 
                className="name">
                </input>
                <label htmlFor="surname">Surname: </label>
                <input
                onChange={this.onEdit} 
                value={this.state.surname} 
                name="surname"
                className="surname">
                </input>
                <label htmlFor="email">Email: </label>
                <input
                onChange={this.onEdit}
                name="email"
                value={this.state.email} 
                type="email" 
                className="email">
                </input>
                <button type="submit">Submit</button>
                
            </form>
            </div>
        )
    }
}
export default General
