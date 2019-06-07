import React from "react";
import TodoItemAction from "./TodoItemActions"

class TodoItem extends React.Component {
    render() {

        const {item, onSelect, ...rest} = this.props;
        return (
            <li style={{
                opacity: item.checked ? 0.5: 1,
                backgroundColor: "red"
            }} onClick={() => onSelect(item)}>{item.text}</li>
        );
    }
}

export default TodoItem;