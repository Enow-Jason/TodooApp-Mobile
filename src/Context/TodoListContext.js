import React, {createContext, useReducer} from "react";
import {TodoReducer} from "../Reducers/TodoReducer";

export const TodoListContext = createContext();

const TodoListContextProvider = ({children}) => {
    const [todos, dispatch] = useReducer(TodoReducer, [
        { id: 1, task: 'Pay Rent', due: '2024-12-10' },
        { id: 2, task: 'Replace Tires', due: '2024-12-12' },
        { id: 3, task: 'Math Homework', due: '2024-12-13' },
        { id: 4, task: 'Get a New Haircut', due: '2024-12-14' }
    ]);
    return (
        <TodoListContext.Provider value={{todos, dispatch}}>
            {children}
        </TodoListContext.Provider>
    )
};

export default TodoListContextProvider;
