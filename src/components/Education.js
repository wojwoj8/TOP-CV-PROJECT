import React, { Component } from "react";
import GeneralButton from "./GeneralButton";

class Education extends Component{
    constructor(props){
        super(props);
        this.state = {
           
         
            school: '',
            date: '',
            city: '',
      
            
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

        }));
      }
    onSub = (e) =>{
        e.preventDefault();
        // this.setState
    }
    render(){
        // const {name, surname, email} = this.state;

        const form = this.state.showForm ? (
            <form className="education-form" onSubmit={this.onSub}>
                <label htmlFor="school">School: </label>
                <input
                name="school"
                onChange={this.onEdit}
                value={this.state.school} 
                className="school">
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
        ) :null;

        return(
            <div className="General">
                <h1>Education</h1>
                <GeneralButton onClicked={this.onClickButt}></GeneralButton>
                {form}
            </div>
        )
    }
}
export default Education
