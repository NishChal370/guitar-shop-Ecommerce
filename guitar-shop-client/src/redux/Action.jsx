export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_PRODUCT = 'SET_PRODUCT';
export const SET_ADMIN = 'SET_ADMIN';

const setCategory=(data)=>{
    return{
        type: SET_CATEGORY,
        payload: data
    }
}

const setProduct=(data)=>{
    
    return{
        type: SET_PRODUCT,
        payload: data
    }
}

const setAdmin=(data)=>{
    
    return{
        type: SET_ADMIN,
        payload: data
    }
}


export {setCategory, setProduct, setAdmin}