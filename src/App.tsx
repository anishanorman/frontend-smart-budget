import './css/App.css';
import './css/Splash.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Edit from './pages/Edit';
import Register from './pages/Register';
import Login from './pages/Login';
import Income from './pages/Income';
import Index from './pages/Index';
import Outgoing from './pages/Outgoing';
import Splash from './pages/Splash'
import {useImmer} from "use-immer"


function App() {

  const [budget, updateBudget] = useImmer({
    "id": 0,
    "income": [],
    "budget_items_attributes": []
  })

  return (
         <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index budget={budget} updateBudget={updateBudget}/>} />
              <Route path="/edit" element={<Edit budget={budget} updateBudget={updateBudget}/>} />
              <Route path= "/splash" element={<Splash/>} />
              <Route path="/login" element={<Login updateBudget={updateBudget}/>} />
              <Route path="/register" element={<Register />} />
              <Route path="/income" element={<Income updateBudget={updateBudget} />} />
              <Route path="/outgoing" element={<Outgoing updateBudget={updateBudget} />} />
            </Routes>
         </BrowserRouter>
  )
}

export default App
