import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Photos from './Components/Photos';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>

        <Route path='/' exact element = {<Photos/>}/>
       
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
