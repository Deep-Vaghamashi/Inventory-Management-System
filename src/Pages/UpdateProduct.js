import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const [data, setData] = useState({});
  const {name} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    const apiUrl = 'http://localhost:5005/'+name;
    fetch(apiUrl, {method:"GET"})
    .then(res=>res.json())
    .then(res=>setData(res));
},[name]);

  return (
    <>
      <div className="form-group row">
        <label htmlFor="text2" className="col-4 col-form-label">Product ID</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, productId: e.target.value });
          }} type="text" className="form-control" value={data.productId} />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text1" className="col-4 col-form-label">Product Name</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, Name: e.target.value });
          }} type="text" className="form-control" value={data.Name} />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text4" className="col-4 col-form-label">Image Path _1</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, ProductImg: e.target.value });
          }} type="text" className="form-control" value={data.ProductImg} />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text4" className="col-4 col-form-label">Image Path _2</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, Img_2: e.target.value });
          }} type="text" className="form-control" value={data.Img_2} />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text4" className="col-4 col-form-label">Image Path _3</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, Img_3: e.target.value });
          }} type="text" className="form-control" value={data.Img_3} />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text3" className="col-4 col-form-label">Enter Price</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, Price: e.target.value });
          }} type="text" className="form-control" value={data.Price} />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text3" className="col-4 col-form-label">Enter Description</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, Description: e.target.value });
          }} type="text" className="form-control" value={data.Description} />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="text3" className="col-4 col-form-label">Enter Stock</label>
        <div className="col-8">
          <input onChange={(e) => {
            setData({ ...data, Stock: e.target.value });
          }} type="text" className="form-control" value={data.Stock} />
        </div>
      </div>
      <div className="form-group row">
        <div className="offset-4 col-8">
          <button type="submit" className="btn btn-outline-primary" onClick={()=>{
             const apiUrl = "http://localhost:5005/"+name;
             fetch(apiUrl,{
                 method:"PATCH",
                 body:JSON.stringify(data),
                 headers:{
                     "Content-Type":"application/json"
                 }
             })
             .then(res=>res.json())
             .then(res=>{
                 navigate("/product")
             });
          }}>Update</button>
        </div>
      </div>
    </>
  );
}

export default UpdateProduct;