import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index Component={HomePage} />
          <Route path="/about-us" Component={AboutUsPage} />
          <Route path="/products" Component={ProductsPage} />
          <Route path="/products/:id" Component={ProductDetailsPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
