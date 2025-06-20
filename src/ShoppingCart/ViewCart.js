import React, { useContext } from "react";
import { AppContext } from "../App";
import CartDesign from "./CartDesign";
import Header from "./Header";

function ViewCart() {
  const { selectedProduct } = useContext(AppContext);
  console.log("viewcartSelectedProduct", selectedProduct);

  return (
    <>
      <Header />

      <div
        id="viewcartpage"
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px",
        }}
      >
        {selectedProduct?.map((ele) => {
          return <CartDesign product={ele[0]} />
        })}

        {/* <div>{selectedProduct?.length > 0 && <button>Check Out</button>}</div> */}
        <div>
          {selectedProduct?.length === 0 && <h1>No Products Selected</h1>}</div>
      </div>
    </>
  );
}

export default ViewCart;
