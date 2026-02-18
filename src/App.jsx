import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={HomePage} />
        <Route path="/about-us" Component={AboutUsPage} />
        <Route path="/products" Component={ProductsPage} />
      </Routes>
    </BrowserRouter>
  );
}
