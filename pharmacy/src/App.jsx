import React,{useState} from 'react';
import{BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Login from './components/Login';
import Signup from './components/Signup';
import Medicines from './data/Medicines.js';    
import './App.css';
import Invoice from './components/invoicepage';
import Homepage from './components/homepage';
import CartPage from './components/cartpage';
import AboutPage from './components/aboutpage/aboutpage.jsx';
import MedicinePage from './components/medicinepage/medicinepage';

function App() {
  const[loggedIn,setLoggedIn]= useState(false);
  const[user, setUser]= useState("");
  const[cart, setCart]= useState([]);
  const[history,setHistory]= useState([]);
  const[currentInvoice,setCurrentInvoice]= useState(null);

  const handleLogout=()=>{
    setUser("");
    setLoggedIn(false);
    setCart([]);
  };
   return(
    <BrowserRouter>
    {loggedIn && <Header user={user} onLogout={handleLogout} />}
    <Routes>
      <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setUser={setUser} />} />
      <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} setUser={setUser} />}/>
      <Route path="/medicinepage" element={<MedicinePage setLoggedIn={setLoggedIn} setUser={setUser} />}/>
      <Route path="/historypage" element={<History setLoggedIn={setLoggedIn} setUser={setUser} />}/>
      <Route path="/medicines" element={<Medicines setLoggedIn={setLoggedIn}setUser={setUser}/>}/>
      <Route path="/aboutpage" element={<AboutPage setLoggedIn={setLoggedIn}setUser={setUser}/>}/>
      <Route path="/cartpage" element={<CartPage setLoggedIn={setLoggedIn}setUser={setUser}/>}/>
      <Route path="/header" element={<Header setLoggedIn={setLoggedIn}setUser={setUser}/>}/>
      <Route path="/historypage" element={<History setLoggedIn={setLoggedIn}setUser={setUser}/>}/>
      <Route path="/invoicepage" element={<Invoice setLoggedIn={setLoggedIn}setUser={setUser}/>}/>
      <Route path="/homepage" element={<Homepage setLoggedIn={setLoggedIn}setUser={setUser}/>}/>


      {/* <Route path="/" element={loggedIn ? <homepage /> : <Navigate to='/login' />}/>
      <Route path="/about" element={loggedIn ? <aboutpage /> : <Navigate to='/login' />} />
      <Route path="/medicines" element={loggedIn ? <medicinepage cart={cart} setCart={setCart} /> : <Navigate to='/login' />} />
      <Route path="/cart" element={loggedIn ? <cartpage cart={cart} setCart={setCart} setHistory={setHistory}  history={history} setCurrentInvoice={setCurrentInvoice} /> : <Navigate to='/login' />} />
      <Route path="/invoice" element={loggedIn ? <invoicepage invoice={currentInvoice} /> : <Navigate to='/login' />} />
      <Route path="/history" element={loggedIn ? <historypage history={history} /> : <Navigate to='/login' />} />
      <Route path="*" element={<Navigate to={loggedIn ? "/" : "/login"} />} /> */}
    </Routes>
    </BrowserRouter>
  
   );
}

export default App;

