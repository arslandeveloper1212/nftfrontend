import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes,Route} from 'react-router-dom';

import './App.css'
import About from './Components/About';
import FAQ from './Components/FAQ';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Help from './Components/Help';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
    <Navbar/>
   <Routes>
   <Route path='/' element = {<Home/>}/>
   <Route path='/about' element = {<About/>}/>
   <Route path='/feature' element = {<Feature/>}/>
   <Route path='/help' element = {<Help/>}/>
   <Route path='/faq' element = {<FAQ/>}/>
   </Routes>
           <Footer/>
    </div>
   
  );
}

export default App;
