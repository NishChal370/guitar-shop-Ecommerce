import React from 'react'
import { ImCross } from 'react-icons/im'

function ShoppingCartPage() {
    return (
        <div className="shopping-cart__container">
            
            <div className="cart-table__container">
                <h4>Shopping Cart</h4>
                <table class="table shopping__table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td colspan="4" class="table-active" style={{textAlign:"right"}}><ImCross/></td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td colspan="4" class="table-active" style={{textAlign:"right"}}><ImCross/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="summary__container">
                <h3>Summary</h3>
                <hr/>
                <section className="shipping__container">
                    <p>ESTIMATE SHIPPING AND TAX</p>
                    <div>
                        <label htmlFor="country">Country</label>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Nepal
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button class="dropdown-item" type="button">Nepal</button></li>
                            </ul>
                        </div>
                        <span className="input--flex" style={{display: "flex"}}>
                            <p>State/Province</p>
                            <input type="text" />
                        </span>
                        <span className="input--flex">
                            <label htmlFor="zip">Zip</label>
                            <input type="text" />
                        </span>
                        
                    </div>
                </section>
                <hr/>
                <section>
                    <span><p>Subtotal</p><p>0908</p></span>
                    <span><p>Shipping (Fixed Rate)</p><p>$30</p></span>
                </section>
                <hr/>
                <section>
                    <span>
                        <h3>Order Total</h3>
                        <h3>$09778</h3>
                    </span>
                </section>
                <hr/>
                <section>
                    <button type="button " class="btn btn-dark checkout__button">PROCEED TO CHECKOUT</button>
                </section>
            </div>
        </div>
    )
}

export default ShoppingCartPage
