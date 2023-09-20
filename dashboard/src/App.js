import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Layout from "./pages/layout/Layout";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {admin && (
          <>
            <Route  path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="users" element={<UserList />} />
              <Route path="user/:userId" element={<User />} />
              <Route path="newUser" element={<NewUser />} />
              <Route path="products" element={<ProductList />} />
              <Route path="product/:productId" element={<Product />} />
              <Route path="newProduct" element={<NewProduct />} />
            </Route>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
