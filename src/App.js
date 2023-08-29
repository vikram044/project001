
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Login from './components/login/Login';
import CheckOutProduct from './components/checkoutproduct/CheckOutProduct';



function App() {
  

     
  
  return (
    
    <div className="App">
      <Header />
      <Routes>
          <Route path="/login" element = {<Login />} />
          
          <Route path="/" element = {<Home />} />
          <Route path='/checkout' element={<CheckOutProduct />} />

          
          

          </Routes>

          
      
    </div>
    
  );
}

export default App;
