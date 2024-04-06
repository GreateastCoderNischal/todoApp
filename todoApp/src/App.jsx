import { useEffect, useState } from "react"
import { TodoProvider } from "./Context/todoContext"

export default function App() {
  const [todo, setTodo] = useState([]);
  const [message, setMessage] = useState('');

  const [ischecked,setIscheked]=useState(false);

  const [checkedTodo,setCheckedTodo]=useState(true);
  function TodoAdd(todoMessage) {
todoMessage.length>0 ?
    setTodo(prev =>{
      const todoExists=prev.some(prev=>prev.todoMessage==todoMessage);
      if(!todoExists){

        return ([{
          id: prev.length + 1,
          todoMessage,
          checked:false,
        }, ...prev]
        )
      }else{
        alert("Todo Exists");
       return( [...prev])
      }
    })
    :
    ""
  }
  function TodoUpdate(id, todoMessage) {
    todo.forEach(items => {

      if (items.id == id) {
        items.todoMessage = todoMessage;
      }
    })
  }
  function TodoDelete(id) {
    console.log(id)
    const new_todo=todo.filter(prev => prev.id != id);
    setTodo(new_todo)
    console.log(todo)
  }

  // useEffect(()=>{
  //   const items=localStorage.getItem("objects");
  //   if(items){
  //     const newItems=JSON.parse(items)
     
  //     setTodo(prev=>{
     
  //       return newItems
  //     })
    
  //   }

  // },[])


  useEffect(()=>{
    localStorage.setItem("objects",JSON.stringify(todo));
  },[todo])

  const toggleComplete=(id)=>{
    const updatedTodo=todo.map(item=>
      item.id==id ? {...item,checked:!item.checked}:item
      )
      setTodo(updatedTodo);
  }

  return (
    <TodoProvider value={{
      todo,
      TodoAdd,
      TodoUpdate,
      TodoDelete,
    }}>
      <div className="w-full h-screen bg-slate-600 py-3 flex flex-col items-center">
        <div className="w-[70%]">

          <h1 className="text-center font-semibold text-[40px] mb-3">
            Manage Your Todo's
          </h1>
          <div className="flex rounded-3xl shadow-lg px-1">
            <input type="text" name="" id=""
              className="w-full  bg-yellow-200 shadow-lg p-1
              outline-none "
              value={message}
              onChange={(e) => {
               
                setMessage(e.target.value)
              }
              }
            />
            <button
              onClick={() => {
                TodoAdd(message)
              }}
              className="bg-green-500 shadow-lg outline-none border-none p-1 rounded-r-lg" >Add todo</button>
          </div>

              <input type="checkbox" value={checkedTodo} onChange={()=>{
                setCheckedTodo(prev=>!prev)
              }} />
              Show Checked
          {todo.map((items) => {
              if(todo.length<0){
                return(
                  <div>No Todo's </div>
                )
              }
          
            return (
              (checkedTodo || !items.checked) &&
              <div key={items.id} className="w-full bg-pink-300 p-2 font-extrabold text-[20px] my-4 flex justify-between">
                <div>

                <input type="checkbox"
                className="m-1 "
                onChange={()=>{                  
                  toggleComplete(items.id)
                }
              }
                />
                <span className={ items.checked ? "line-through" : ""}>
                  {console.log(items.checked)}
                  {items.todoMessage}
                  </span>
                </div>
                <button
                onClick={function(){
                  console.log('clicked');
                  console.log(items.id)
                  TodoDelete(items.id)
                }}
                >Delete</button>
              </div>
            )
          })
          }

        </div>
      </div>

    </TodoProvider>
  )
}