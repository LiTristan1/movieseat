
import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Synopsis from './pages/Synopsis';
import Map from './pages/Map';
import ReserveSeat from './pages/ReserveSeat';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path = '/' index element = {<Home/>}>
        
        </Route>
        <Route path = '/Synopsis/:index' element = {<Synopsis/>}></Route>
        <Route path = '/Map' element = {<Map/>}></Route>
        <Route path = '/Reserve/:index' element = {<ReserveSeat/>}></Route>
        <Route path = '/Login' element = {<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
