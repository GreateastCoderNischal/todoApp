import { createContext,useContext } from "react";

export const todoContext=createContext({
    todo:[
        {
            id:1,
            todoMessage:'message',
            completed:false,

        }
        
    ],
    TodoAdd:(todoMessage)=>{},
    TodoUpdate:(id,todoMessage)=>{},
    TodoDelete:(id)=>{},
});
export const TodoProvider=todoContext.Provider;

function useTodo(){
    return useContext(todoContext);
}
export default useTodo