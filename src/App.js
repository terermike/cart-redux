import { useEffect, useRef } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notifications = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  let isInitial = useRef(true);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotifications({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );
      const response = await fetch(
        "https://my-dummy-backend-2cbd5-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Eroor sending cart data");
      }

      dispatch(
        uiActions.showNotifications({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully",
        })
      );
    };
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }
    sendCartData().catch((error) =>
      dispatch(
        uiActions.showNotifications({
          status: "error",
          title: "Error",
          message: "Error sending cart data",
        })
      )
    );
  }, [cart, dispatch]);
  return (
    <>
      {notifications && (
        <Notification
          status={notifications.status}
          message={notifications.message}
          title={notifications.title}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
