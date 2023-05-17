const PracticalForm = ({practical, handleChange, showHide, onSub, setPractical}) =>{
    
    return(
        <div className="practical">
            <button
            onClick={showHide}
            className="sh-butt">Work Experience</button>
            <form className="practical-form hidden"
            onSubmit={e => onSub(e, setPractical)}>
                <label htmlFor="companyName">Company name: </label>
                <input name="companyName"
                value={practical.companyName}
                onChange={e => handleChange(e, setPractical)}
                ></input>
                <label htmlFor="positionTitle">Position title: </label>
                <input name="positionTitle"
                value={practical.positionTitle}
                onChange={e => handleChange(e, setPractical)}
                ></input>
                <label htmlFor="startDateP">Start date: </label>
                <input name="startDateP"
                value={practical.startDateP}
                onChange={e => handleChange(e, setPractical)}
                type="date"
                ></input>
                <label htmlFor="finishDateP">Finish date: </label>
                <input name="finishDateP"
                value={practical.finishDateP}
                onChange={e => handleChange(e, setPractical)}
                type="date"
                ></input>
                <label htmlFor="mainTasks">Main tasks: </label>
                <textarea
                name="mainTasks"
                value={practical.mainTasks}
                onChange={e => handleChange(e, setPractical)}
                >
                </textarea>
                <button type="submit">Add Work Experience</button>
            </form>
        </div>
    );
    
}
export default PracticalForm