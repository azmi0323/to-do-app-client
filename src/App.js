import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import WorkToDo from "./Components/WorkToDo/WorkToDo";
import SignUp from "./Components/SignUp/SignUp";
import Footer from "./Components/Footer/Footer";
import RequireAuth from "./Components/RequirAuth";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/workToDo" element={<RequireAuth>
          <WorkToDo></WorkToDo>
        </RequireAuth>}>
      </Route>
        
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
