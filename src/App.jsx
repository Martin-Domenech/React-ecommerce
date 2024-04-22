import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='categoria/:categoriaId/producto/:productoId' element={<ItemDetail />} />
        <Route path='producto/:productoId' element={<ItemDetail />} />
        <Route path="*" element={<h1 className="error">Error 404</h1>}></Route>
      </Routes>  
    </BrowserRouter>

  );
}

export default App;
