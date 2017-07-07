import React from 'react';

export default class ListComponent extends React.Component {
  
  constructor(props) {
    super(props);
    let {data} = props.list;
    this.state = {
      data: data
    };
  }

  deleteTask = (item) => {
    let data = this.state.data;
    data.splice(data.indexOf(item), 1);
    this.setState({data});
  }

  getList = () => {
    let data = this.state.data;
    let list = [];
    data.map(item => {
      list.push(<li key={item} onClick={()=>{this.deleteTask(item)}}>{item}</li>);
    });
    return list;
  }

  render () {
    return (
      <div className="task-list">        
        <div>
          <div>List Items</div>
          <ul> 
            {this.getList()}
          </ul>
        </div>
      </div>
    );
  }
}
