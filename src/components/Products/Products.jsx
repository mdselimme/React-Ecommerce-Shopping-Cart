import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product";


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const url = 'https://fakestoreapi.com/products';
        fetch(url)
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[])

    return (
        <div className="mt-10 container mx-auto">
            <h1 className="text-3xl font-extrabold text-center">Products</h1>
            <div className="grid grid-cols-3 gap-20">
                {
                    products.map((product)=> <Product key={product.id} data={product} />)
                }
            </div>
        </div>
    );
};

export default Products;