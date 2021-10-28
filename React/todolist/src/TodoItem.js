import React, {Component} from 'react';
class TodoItem extends Component{
    //子组件如果想和父组件通信，子组件要调用父组件传递来的方法
    constructor(props){
        super(props);
        this.handleDelete=this.handleDelete.bind(this);
    }
    handleDelete(){
       this.props.delete(this.props.index);
    }
    render(){
        const {content}=this.props;
        return(
            <div onClick={this.handleDelete}>{content}</div>
        )
    }
}
export default TodoItem;