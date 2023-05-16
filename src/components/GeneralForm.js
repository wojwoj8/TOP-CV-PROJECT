const GeneralForm = ({general, handleChange, showHide}) => {
    
    return(
        
        <div className="general">
            <button
            onClick={showHide}
            className="sh-butt">General</button>
            <form className="general-form hidden"
            // onSubmit={this.props.handleChange}
            >
                <label htmlFor="name">Name: </label>
                <input name="name"
                value={general.name}
                onChange={handleChange}
                ></input>
                <label htmlFor="surname">Surname: </label>
                <input name="surname"
                value={general.surname}
                onChange={handleChange}
                ></input>
                <label htmlFor="email">Email: </label>
                <input name="email"
                value={general.email}
                onChange={handleChange}
                type="email"
                ></input>
                <label htmlFor="github">Github: </label>
                <input name="github"
                value={general.github}
                onChange={handleChange}
                type="link"
                ></input>
            </form>
        </div>
    )
    
}
export default GeneralForm