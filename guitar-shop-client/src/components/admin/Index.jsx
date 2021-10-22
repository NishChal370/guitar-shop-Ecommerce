import React from 'react'

import './index.css'
import Login from './Login'
import ProductPanel from './ProductPanel'
import { Switch, Route} from 'react-router-dom'


function Index() {

    return (
        <div className="admin">          
            <Switch>
                <Route path="/admin/products">
                    <ProductPanel/>
                </Route>
                <Route path="/admin">
                    <Login />
                </Route>
            </Switch>
        </div>
    )
}

export default Index
