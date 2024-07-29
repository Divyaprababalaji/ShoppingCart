import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./ShoppingCart/Header";
import Product from "./ShoppingCart/Product";
import ViewCart from "./ShoppingCart/ViewCart";
import { createContext, useState } from "react";

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
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Product />} />
              <Route path="/Cart" element={<ViewCart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
