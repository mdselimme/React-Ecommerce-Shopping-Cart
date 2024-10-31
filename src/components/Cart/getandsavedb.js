
const getDbData = () =>{
    const localStorageData = localStorage.getItem("cart");
    if(localStorageData){
        return JSON.parse(localStorageData);
    }
    return [];
};

const addToDataDb = (data) =>{

        localStorage.setItem("cart", JSON.stringify(data));

};

const addtToLocalDb = id =>{
    
}






export {getDbData, addToDataDb};