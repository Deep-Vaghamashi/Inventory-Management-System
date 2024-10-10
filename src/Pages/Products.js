import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const apiUrl = "http://localhost:5005/product";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false); // Data is now available, set loading to false
      },[])
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Handle errors by setting loading to false
      });
  }, []);

  const formattedProducts = data.map((p) => (
    <div className="card m-2 shadow p-3 mb-5 bg-body rounded" style={{ width: "17rem" }} key={p.ProductId}>
      <img src={p.ProductImg} className="card-img-top" alt={p.Name} style={{aspectRatio:'1/1'}} />
      <div className="card-body">
        <h5 className="card-title">{p.Name}</h5>
        <Link to={'/product/'+p.Name} className="btn btn-outline-primary m-1">More Info</Link>
      </div>
    </div>
  ));

  return (
    <>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
        <div className='row justify-content-end m-2'>
          <Link className='btn btn-outline-success' to={"/product/add"}>Add Product</Link>
        </div>
        <div className='row justify-content-center'>
          {formattedProducts}
        </div>
        </>
      )}
    </>
  );
};

export default Products;
