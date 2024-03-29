import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepages from './Container/Homepages/Homepages';
import Singpage from './Container/Singpage/Singpage';
import Loginpage from './Container/Loginpage/Loginpage';
import Rhome from './Container/R-Home/R-Home';

function App() {
  return (
    <>
     <Routes>
      <Route path="/Singpage" element= {<Singpage/>} />
      <Route path="/" element= {<Homepages/>} />
      <Route path="/loginpage" element= {<Loginpage/>} />
      <Route path="/Rhome" element= {<Rhome/>} />


      


      
   </Routes>
    </>
  );
}

export default App;
