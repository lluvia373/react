import React from "react";
import TodoRow from "./todorow";


const TodoList = ({todoList, handleClickRemove}) => {
    return(
        <div>
            {todoList.map((todo , index) => 
            (<TodoRow 
                todo={todo}
                key={index}
                index={index} 
                handleClickRemove={handleClickRemove}
            />)
            )}
        </div>
    );
};

export default TodoList;