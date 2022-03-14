import React from "react";
import TodoTask from "./todoTask"
import Toolbar from "./toolbar";

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: []
        }

        this.getTasks = this.getTasks.bind(this)
        this.addTask = this.addTask.bind(this)
    }

    getTasks() {
        this.setState({
            tasks : [] 
        })
    }

    addTask(taskTitle){
        this.setState({
            tasks: this.state.tasks.concat([<TodoTask id={this.state.tasks.length} title={taskTitle} isDone={false}/>])
        })
    }

    componentDidMount(){
        this.getTasks();
    }

    render() {
        return (
            <div>
                <Toolbar addTask={this.addTask}/>
                <hr className="tryit-todo-separator"/>
                <div className="tryit-todo-list">
                    {this.state.tasks}
                </div>
            </div>
        )
    }
}

export default TodoList;