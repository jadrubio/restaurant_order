import { useContext } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgressContext";
import { currencyFormatter } from "../../utils/formatters";
import CartItem from "../CartItem";

const CartModal = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalPrice = cartCtx.items.reduce((acc, curr) => {
    return acc + parseFloat(curr.price) * curr.quantity;
  }, 0);

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };

  const handleIncrease = (item) => {
    cartCtx.addItem(item);
  };

  const handleDecrease = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <Modal className="modal" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => handleIncrease(item)}
            onDecrease={() => handleDecrease(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleCloseCart}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default CartModal;
