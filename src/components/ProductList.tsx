import Product from "./Product.jsx";
import styles from "./ProductList.module.css";
import Book from "./Book.tsx";

interface Props {
  itemsInCart: Book[] | [];
  addToCart: (product: Book) => void;
  removeFromCart: (idToRemove: string) => void;
  products: Book[] | [];
}

function ProductList(props : Props) {
  let itemIds = props.itemsInCart.map((item) => item.id);
  return (
    <ul className={styles.productList}>
      {props.products.map((product) => (
        <li key={product.id} className={styles.productListItem}>
          <Product
            removeFromCart={props.removeFromCart}
            addToCart={props.addToCart}
            {...product}
            inCart={itemIds.includes(product.id) ? true : false}
          />
        </li>
      ))}
    </ul>
  );
}
export default ProductList;
