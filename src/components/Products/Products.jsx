import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product";
import Cart from "../Cart/Cart";
import { addtToLocalDb, getDbData } from "../Cart/getandsavedb";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);
  
    
    useEffect(()=>{
        const url = 'https://fakestoreapi.com/products';
        fetch(url)
        .then(res=> res.json())
        .then(data=> setProducts(data))
    },[]);

    useEffect(()=>{
        if(products.length){
            const allDbData = getDbData();
            const saveCartProduct = [];
            for(const data of allDbData){
                const product = products.find(datas=> datas.id === data);
                if(product){
                  saveCartProduct.push(product);
                }
            }
            setCart(saveCartProduct)       
        }
    },[products])

    const handleAddToCart = (id) =>{
        const newCart = [...cart, id.id];
        setCart(newCart);
        addtToLocalDb(id);  
    };


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