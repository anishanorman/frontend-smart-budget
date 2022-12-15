import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom"
import Edit from './pages/Edit';
import Register from './pages/Register';
import Login from './pages/Login';
import ViewIncome from './pages/Income';
import Index from './pages/Index';
import Outgoing from './pages/Outgoing';


function App() {

  return (
         <HashRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/income" element={<ViewIncome />} />
              <Route path="/outgoing" element={<Outgoing />} />
            </Routes>
         </HashRouter>
  )
}

export default App
