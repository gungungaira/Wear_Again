import './App.css';
import Home from './home/home'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './login/login'
import Register from './login/register'

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element ={<Home />} />
         <Route path="/login" element ={<Login />} />
         <Route path="/register" element ={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
