import { BrowserRouter, Route, Routes  } from "react-router-dom";
import "./App.css";

import Product from "./ShoppingCart/Product";
import ViewCart from "./ShoppingCart/ViewCart";
import { createContext, useState } from "react";
import Login  from "./ShoppingCart/Login";
import Signup from "./ShoppingCart/Signup";


export const AppContext = createContext();

function App() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [productCounter, setProductCounter] = useState(0);
  const [productApiData, setProductApiData] = useState([]);
  const [selectedPage, setSelectedPage] = useState("product");
  const [apiError, setApiError] = useState(false);
  //kkk kkk sample

  return (
    <>
      <AppContext.Provider
        value={{
          selectedProduct,
          setSelectedProduct,
          totalProducts,
          setTotalProducts,
          productCounter,
          setProductCounter,
          productApiData,
          setProductApiData,
          selectedPage,
          setSelectedPage,
          apiError,
          setApiError,
        }}
      >
        <BrowserRouter>
         
          <div className="container">
            <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Product" element={<Product />} />
              <Route path="/Cart" element={<ViewCart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
