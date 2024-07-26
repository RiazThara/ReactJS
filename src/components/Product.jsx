import styles from "./Product.module.css";

function Product(props) {
  const {
    id,
    title,
    author,
    published,
    country,
    lang,
    pages,
    image,
    url,
    price,
    inCart,
  } = props;

  function handleClick() {
    console.log(inCart);
    if (inCart) {
      props.removeFromCart(id);
      console.log(id)
    } else {
      props.addToCart({ id: id, title: title, price: price });
    }
  }
  return (
    <div>
      <img
        className={styles.thumbnail}
        src={image ? "images/" + image : "images/default.jpg"}
        alt={title}
      />
      <div>
        <h2>{title}</h2>
        <p>
          by: {author}
          <br />
          published: {published}, {country}
          <br />
          language: {lang}
          <br />
          pages: {pages}
          <br />
          price:{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(Number(price))}
          <br />
          <a href={url}>link</a>
        </p>
        <button onClick={handleClick}>
          {props.inCart ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}


export default Product;
