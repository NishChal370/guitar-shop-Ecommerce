export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_PRODUCT = 'SET_PRODUCT';

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


export {setCategory, setProduct}