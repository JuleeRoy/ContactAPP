import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Sidebar from './component/navbar/Sidebar'
import Contact from './component/Contact'
import ContactList from './component/ContactList'
import './App.css'
import EditContact from './component/EditContact'
import CovidMap from './Map nd Chart/CovidMap'
import Graph from './Map nd Chart/Graph'



const App = () => {
  return (
      <section className='w-[100%]  flex justify-center
      items-center h-screen'>
         <div className='flex my-auto p-5 w-[90%] rounded-lg rounded-lg  bg-white h-[90%] gap-3'>
     <BrowserRouter> 
      <Sidebar/>
              <Routes>
                <Route path='/' element={<ContactList/>}> </Route>
                <Route path='/map' element={<CovidMap/>}> </Route>
                <Route path='/contact' element={<Contact/>}> </Route>
                <Route path='/chart' element={<Graph/>}> </Route>
                <Route path='/edit-user/:id' element={<EditContact/>}> </Route>
                </Routes>
      </BrowserRouter> 
    </div>
      </section>

 
  
  )
}

export default App