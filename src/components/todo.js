import React from "react";
import TodoList from "./todolist";

class Todo extends React.Component {

    state= {
        todoList: []
    };

    render() {
        return (
            <div>
                <input placeholder="To do" onKeyPress={this.handleInputKeyPress}></input>
                <TodoList todoList={this.state.todoList} handleClickRemove={this.handleClickRemove}></TodoList>
            </div>
        );
    }

    componentDidMount() {
        try{
            this.setState({
                todoList: JSON.parse(localStorage.getItem("todoList") || [])
            });
        } catch (e){
            
        }
    }

    handleInputKeyPress = event => {
        const { target : {value}} = event;
        if (event.key === "Enter") {
            this.setState(state => ({ todoList: [...state.todoList,value]}), () =>
            localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
            );
            event.target.value = " ";
        }
      };

    handleClickRemove = index => {
        if(window.confirm("Do you want delete is work?")){
        this.setState(
            state => ({
              todoList: [
                ...state.todoList.slice(0, index),
                ...state.todoList.slice(index + 1)
              ]
            }),
            () =>
              localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
          );
        }
    }
}

export default Todo;