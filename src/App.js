import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Products from "./Pages/Products/Products";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state";
import Login from "./Pages/Login/Login";

const store = configureStore({
  reducer: { cart: cartReducer },
});
const ProtectedRoute = ({ children }) => {
  const userId = JSON.parse(localStorage.getItem("userId"));

  if (userId == null) {
    return children;
  }
  return <Navigate to="/" replace />;
};
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/women",
        element: <Products />,
      },
      {
        path: "/products/men",
        element: <Products />,
      },
      {
        path: "/products/children",
        element: <Products />,
      },
      {
        path: "/products/kids",
        element: <Products />,
      },
      {
        path: "/products/sports",
        element: <Products />,
      },
      {
        path: "/products/women/:id",
        element: <Product />,
      },
      {
        path: "/products/men/:id",
        element: <Product />,
      },
      {
        path: "/products/children/:id",
        element: <Product />,
      },
      {
        path: "/products/kids/:id",
        element: <Product />,
      },
      {
        path: "/products/sports/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
],
{ basename: '/Ecom.in' });

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
