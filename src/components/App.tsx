import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header.tsx";
import ProductList from "./ProductList.tsx";
import Footer from "./Footer.tsx";
import Cart from "./Cart.tsx";
import Book  from "./Book.tsx";
import * as actionCreators from "../actions"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


  const mapStateToProps = (state: any, props: any) => {
    return {
      itemsInCart: state.cart.items,
      products: state.products.products,
    };
  };
  const mapDispatchToProps = (dispatch: any, props: any) => {
    return bindActionCreators(actionCreators, dispatch);
  };

function App(props: any) {
  const [isLoading, setIsLoading] = useState<Boolean>(false);


  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "http://localhost:5173/data/products.json"
        );
        const json = await response.json();
        const shuffledArray = shuffleArray(json);
        props.loadProducts(shuffledArray);
        props.readCartFromLocalStorage();
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  function shuffleArray(array: Book[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  if (isLoading) {
    return <div role="status">Loading...</div>;
  } else {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-8">
            <ProductList
              addToCart={props.addToCart}
              removeFromCart={props.removeFromCart}
              itemsInCart={props.itemsInCart}
              products={props.products}
            />
          </div>
          <div className="col-md-4">
            <Cart
              submitCart={props.submitCart}
              itemsInCart={props.itemsInCart}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
