const GeneralForm = ({general, handleChange, showHide, setGeneral}) => {
    
    return(
        
        <div className="general">
            <button
            onClick={showHide}
            className="sh-butt">General</button>
            <form className="general-form hidden"
            >
                <label htmlFor="name">Name: </label>
                <input name="name"
                value={general.name}
                onChange={(e) => handleChange(e, setGeneral)}
                ></input>
                <label htmlFor="surname">Surname: </label>
                <input name="surname"
                value={general.surname}
                onChange={(e) => handleChange(e, setGeneral)}
                ></input>
                <label htmlFor="email">Email: </label>
                <input name="email"
                value={general.email}
                onChange={(e) => handleChange(e, setGeneral)}
                type="email"
                ></input>
                <label htmlFor="github">Github: </label>
                <input name="github"
                value={general.github}
                onChange={(e) => handleChange(e, setGeneral)}
                type="link"
                ></input>
            </form>
        </div>
    )
    
}
export default GeneralForm