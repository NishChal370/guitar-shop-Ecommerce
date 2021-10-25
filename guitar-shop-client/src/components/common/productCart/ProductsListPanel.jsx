import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import '../../admin/index.css'
import ProductCart from './ProductCart';

function ProductsListPanel({calledFrom}) {
    const {state} = useLocation();
    const categoryState = useSelector(state => state.categoryReducer.data);

    return (
        <div className="admin__products__list">
            <h3>Available Products</h3>
            {(categoryState !== undefined)
                ?<> 
                <div>
                    { categoryState.map((categoryInfo, index)=>{
                        return <div key={`adminProd${index}`} className="tab-pane fade show" >
                            <span className="admin__product__list">
                            {(categoryInfo.categoryName === state)
                                ? (categoryInfo.products.length !== 0)
                                    ? categoryInfo.products.map((product, index)=>{
                                            return(
                                                <span className="tab-pane fade show cart--shadow">
                                                    <ProductCart key={`featureProd${index}`} product={product} categoryId={categoryInfo.categoryId} calledFrom= {calledFrom}/>
                                                </span>
                                            )

                                        })
                                    : <h4>Products Not Found</h4>
                                : ""
                            }  
                            </span>
                        </div>
                    })
                    }
                    
                </div>                           
                </>
                : "Loading"
            }
            
        </div>
    )
}

export default ProductsListPanel
