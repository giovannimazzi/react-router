import NavBar from "../components/NavBar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="container p-5 text-center">
        <h1 className="text-primary">🛒REACT ROUTER STORE🛒</h1>
        <h2 className="text-info">Benvenuti nel fake store...</h2>
      </div>
    </>
  );
}
