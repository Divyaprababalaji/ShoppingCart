import React, { useContext, useEffect } from "react";
import CartDesign from "./CartDesign";
import { AppContext } from "../App";
import Header from "./Header";

function Product() {
  const { productApiData, setProductApiData, setApiError,apiError } =
    useContext(AppContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductApiData(data);
      })
      .catch((err) => {
        setApiError(true);
      });
  }, []);
  

  return (
    <>
     <Header />
    {apiError === true ?<div><p style={{color:"red",display:"flex",justifyContent:"center"}}>Error Occured! Please try again Later!</p></div>:
    <div
      id="productContainer"
      style={{
        display: "flex",
        padding: "10px",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {productApiData?.products?.map((e) => {
        return <CartDesign product={e} />;
      })}
    </div>}
    </>
  );
}

export default Product;
