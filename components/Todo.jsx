import React from 'react'

const Todo = ({title,description,complete,id,mongoId,deleteFunction,updateTodo}) => {
  return (
    <>
             <tr className=" border-b ">
      <th scope="row" className="px-6 py-4 font-medium text-purple-500 whitespace-nowrap ">
      {id+1}
      </th>
      <td className={` ${complete ? 'line-through':''} px-6 py-4`}>
      {title}
       
      </td>
      <td className={` ${complete ? 'line-through':''} px-6 py-4`}>
      {description}
      </td>
      <td className={` ${complete ? 'line-through':''} px-6 py-4`}>
                {complete ? 'complete':'un-complete'}
      </td>
      <td className="px-6 py-4">
      <button onClick={()=>deleteFunction(mongoId)} className="bg-purple-500 px-12 py-3 hover:bg-purple-700 duration-300 transition-all text-white">Delete</button>
     {!complete && <button onClick={()=>updateTodo(mongoId)} className="bg-green-500 px-12 py-3 hover:bg-green-700 duration-300 transition-all text-white">Update</button>}
      </td>
    </tr>
   
    </>
  )
}

export default Todo