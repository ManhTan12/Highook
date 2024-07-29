import './App.css';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import ProductList from './pages/ProductList/ProductList';
import WishList from './pages/WishList/WishList';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/products/:category",
      element: <ProductList />
    },
    {
      path: "/product/:id",
      element: <Product />
    },
    {
      path: "/wishlist",
      element: <WishList />
    },
    {
      path: "/cart",
      element: <Cart />
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
