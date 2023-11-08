'use client';
import Todo from "@/components/Todo";
import axios from "axios";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";


export default function Home() {

  const [todo,setTodo] = useState({
    title:'',
    description:''
  })

  const [AllTodos,SetAllTodos] = useState([]);

const SetTitle = (e)=>setTodo({
  ...todo,
  ['title']:e.target.value
})
const reset = (e)=>setTodo({
  title:'',
  description:''
})
const SetDescription = (e)=>setTodo({
  ...todo,
  ['description']:e.target.value
})
const FecthTodos = async()=>{
  try {
        // api code

        const response = await axios.get(`/api`);
        SetAllTodos(response.data.todos)
       
  } catch (error) {
    toast.error(error.reponse.data.message);
  }
}


const onSubmitHandler = async(e)=>{
  e.preventDefault();
  try {
        // api code

        const response = await axios.post(`/api`,todo);
        
        toast.success(response.data.msg);
        reset()
        await FecthTodos()
  } catch (error) {
    toast.error(error.reponse.data.message);
  }
}

const DeleteTodo = async(id)=>{
  
  try {
        // api code
        const response = await axios.delete(`/api`,{
          params:{
              id:id
          }
        });
        
        toast.success(response.data.msg);
       
        await FecthTodos()
  } catch (error) {
    toast.error(error.reponse.data.message);
  }
}


const updateTodo = async(id)=>{
  
  try {
        // api code
        const response = await axios.put(`/api`,{},{
          params:{
              id:id
          }
        });
        
        toast.success(response.data.msg);
       
        await FecthTodos()
  } catch (error) {
    toast.error(error.reponse.data.message);
  }
}




useEffect(()=>{
  FecthTodos()
},[])

  return (
    <>

        <section className="w-full md:w-[70%] py-24 px-2 mx-auto ">
          <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
              <input type="text" value={todo.title} onChange={SetTitle} className="w-full px-3 py-2 h-10 outline-none border-2 border-purple-500" placeholder="Enter Title " />
            </div>
            <div className="mb-3">
              <textarea value={todo.description} onChange={SetDescription}  className="w-full px-3 py-2  outline-none border-2 border-purple-500" placeholder="Enter Description" rows={8} cols={30} />
            </div>
            <div className="mb-3">
              <button className="bg-purple-500 px-12 py-3 hover:bg-purple-700 duration-300 transition-all text-white">Add Todo</button>
            </div>
          </form>

        <div className="py-10">
         
<div className="relative overflow-x-auto">
   <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase ">
    <tr>
      <th scope="col" className="px-6 py-3">
        Id
      </th>
      <th scope="col" className="px-6 py-3">
      Title
      </th>
      <th scope="col" className="px-6 py-3">
        Description
      </th>
      <th scope="col" className="px-6 py-3">
        Status
      </th>
      <th scope="col" className="px-6 py-3">
        Action
      </th>
    </tr>
  </thead>
  <tbody>
        {
          AllTodos.length>0 && AllTodos.map((c,i)=>{
            return <Todo key={i} id={i} complete={c.isComplete} description={c.description} title={c.title} mongoId={c._id} deleteFunction={DeleteTodo}  updateTodo={updateTodo} />
          })
        }
  </tbody>
</table>

</div>
        </div>

        </section>

    </>
  )
}
