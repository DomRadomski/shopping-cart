import Header from "@/components/Header/Header"
import { useState, useEffect } from "react";
import { Outlet } from "react-router"

function App() {

    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return(
      <>
        <Header />
        <Outlet
          context={{
            products,
            basket,
            setBasket
          }}
        />
      </>
    )
}

export default App
