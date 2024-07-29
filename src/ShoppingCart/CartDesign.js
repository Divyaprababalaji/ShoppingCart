import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function CartDesign({ product }) {
  const { selectedProduct, setSelectedProduct, productApiData, selectedPage } =
    useContext(AppContext);

  const handleAddToCart = (e) => {
    let clickedProduct = productApiData?.products?.filter((ele) => {
      return ele?.id === parseInt(e?.target?.id);
    });
    // setSelectedProduct((prev)=>[...prev,selectedProduct]);
    setSelectedProduct((permissions) => [...permissions, clickedProduct]);
  };
  const handleRemoveCart = (e) => {
    let removedproduct = selectedProduct?.filter(
      (product) => product[0]?.id !== parseInt(e?.target?.id)
    );
    setSelectedProduct(removedproduct);
  };

  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          width: "320px",
          height: "auto",
          padding: "10px",
        }}
      >
        <img
          style={{ height: 250, width: 250 }}
          src={product?.images[0]}
          alt="Product"
        />
        <div>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {product?.title}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            borderTop: "1px solid lightgrey",
            alignItems: "centre",
          }}
        >
          <p style={{ margin: "0px" }}>{`Rs. ${product?.price}`}</p>
          {selectedPage === "cart" ? (
            <button
              style={{
                height: "30px",
                backgroundColor: "red",
                color: "white",
                padding: "5px",
                cursor: "pointer",
              }}
              onClick={handleRemoveCart}
              id={product?.id}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              style={{
                height: "30px",
                backgroundColor: "black",
                color: "white",
                padding: "5px",
                cursor: "pointer",
              }}
              onClick={handleAddToCart}
              id={product?.id}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartDesign;
