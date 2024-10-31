
const getDbData = () =>{
    const localStorageData = localStorage.getItem("cart");
    if(localStorageData){
        return localStorageData;
    }
    return [];
};

const addToDataDb = (data) =>{

        localStorage.setItem("cart", data);

};








export {getDbData, addToDataDb};