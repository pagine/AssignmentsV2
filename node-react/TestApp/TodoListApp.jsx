import React from 'react';
import axios from 'axios';

class TodoListApp extends React.Component {
   constructor() {
       super();
       this.state = {
         list: [],
         inputText: ''
       };

       this.handleChange = this.handleChange.bind(this);
       this.addTask = this.addTask.bind(this);
       this.removeTask = this.removeTask.bind(this);
       this.changeStatus = this.changeStatus.bind(this);
       this.getTasks = this.getTasks.bind(this);
   }

   componentDidMount() {
        this.getTasks();
   }

   getTasks() {
        axios.get('http://192.168.43.80:3000/tasks')
        .then((response) => {
            this.setState({
                list: response.data.list
            });
        })
        .catch((error) => {
            console.log(error);
        });
   }    

   handleChange(e) {
     this.setState({inputText: e.target.value.trim()});
   }

   addTask(e) {     
     let input = this.state.inputText;  
     if(e.keyCode == 13 && this.state.list.filter(function(x) { return x.text === input }).length === 0) {
       const obj = {
         text: input,
       }
       axios.post('http://192.168.43.80:3000/tasks', obj)
       .then((response) => {
            this.getTasks();
       })
       .catch((error) => {
            console.log(error);
       });
     }
   }

   removeTask(id) {
     axios.delete('http://192.168.43.80:3000/tasks/'+id)
     .then((response) => {
          this.getTasks();
     })
     .catch((error) => {
          console.log(error);
     });
   }

   changeStatus(id) {
      const obj = {
        status: 'completed',
      }
      axios.put('http://192.168.43.80:3000/tasks/'+id, obj)
      .then((response) => {
           this.getTasks();
      })
      .catch((error) => {
           console.log(error);
      });
   }

   render() {
      return (
         <div>
            <h2 style = {{marginLeft: '40px'}}>Todo List App</h2>
            <div id="myDIV" className="header">
                <input placeholder = "Add task here.." type = "text" onChange = {this.handleChange} onKeyDown = {this.addTask} />
            </div>
            <div>
                <ul id="myUL">
                    {this.state.list.map((item, i) => <ListItem data = {item} key = {i} id = {i} removeTask = {this.removeTask} changeStatus = {this.changeStatus} />)}
                </ul>
            </div>
         </div>
      );
   }
}

class ListItem extends React.Component {
    render() {
        return (
            <li>
                <span>{this.props.data.text}, </span>
                <span onClick = {() => this.props.changeStatus(this.props.data.id)}>status: {this.props.data.status}</span>
                <span className = "close" onClick = {() => this.props.removeTask(this.props.data.id)}><b>x</b></span>
            </li>
        );
    }
}

export default TodoListApp;
