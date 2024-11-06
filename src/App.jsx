import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import EmpForm from "./components/EmpForm"
import Main from "./components/Main"

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Main child={<Home/>}/>}/>
      <Route path='/form' element={<Main child={<EmpForm/>}/>}/>
    </Routes>
    </>
  )
}

export default App
