import AddTask from "./Components/AddTask";
import Dashboard from "./Components/Dashboard";
import EditTask from "./Components/EditTask";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

    <BrowserRouter>
    {/* react router */}
    <Routes>
      {/* logIn  & SignUp */}
      <Route exact path="/" element={<LogIn/>}></Route>
      <Route exact path="/signUp" element={<SignUp/>}></Route>
      {/* dashboard */}
      <Route exact path="/dashboard/:id" element={<Dashboard/>}></Route>
      {/* AddTask */}
      <Route exact path="/addTask/:id" element={<AddTask/>}></Route>
      <Route exact path="/EditTask/:mainId/:taskId" element={<EditTask/>}></Route>

      
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
