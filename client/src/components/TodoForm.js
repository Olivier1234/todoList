import React from "react";


class TodoForm extends React.Component {

    state = {
        text: ""
    };


    handleChange = (event) => {
        this.setState({text: event.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onNew(this.state.text);
        return false;
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.text} onChange={this.handleChange} type="text"/>
                <button type="submit"value="Add" />
            </form>
        );
    }
}

export default TodoForm;