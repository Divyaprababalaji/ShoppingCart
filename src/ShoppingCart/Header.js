import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../ShoppingCart/Header.css";
import { AppContext } from "../App";

function Header() {
  const { selectedProduct, setSelectedPage, selectedPage } =
    useContext(AppContext);
  const handleHeaderLinkClick = (eve) => {
    setSelectedPage(eve.target.id);
  };

  return (
    <div className="navbar">
      <div className="logo"> Products Cart</div>
      {selectedPage === "cart" && (
        <>
          (
          <div className="total">
            Total : Rs {selectedProduct?.reduce((acc,ele) => acc + parseFloat(ele[0]?.price) ,0).toFixed(2)}
          </div>
          <div>
            <button className="checkout">Proceed to CheckOut</button>
          </div>
          )
        </>
      )}
      <ul>
        <li>
          <Link id="Product" onClick={handleHeaderLinkClick} to={"/Product"}>
            Product
          </Link>
        </li>
        <li>
          <Link id="cart" onClick={handleHeaderLinkClick} to={"/Cart"}>
            ViewCart
          </Link>
          <span style={{ color: "red", marginLeft: "4px" , marginRight: "4px"}}>
            {selectedProduct?.length}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Header;
