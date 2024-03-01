import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer"
import { Outlet, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div>
      <Header/>

        <Outlet/>
       
      <Footer/>




      
    </div>
  )
}

export default App
