import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../features/signup/signupSlice';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const [userEmail,setUserEmail]=useState('');
  const [userPassword,setUserPassword]=useState('');

  // from react-redux
  const dispatch= useDispatch();
  const showUsers=useSelector((state)=>state.signup.users)

  const navigate = useNavigate();
  const foundUser= useMemo(()=>{

    const findUser=showUsers.find((element)=>element.userEmail==userEmail );

    return findUser;

    
  },[userEmail])
  
  const handleSubmit=(e)=>{
    const form=e.currentTarget;
    if(form.checkValidity() === false){
      e.stopPropagation();
    }

    if(!foundUser){

      const user={id: Date.now(),userEmail,userPassword};
      dispatch(addUser(user));
    }
    
    console.log(showUsers);
    navigate('/');
    e.preventDefault();
    setValidated(true)

  }
  return (
    <div className="vw-100 vh-100 align-content-center ">    
    <form onSubmit={handleSubmit} noValidate validated={validated} className=' w-25 m-auto border border-1 border-primary rounded-3 p-4'>
        <h2 className='text-center'>SignUp</h2>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            value={userEmail}
            onChange={(e)=>setUserEmail(e.target.value)}
            />

      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>

    <div className="mb-3">
      <label for="exampleInputPassword1" className="form-label">Create Password</label>
      <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1"
              value={userPassword}
              onChange={(e)=>setUserPassword(e.target.value)}
              />

    </div>

    <button type="submit" className="btn btn-primary w-100">SignUp</button>
    <p>Already Registered ? <Link to="/">LogIn</Link></p>
    {foundUser ? <p>you have Already registered</p>:null}

  </form>
  </div>
  )
}

export default SignUp
