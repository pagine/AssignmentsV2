import React from 'react';
import ListComponent from './listComponent.jsx'

export default class InputComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputfield: "",
      data: []
    };
  }

  getStyles = () => {
    return {
      divStyle: {
        margin: '10px'
      }
    }
  }

  addTask = () => {
    let state = this.state;
    if(state.inputfield && state.data.indexOf(state.inputfield) < 0) {
      state.data.push(state.inputfield);
      this.setState({state});
    }
  }

  updateInputValue = (e) => {
    this.state.inputfield = e.target.value.trim();
  }

  render () {
    let styles = this.getStyles();    
    return (
      <div className="user-input">
        <div>Todo List</div>
        <div>
          <input type="text" name="item" id="item" onChange={this.updateInputValue} />
          <button style = {styles.divStyle} onClick={this.addTask}>Add Task</button>
        </div>  
        <ListComponent list={this.state}/>      
      </div>
    );
  }
}
