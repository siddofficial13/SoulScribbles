import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./components/about/About";
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
    <TopBar />
      {/* <Link to='/'>Home</Link> */}
      {/* <Link to='/about'>About</Link> */}

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/register' element={user ? <Home /> :<Register />} />
      <Route path='/login' element={user ? <Home /> : <Login />} />
      <Route path='/write' element={user ? <Write /> : <Register />} />
      <Route path='/settings' element={user ? <Settings /> : <Register />} />
      <Route path="/post/:postId" element={<Single />} />
      {/* <Route path='/about' element={<About/>} /> */}    
      </Routes>
    </Router>
  );
}

export default App;
