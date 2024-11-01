import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product/Product";
import { addtToLocalDb, getDbData, removeDataDb } from "../Cart/getandsavedb";
import Cart from "../Cart/Cart";


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

    const handleRemove = id => {
        removeDataDb(id);
    }

    return (
        <div className="mt-10 container mx-auto">
              <h1 className="text-center text-2xl text-green-800 font-extrabold">Cart Product : <span>{cart.length}</span></h1>
              <div className="flex">
              {
                cart.map((element)=> <Cart key={element?.id} handleRemove={handleRemove}  cart={element} />)
              }
              </div>
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