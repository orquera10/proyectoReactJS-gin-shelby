import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import PantallaFinalizar from "./components/PantallaFinalizar";
import Contacto from "./components/Contacto";
import ContactoGuardado from "./components/ContactoGuardado";
import ScrollTo from "./components/ScrollTo";

function App() {
  return (
    <CartContextProvider>
      <div >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/detalle/:id"} element={<PantallaFinalizar />} />
            <Route path={"*"} element={<Error404 />} />
            <Route path={"/contacto"} element={<Contacto/>} /> 
            <Route path={"/success"} element={<ContactoGuardado/>} />            
          </Routes>
          <ScrollTo />
          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider>
    
  );
}

export default App;
