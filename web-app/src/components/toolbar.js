import React from "react";

class Toolbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            textAreaValue: "",
        }

        this.createNewTask = this.createNewTask.bind(this)
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
    }

    createNewTask() {
        this.props.addTask(this.state.textAreaValue)
        this.setState({
            textAreaValue: ""
        })
    }

    handleTextAreaChange(event) {
        this.setState({
            textAreaValue: event.target.value
        })
    }

    render() {
        return (
        <div className="tryit-todo-toolbar">
            <button className="tryit-todo-tooolbar-button" onClick={() => this.createNewTask()}>Add</button>
            <textarea 
                className="tryit-todo-toolbar-textarea"
                rows={1}
                cols={35}
                value={this.state.textAreaValue}
                onChange={this.handleTextAreaChange}
            />
        </div>
        )
    }
}

export default Toolbar;