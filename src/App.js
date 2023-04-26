
import './App.css';
import LogIn from './components/login/LogIn.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import Email from './components/email/Email';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState({})
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<LogIn setUser = {setUser}/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard user= {user}/>}/>

      <Route path='/email' element={<Email/>}/>
     </Routes>

     {/* <Dashboard/> */}
    </BrowserRouter>
  );
}

export default App;
