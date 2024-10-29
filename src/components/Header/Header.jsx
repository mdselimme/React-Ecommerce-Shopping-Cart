

const Header = () => {
    return (
        <div className="bg-black">
            <div className="container mx-auto flex justify-around py-4 text-white items-center">
            <div>
                <h1 className="text-3xl">Desire Buy</h1>
            </div>
            <div>
                <input className="py-3 text-xl px-10 rounded-l-xl" type="text" placeholder="search your desire product" />
                <button className="btn bg-green-600 rounded-r-xl text-black py-3 text-xl px-10" type="submit">Search Product</button>
            </div>
        </div>
        </div>
    );
};

export default Header;