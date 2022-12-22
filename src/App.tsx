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
import {useState} from "react"


function App() {

  const [budget, updateBudget] = useImmer({
    "id": 0,
    "income": [],
    "budget_items_attributes": [],
    "insights": []
  })
  console.log(budget)

  const [loggedIn, setLoggedIn] = useState(false)

  return (
         <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index budget={budget} updateBudget={updateBudget} loggedIn={loggedIn}/>} />
              <Route path="/edit" element={<Edit budget={budget} updateBudget={updateBudget} loggedIn={loggedIn}/>} />
              <Route path="/login" element={<Login updateBudget={updateBudget} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
              <Route path="/register" element={<Register  loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
              <Route path="/income" element={<Income updateBudget={updateBudget} loggedIn={loggedIn}/>} />
              <Route path="/outgoing" element={<Outgoing updateBudget={updateBudget} loggedIn={loggedIn} />} />
            </Routes>
         </BrowserRouter>
  )
}

export default App
