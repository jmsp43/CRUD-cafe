//import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./components/pages/Auth/AuthPage";
import NewOrderPage from "./components/pages/NewOrder/NewOrderPage";
import OrderHistoryPage from "./components/pages/OrderHistory/OrderHistoryPage";
import NavBar from "./components/NavBar";
import { getUser } from './utilities/users-service.js'

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
        <NavBar/>
        <Routes>
          <Route path="/orders" element={<OrderHistoryPage />} />

          <Route path="/orders/new" element={<NewOrderPage />} />
          </Routes>
          </>
      ) : (
        <AuthPage />
          // <Routes>
          //   <Route path = '/' element = {<AuthPage />}/>
          // </Routes>
      )}
      
    </main>
  );
}

export default App;
