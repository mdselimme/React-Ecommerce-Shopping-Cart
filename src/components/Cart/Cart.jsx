import PropTypes from "prop-types";


const Cart = ({cart, handleRemove}) => {


    return (
        <div className="my-10">
            <img className="w-10 h-10" src={cart?.image} alt="" />
            <button onClick={()=> handleRemove(cart.id)}>Remove</button>
        </div>
    );
};


Cart.propTypes={
    cart: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default Cart;