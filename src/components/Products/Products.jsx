import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product";
import Cart from "../Cart/Cart";
import { addToDataDb } from "../Cart/getandsavedb";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);

    const handleAddToCart = (id) =>{
        const newCart = [...cart, id.id];
        setCart(newCart);
        addToDataDb(cart);
    };

    useEffect(()=>{
        const url = 'https://fakestoreapi.com/products';
        fetch(url)
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])

    return (
        <div className="mt-10 container mx-auto">
              <Cart cart={cart} />
            <h1 className="text-3xl font-extrabold text-center">Products</h1>
            <div className="grid grid-cols-3 gap-20">
                {
                    products.map((product)=> <Product handleAddToCart={handleAddToCart} key={product.id} data={product} />)
                }
            </div>
        </div>
    );
};

export default Products;