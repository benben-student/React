import React from "react";
import TodoItem from './TodoItem';
//import './App.css';
class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:[],
      inputValue: ''
    }
  }
  handleBtnClick(){
    this.setState({
      list:[...this.state.list, this.state.inputValue],
      inputValue:''
    })
  }
  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接受父组件传递过来的参数
  handleDelete(index){
    const list=[...this.state.list];
    list.splice(index,1);
    this.setState({list})
  }
  render(){
    return(
      <div>
        <div>
      <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
      <button onClick={this.handleBtnClick.bind(this)}>add</button>
      </div>
      <ul>
        {
          this.state.list.map((item,index) => {
            return <TodoItem delete={this.handleDelete.bind(this)} key={index} content={item} index={index}/>
          }) 
        }
      </ul>
      </div>
    )
  }
}
export default TodoList;
