import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState(""); 

   
    const handelTitleChange=(e)=>{
        setTitle(e.target.value);
    }

    const handelDescChange=(e)=>{
        setDesc(e.target.value);
    }

    const handelSubmit =(e)=>{
        e.preventDefault()
            if(!title || !desc){
                alert("Add Title and Desc");
            }
            addTodo(title,desc);
    }

  return (
    <div className='container my-3'>
        <h3>Add a Todo</h3>
      <form onSubmit={handelSubmit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" onChange={handelTitleChange} className="form-control" id="title"  />
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" onChange={handelDescChange} className="form-control" id="desc"/>
  </div>

  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
