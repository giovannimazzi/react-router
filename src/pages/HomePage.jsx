import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="container p-5 text-center">
        <h1 className="text-primary">🛒REACT ROUTER STORE🛒</h1>
        <h2 className="text-info">Benvenuti nel fake store...</h2>
        <Link to="/about-us">Chi siamo</Link>{" "}
        <Link to="/products">Prodotti</Link>
      </div>
    </>
  );
}
