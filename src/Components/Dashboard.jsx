import React, { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteTask } from "../features/Dashboard/dashboardSlice";
const Dashboard = () => {
  let { id } = useParams();
  const navigate=useNavigate()
  const showTask = useSelector((state) => state.dashboard.tasks);
  const dispatch=useDispatch();
  const handleDelete=(id)=>{
    console.log('deleting task with id :',id);
    dispatch(deleteTask(id))
    
  }

  const userName = useMemo(() => {
    let logInData = localStorage.getItem("logInData");
    logInData = logInData ? JSON.parse(logInData) : [];

    console.log(typeof logInData[0].id);
    let foundData = logInData.find((element) => element.id === Number(id));
    console.log(foundData.userEmail);
    return foundData.userEmail;
  }, [id]);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <span>filter</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to={`/addTask/${id}`}>
                <button className=" btn btn-primary fw-bold">Add Task</button>{" "}
              </Link>
              <Link to="/">
                <button className="btn btn-danger ms-2 fw-bold">Logout</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* main body */}

      <div className="vh-100">
        <div className="container">
          <h1 className="text-center">Your Tasks</h1>
          <h4 className="text-center">welcome {userName}</h4>
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Due Date</th>
                <th scope="col">task id</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {showTask.map((task) => {
                if (task.mainId == id) {
                  return (
                    <tr>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>{task.dueDate}</td>
                      <td>{task.id}</td>
                      <td>pending...</td>
                      <td>
                        <button className="btn btn-primary me-3"onClick={()=> navigate(`/EditTask/${id}/${task.id}`)} >update</button>
                        <button className="btn btn-danger me-3" onClick={()=>handleDelete(task.id)}>Delete</button>
                        <button className="btn btn-success"  >Completed</button>
                      </td>
                    </tr>
                  );
                } else {
                  return null;
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
