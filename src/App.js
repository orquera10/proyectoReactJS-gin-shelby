import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import SeccionPublicidad from "./components/SeccionPublicidad";

function App() {
  return (
    <div >
      <NavBar/>
      <ItemListContainer greeting={"No se encontraron productos!"}/>
      <SeccionPublicidad/>
      <Footer/>
    </div>
  );
}

export default App;
