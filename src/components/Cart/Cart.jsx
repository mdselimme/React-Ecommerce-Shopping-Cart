import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getDbData } from "./getandsavedb";


const Cart = ({cart}) => {

    const [cartData, setCartData] = useState([]);

    useEffect(()=>{

        const data = getDbData();
        if(data.length==0){
            return
        }else{
            const fetchData = JSON.parse(data);
        setCartData(fetchData);
        }


    },[cart])

    return (
        <div className="my-10">
            <h1 className="text-center text-2xl text-green-800 font-extrabold">Cart Product : <span>{cartData.length}</span></h1>
        </div>
    );
};


Cart.propTypes={
    cart: PropTypes.array.isRequired
}

export default Cart;