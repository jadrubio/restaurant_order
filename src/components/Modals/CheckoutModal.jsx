import { useContext } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import Input from "../UI/Input";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgressContext";
import { currencyFormatter } from "../../utils/formatters";

const CheckoutModal = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalPrice = cartCtx.items.reduce((acc, curr) => {
    return acc + parseFloat(curr.price) * curr.quantity;
  }, 0);

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={userProgressCtx.progress === "checkout" ? handleClose : null}
    >
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="email" type="email" id="email" />
        <Input label="Street Address" type="text" id="street-address" />
        <div className="control-row">
          <Input label="City" type="text" id="city" />
          <Input label="State" type="text" id="state" />
          <Input label="Zip Code" type="text" id="zip-code" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default CheckoutModal;
