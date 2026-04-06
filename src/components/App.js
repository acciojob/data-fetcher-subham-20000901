import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const API_KEY = "https://dummyjson.com/products";

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ add this

  useEffect(() => {
    fetch(API_KEY)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching data");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  // ✅ 1. Loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // ✅ 2. Error
  if (error) {
    return <div>{error}</div>;
  }

  // ✅ 3. No Data
  if (products.length === 0) {
    return <div>No data found</div>;
  }

  // ✅ 4. Success
  return (
    <div>
      <h1>Data Fetched from API</h1>

      {products.map((product, index) => (
        <pre key={index}>
          {JSON.stringify(product, null, 2)}
        </pre>
      ))}
    </div>
  );
};

export default App;