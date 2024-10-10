import { useState,useEffect } from "react";
import { useParams,useNavigate,Link } from "react-router-dom";
import Carousel from "./Carousel";

const Item =()=>{
  const [data,setData]=useState({});
  const {name} = useParams();
  const navigate = useNavigate();

    useEffect(()=>{
        const apiUrl = 'http://localhost:5005/'+name;
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    });

    return(
      <>
        <div className="row">
          <div className="col-5">
            <Carousel/>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <h2><b>{data.Name}</b></h2>
              </div>
              
              <Link to={'/product'} className='col-2 m-2 btn btn-outline-primary'>back</Link>

            </div>
            <br/>
            <div className="row">
              <h3>Description</h3>
              <h4>{data.Description}</h4>
            </div>
            <br/>
            <div className="row">
              <div className="col-2"><h4><b>Price</b></h4></div>
              <div className="col-1"><h4>:</h4></div>
              <div className="col-1"><h4>{data.Price}</h4></div>
            </div>
            <br/>
            <div className="row">
            <div className="col-2"><h4><b>Stock</b></h4></div>
              <div className="col-1"><h4>:</h4></div>
              <div className="col-1"><h4>{data.Stock}</h4></div>
            </div>
            <br/>
            <div className="row">
            
              <Link className='col m-2 btn btn-outline-success'  to={'/product/update/'+data.Name}>Edit</Link>
              
              
              <Link className='col m-2 btn btn-outline-danger' onClick={()=>{
                const apiUrl = 'http://localhost:5005/product/delete/' + name;
                fetch(apiUrl, { method: "DELETE" })
                  .then(res => {
                    if (!res.ok) {
                      throw new Error('Network response was not ok ' + res.statusText);
                    }
                    return res.json();
                  })
                  .then(res => {
                    alert('Item deleted');
                    navigate('/product');
                  })
                  .catch(error => {
                    console.error("Error deleting data:", error);
                  });
            }}>Delete</Link>
            
            </div>
          </div>
        </div>
      </>
    );
}

export default Item;