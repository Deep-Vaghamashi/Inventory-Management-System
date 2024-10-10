import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  return (
    <>
      <div className="form-group row">
        <label htmlFor="text2" className="col-4 col-form-label">Product ID</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, productId: e.target.value });
          }} type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text1" className="col-4 col-form-label">Product Name</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, Name: e.target.value });
          }} type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text4" className="col-4 col-form-label">Image Path _1</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, ProductImg: e.target.value });
          }} type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text4" className="col-4 col-form-label">Image Path _2</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, Img_2: e.target.value });
          }} type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text4" className="col-4 col-form-label">Image Path _3</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, Img_3: e.target.value });
          }} type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text3" className="col-4 col-form-label">Enter Price</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, Price: e.target.value });
          }} type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text3" className="col-4 col-form-label">Enter Description</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, Description: e.target.value });
          }} type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text3" className="col-4 col-form-label">Enter Stock</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, Stock: e.target.value });
          }} type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <div className="offset-4 col-8">
          <button type="submit" className="btn btn-outline-primary" onClick={()=>{
             const apiUrl = "http://localhost:5005/product/add";

             fetch(apiUrl, {
               method: "POST",
               body: JSON.stringify(data),
               headers: {
                 "Content-Type": "application/json"
               }
             })
               .then(res => res.json())
               .then(res => {
                 console.log("Response from server:", res);
                 navigate('/product');
               })
               .catch(error => {
                 console.error("Error during data submission:", error);
               });
          }}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
