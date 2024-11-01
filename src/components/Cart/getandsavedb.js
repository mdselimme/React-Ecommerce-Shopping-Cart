
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


// Remove Data From Local Storage 
const removeDataDb = id =>{
    console.log(id)
    const dbData = getDbData();
    console.log(dbData)
    const remData = dbData.filter(idx => idx.id == id);
    console.log(remData)
}


export {getDbData, addToDataDb, addtToLocalDb, removeDataDb};