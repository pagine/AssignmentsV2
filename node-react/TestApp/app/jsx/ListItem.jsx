import React from 'react';

export default class ListItem extends React.Component {
    render() {
        return (
            <li>
                <span>{this.props.data.text}, </span>
                <span onClick = {() => this.props.changeStatus(this.props.data)}>status: {this.props.data.status}</span>
                <span className = "close" onClick = {() => this.props.removeTask(this.props.data)}><b>x</b></span>
            </li>
        );
    }
}
