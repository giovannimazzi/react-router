import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const productApiUrl = "https://fakestoreapi.com/products/:id";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const getProductData = () => {
    setLoading(true);
    setError("");

    axios
      .get(productApiUrl.replace(":id", id))
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getProductData();
  }, [id]);

  if (loading) {
    return (
      <>
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h2 className="h6">Loading...</h2>
      </>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger">{"ERROR: " + error.message}</div>
    );
  }

  return (
    <>
      <h2 className="h1 text-primary">DETTAGLI PRODOTTO</h2>
      <h3 className="mt-5">{product.title}</h3>
      <img src={product.image} alt={product.title} className="mb-2 w-25" />
      <h4 className="text-muted">
        {product.category} - € {product.price.toFixed(2)}
      </h4>
      <span>⭐{product.rating?.rate}</span>{" "}
      <span>👁️‍🗨️{product.rating?.count}</span>
      <p className="mt-4">{product.description}</p>
    </>
  );
}
