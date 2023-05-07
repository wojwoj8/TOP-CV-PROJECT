import React, {Component} from "react";

class GeneralForm extends Component{
    
    render(){
        const {name, surname, email} = this.props
        return(
            
            <div className="general">
                <h2>General</h2>
                <form className="general-form"
                onSubmit={this.props.onSub}>
                    <label htmlFor="name">Name: </label>
                    <input name="name"
                    value={name}
                    onChange={this.props.handleChange}
                    ></input>
                    <label htmlFor="surname">Surname: </label>
                    <input name="surname"
                    value={surname}
                    onChange={this.props.handleChange}
                    ></input>
                    <label htmlFor="email">Email: </label>
                    <input name="email"
                    value={email}
                    onChange={this.props.handleChange}
                    type="email"
                    ></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default GeneralForm