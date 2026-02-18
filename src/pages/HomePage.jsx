import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <Link to="/about-us">Chi siamo</Link>
      <br />
      <Link to="/products">Prodotti</Link>
    </>
  );
}
