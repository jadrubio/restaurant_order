import Header from "./components/Header";
import MealList from "./components/MealList";
import CartModal from "./components/Modals/CartModal";
import { CartContextProvider } from "./store/CartContext";
import { UserProgessContextProvider } from "./store/UserProgressContext";

const App = () => {
  return (
    <UserProgessContextProvider>
      <CartContextProvider>
        <Header />
        <MealList />
        <CartModal />
      </CartContextProvider>
    </UserProgessContextProvider>
  );
};

export default App;
