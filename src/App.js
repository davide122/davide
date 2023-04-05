import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Component/MyNav.jsx';
import MyFooter from './Component/MyFooter';


import Hero from './Component/hero';
import Gallery1 from './Component/Gallery1';
import Gallery2 from './Component/Gallery2';
import Gallery3 from './Component/Gallery3';
import Gallery4 from './Component/Gallery4';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './Component/MovieDetails';


function App() {
  
  return (
    <BrowserRouter>

    <NavBar/>
   

 <Routes>
<Route path='/' element={<><Hero/><Gallery1/><Gallery2/></>} />
 <Route path="/MovieDetails:" element={<MovieDetails/>} />
 
   </Routes>
  
    <MyFooter/>
   
    
    </BrowserRouter>
    
  );
}

export default App;
