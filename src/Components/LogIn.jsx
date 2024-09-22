import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
const LogIn = () => {
    const [user,setUser]=useState({
      userEmail :'',
      userPassword :'',
    }
);
    const [validated,setValidated]=useState(false);
    const showUsers=useSelector((state)=>state.signup.users);
    const navigate=useNavigate();
    

    const handleSubmit=(e)=>{
      const form=e.currentTarget;
      if(form.checkValidity() === false){
        e.stopPropagation();

      }  

      const foundUser=showUsers.find((element)=>element.userEmail===user.userEmail && element.userPassword === user.userPassword);
      if(foundUser){
        alert('user found')
        console.log(foundUser);
          let logInData=localStorage.getItem('logInData');
          logInData=logInData ? JSON.parse(logInData) :[];

        logInData.push(foundUser);  
        localStorage.setItem('logInData',JSON.stringify(logInData));
        
        navigate(`/dashboard/${foundUser.id}`);
      }else{
        alert('user not found');
      }
      // console.log(showUsers);
      e.preventDefault();
      setValidated(true)
    }


  return (
    <div className="vw-100 vh-100 align-content-center ">    
    <form onSubmit={handleSubmit} validated={validated} className=' w-25 m-auto border border-1 border-primary rounded-3 p-4'>
        <h2 className='text-center'>LogIn</h2>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            value={user.userEmail}
            onChange={(e)=>setUser({...user,userEmail:e.target.value})}
            />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Password</label>
      <input type="password" 
             className="form-control" 
              id="exampleInputPassword1"
              value={user.userPassword}
              onChange={(e)=>setUser({...user,userPassword:e.target.value})}
               />
    </div>
    <button type="submit" className="btn btn-primary w-100">LogIn</button>
        <p>Don't have account ? <Link to="/signUp">Register</Link> </p>

  </form>
  </div>
  )
}

export default LogIn
