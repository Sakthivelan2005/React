import { UserContext } from "./context/UserContext";
import Login from "./components/Login";
import { useState } from "react";
import CheckOut from "./components/CheckOut";
import { Button } from "@mui/material";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";

function App1() {
  const [user, setUser] = useState("");
  // const [isActive, setIsActive] = useState(false);
  console.log("parent-App", user);
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Products />
        <Cart />
      </CartProvider>
      
    </div>
  );
}

export default App1;


//<UserContext.Provider value={{ user, setUser }}>
   //     {user ? <CheckOut /> : <Login />}
    //    {/* {isActive && <Home />} */}
    //  </UserContext.Provider>


