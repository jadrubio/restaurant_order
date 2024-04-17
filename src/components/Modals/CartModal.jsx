import { useContext } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgressContext";
import { currencyFormatter } from "../../utils/formatters";

const CartModal = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalPrice = cartCtx.items.reduce((acc, curr) => {
    return acc + parseFloat(curr.price) * curr.quantity;
  }, 0);

  console.log("total price", totalPrice);
  const handleCloseCart = () => {
    console.log("wtf");
    userProgressCtx.hideCart();
  };
  return (
    <Modal className="modal" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.quantity} - {item.name}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default CartModal;
