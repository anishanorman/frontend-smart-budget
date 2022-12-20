import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Edit from './pages/Edit';
import Register from './pages/Register';
import Login from './pages/Login';
import Income from './pages/Income';
import Index from './pages/Index';
import Outgoing from './pages/Outgoing';
import {useImmer} from "use-immer"


function App() {

  const [budget, updateBudget] = useImmer({
    "income": [],
    "budget_items_attributes": []
  })
  console.log(`From App.tsx:`)
  console.log(budget)

  return (
         <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index budget={budget}/>} />
              <Route path="/edit" element={<Edit budget={budget}/>} />
              <Route path="/login" element={<Login updateBudget={updateBudget}/>} />
              <Route path="/register" element={<Register />} />
              <Route path="/income" element={<Income />} />
              <Route path="/outgoing" element={<Outgoing />} />
            </Routes>
         </BrowserRouter>
  )
}

export default App
