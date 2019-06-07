import React from "react";

class TodoItemActions extends React.Component {
    render() {
        const {item, onSelect, ...rest} =this.props;
        return <>
        <a onClick={onSelect}>item.text</a>
        <a onClick={onSelect}></a>
        </>;
    }
}