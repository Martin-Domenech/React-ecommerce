import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="body">
      <NavBar />
      <ItemListContainer title="Tienda de Vinos" />
    </div>
  );
}

export default App;
