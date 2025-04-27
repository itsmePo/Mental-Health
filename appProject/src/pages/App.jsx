// import Counter from '/src/components/Counter';
// import CalendarComponent from '/src/components/Calendar';
import { Route, Routes } from 'react-router';
//import AuthProvider from '../providers/AuthProvider';
import Private from './Private';
import Public from './Public';
import logic from '../logic';
import { useState, useEffect } from 'react';
const App = () => {
  const [stamp, setStamp] = useState(Date.now());
  useEffect(() => {
  }, [stamp]);
  return (
      <Routes>
        <Route path='*' element={logic.isUserLoggedIn()?<Private setStamp={() => setStamp(Date.now())}/>:<Public setStamp={() => setStamp(Date.now())}/>}/>  {/*Lógica de usuario loggeado*/}
      </Routes>

)}


export default App;
