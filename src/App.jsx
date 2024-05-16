import "./App.css";
import { ChakraProvider } from '@chakra-ui/react'
import { ContextProvider } from "./context/CartContext";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import { Cart } from "./components/Cart/Cart.jsx"
import Checkout from "./components/Checkout/Checkout.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <ChakraProvider>
      <ContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='categoria/:categoriaId/producto/:productoId' element={<ItemDetail />} />
            <Route path='producto/:productoId' element={<ItemDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="*" element={<h1 className="error">Error 404</h1>}></Route>
          </Routes>  
        </BrowserRouter>
      </ContextProvider>
    </ChakraProvider>
  );
}

export default App;
