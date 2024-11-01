
// Get Data From LocalStorage 
const getDbData = () =>{
    const localStorageData = localStorage.getItem("cart");
    if(localStorageData){
        return JSON.parse(localStorageData);
    }
    return [];
};

// Add Data To Local Storage 
const addToDataDb = (data) =>{
      const setDataToSaveLS = JSON.stringify(data);  
      localStorage.setItem("cart", setDataToSaveLS);
};

// Push Data after find data from cart option 
const addtToLocalDb = id =>{
    const dbData = getDbData();
    dbData.push(id);
    addToDataDb(dbData);
};


export {getDbData, addToDataDb, addtToLocalDb};