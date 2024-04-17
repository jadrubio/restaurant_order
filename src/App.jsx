import Header from "./components/Header";
import MealList from "./components/MealList";
import { CartContextProvider } from "./store/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <Header />
      <MealList />
    </CartContextProvider>
  );
};

export default App;
