import React from "react";

class TodoTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title : this.props.title,
            isDone: this.props.isDoneå
        }

        this.changeTaskStatus = this.changeTaskStatus.bind(this)
    }

    changeTaskStatus() {
        this.setState({
            isDone: !this.state.isDone
        })
    }

    render() {
        return (
            <div className="tryit-todo-task">
                <button 
                    onClick={() => this.changeTaskStatus()}
                    className="tryit-todo-task-done-button">
                        {this.state.isDone ? "Not Done" : "Done"}
                </button>
                <p className={`tryit-todo-task-title ${this.state.isDone ? "crossed" : ""}`}>{this.state.title}</p>
            </div>
        )
    }
}

export default TodoTask;