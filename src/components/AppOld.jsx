import "./App.css";
import Header from "./Header.jsx";
import ProductList from "./ProductList.jsx";
import Footer from "./Footer.jsx";
import Cart from "./Cart.jsx";
// import Counter from "./Counter.jsx";
import { useState } from "react";
import productsData from  '../data/products.json';
function App() {
  // const [count, setCount] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([
    {
      id: "1",
      title: "Things Fall Apart",
      price: "5",
    },
    {
      id: "3",
      title: "The Divine Comedy",
      price: "10",
    },
  ]);
  return (
    <>
      <div className="container" data-testid="app-container">
        <Header />
        {/* 1<Counter count={count} setCount={setCount} /> */}
        <div className="row">
          <div className="col-md-8">
            <ProductList products={productsData} itemsInCart={itemsInCart} />
          </div>
          <div className="col-md-4">
            <Cart itemsInCart={itemsInCart} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
