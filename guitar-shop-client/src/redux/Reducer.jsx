import { combineReducers } from "redux"
import { SET_CATEGORY, SET_PRODUCT, SET_ADMIN, SET_CART } from "./Action"

const initialCategoryState={
    categoryData:[],
    productData:[],
    adminData:[],
    cartData:[]
}

const categoryReducer=(state=initialCategoryState.categoryData , action)=>{
    switch (action.type) {
        case SET_CATEGORY:
            return{
                ...state,
                data : [...action.payload]
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


const adminReducer=(state=initialCategoryState.cartData , action)=>{
    switch (action.type) {
        case SET_ADMIN:
            return{
                ...state,
                data : action.payload
            }
    
        default:
            return state
    }
}

const cartReducer=(state=initialCategoryState.adminData , action)=>{
    switch (action.type) {
        case SET_CART:
            return{
                ...state,
                data : action.payload
            }
    
        default:
            return state
    }
}

const rootReducer =  combineReducers({categoryReducer, productReducer, adminReducer, cartReducer})

export default rootReducer