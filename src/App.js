import Home from "./pages/Home";
import "./App.scss";
import CartProvider from "./context/cartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Home />
      </div>
    </CartProvider>
  );
}

export default App;
