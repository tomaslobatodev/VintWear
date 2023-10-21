
import { useStore } from './context/StoreContext';
import ProductList from './ProductList';
import "./styles/app.css"
import NavBar from "./components/NavBar"

function App() {
  const { products } = useStore() || {}

  return (
    <div>
      <NavBar></NavBar>
      <ProductList products={products} />
    </div>
  );
}

export default App;