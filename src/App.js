import './App.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';
import Aboutme from './components/aboutme/aboutme';
import {Routes,  Route} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <body>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Work' element={<Work/>}/>
      <Route path='/aboutme' element={<Aboutme/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      </body>
    </div>
  );
}

export default App;
