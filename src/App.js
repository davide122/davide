import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Component/MyNav.jsx';
import MyFooter from './Component/MyFooter';

import Hero from './Component/hero';
import Gallery1 from './Component/Gallery1';
import Gallery2 from './Component/Gallery2';
import Gallery3 from './Component/Gallery3';
import Gallery4 from './Component/Gallery4';


function App() {
  return (
    <body>
      <>
    <NavBar></NavBar>
    <Hero/>
    <Gallery1/>
    <Gallery2/>
    <Gallery3/>
    <Gallery4/>
    <MyFooter></MyFooter>
    </>
    </body>
  );
}

export default App;
