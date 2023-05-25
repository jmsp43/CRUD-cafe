//import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import NewOrderPage from "./pages/NewOrder/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistory/OrderHistoryPage";
import NavBar from "./components/NavBar/NavBar";
import { getUser } from "./utilities/users-service.js";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders" element={<OrderHistoryPage />} />

            <Route path="/orders/new" element={<NewOrderPage />} />
          </Routes>
        </>
      ) : (
          <AuthPage user = {user}
            setUser={setUser} />
        // <Routes>
        //   <Route path = '/' element = {<AuthPage />}/>
        // </Routes>
      )}
    </main>
  );
}

export default App;
