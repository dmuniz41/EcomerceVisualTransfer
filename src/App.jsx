import { Route, Routes } from "react-router-dom";

import { AdminPanelLayout } from "./Components/AdminPanel/Layout/AdminPanelLayout";
import { ListOfServices } from "./Components/Shop/ListOfServices/ListOfServices";
import { Login } from "./Components/Auth/Login";
import { NotFound } from "./Components/NotFound/NotFound";
import { ProductDetails } from "./Components/Shop/Product/ProductDetails";
import { Register } from "./Components/Auth/Register";
import { ShopLayout } from "./Components/Shop/Layout/ShopLayout";
import { VerifyCode } from "./Components/Auth/VerifyCode";
import { CategoriesTable } from "./Components/AdminPanel/Categories/CategoriesTable";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShopLayout />}>
        <Route path="shop" element={<ListOfServices />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/register" element={<Register />} />
        <Route path="auth/verifyCode" element={<VerifyCode />} />
        <Route path="product/:name" element={<ProductDetails />} />
      </Route>
      <Route path="/admin" element={<AdminPanelLayout />}>
        <Route path="dashboard" element={<h1>dashboard</h1>} />
        <Route path="products" element={<h1>products</h1>} />
        <Route path="categories" element={<CategoriesTable/>} />
        <Route path="clients" element={<h1>clients</h1>} />
        <Route path="sales" element={<h1>sales</h1>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
