import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <header className="main-header">
      <div className="title">
        <img src={logoImg} alt="restaurant logo" />
        <h1>Catchy Name Here</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
