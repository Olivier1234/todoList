import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
export default class TodoList extends React.Component
{

    state = {
        todos: [
            {text: "Todo 1"},
            {text: "Todo 1", checked: true, test: true}
        ]
    };

    handleNew = (text) => {

        const todo = {text, checked: true};
        this.setState({
            ...this.state,
            todos: [
                ...this.state.todos, todo
            ]
        });

    };

    handleSelect =(item) => {
        item.checked != item.checked
        this.state({
            todos: this.state.map(todo => {
                if (todo.text === item.text) {
                    todo.checked = !todo;checked;
                }
                return todo;
            })
        })
    };

    handleDelete = (item) =>  {
        this.setState({
            todos: this.state.todos.filter(todo => {
                return todo.text != item.text;
            })
        })
    }

    render() {
        return <>
            <TodoForm onNew={this.handleNew}/>
            <button onClick={this.handleNew} >{"Add Item"}</button>
            <ul>
                {
                    this.state.todos.map((item, index) =>
                        <TodoItem key={index} item={item} onSelect={this.handleSelect}/>)
                }
            </ul>
        </>;
    }
}
