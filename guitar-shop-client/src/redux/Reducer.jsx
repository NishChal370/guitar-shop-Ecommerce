import { combineReducers } from "redux"
import { SET_CATEGORY, SET_PRODUCT } from "./Action"

const initialCategoryState={
    categoryData:[],
    productData:[]
}

const categoryReducer=(state=initialCategoryState.categoryData , action)=>{
    switch (action.type) {
        case SET_CATEGORY:
            return{
                ...state,
                data : action.payload
            }
    
        default:
            return state
    }
}

const productReducer=(state=initialCategoryState.productData , action)=>{
    switch (action.type) {
        case SET_PRODUCT:
            return{
                ...state,
                data : action.payload
            }
    
        default:
            return state
    }
}


const rootReducer =  combineReducers({categoryReducer, productReducer})

export default rootReducer