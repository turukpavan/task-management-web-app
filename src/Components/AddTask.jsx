import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/Dashboard/dashboardSlice";
import { useNavigate, useParams } from "react-router";

const AddTask = () => {
    const {id}=useParams()
    const mainId=id;

    const [validated, setValidated] = useState(false);
    const [title, setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [dueDate, setDueDate]=useState('');


    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        const form=e.currentTarget;
        if(form.checkValidity() === false){
            e.stopPropagation();
        }
        const newTask={mainId, id: Date.now(), title,description,dueDate};
        dispatch(addTask(newTask));

        navigate(`/dashboard/${id}`)
        e.preventDefault()
        setValidated(true)


    }
  return (
    <div className=" vh-100 align-content-center">
      <div className="container ">
        <form onSubmit={handleSubmit} noValidate validated={validated} className="w-50 m-auto border border-2 border-primary p-4 rounded">
          <div className="mb-3">
            <label for="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
            </div>

          <div class="mb-3">
            <label for="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />
          </div>

          <div class="mb-3">
            <label for="due_date" className="form-label">
              Due Date
            </label>
            <input
              type="text"
              className="form-control"
              id="due_date"
              value={dueDate}
              onChange={(e)=>setDueDate(e.target.value)}
            />
          </div>
         
          <button type="submit" className="btn btn-primary w-100 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
