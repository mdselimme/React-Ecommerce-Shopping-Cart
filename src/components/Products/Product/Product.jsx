import PropTypes from "prop-types";
import "./Product.css";

const Product = ({data, handleAddToCart}) => {

   const { image, title} = data;

    return (
         <div className="product-box">
            <img className="w-[350px] h-[350px]" src={image} alt="" />
            <h2>{title}</h2>
            <div className="flex justify-between mt-10">
            <button onClick={()=> handleAddToCart(data)} className="bg-green-600 px-10 py-3 rounded-lg">Add To Cart</button>
            <button className="bg-green-600 px-10 py-3 rounded-lg">Buy Now</button>
        </div>
        </div>
    );
};

Product.propTypes = {
    data: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Product;