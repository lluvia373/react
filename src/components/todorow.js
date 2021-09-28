import React from "react";


class TodoRow extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.todo === nextProps.todo){
      return false;
    }
    return true;
  }
  z
  
  
  
  render() {
    const { index, todo, handleClickRemove } = this.props;
    return (
      <div onClick={() => handleClickRemove(index)}>{todo}</div>
    );
  }
}

export default TodoRow;