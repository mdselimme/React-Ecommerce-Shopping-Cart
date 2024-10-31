import PropTypes from "prop-types";


const Cart = ({cart}) => {
    return (
        <div className="my-10">
            <h1 className="text-center text-2xl text-green-800 font-extrabold">Cart Product : <span>{cart.length}</span></h1>
        </div>
    );
};


Cart.propTypes={
    cart: PropTypes.array.isRequired
}

export default Cart;