type CartItem = {
  title: string,
  price: string
}

function CartItem(props : CartItem) {
  return <div>Item price: $ {props.price} USD</div>;
}

export default CartItem;
