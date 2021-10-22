import React from 'react'

import './Footer.css'
import { GiSurferVan } from "react-icons/gi";
import { MdAvTimer, MdCopyright } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function Footer() {
    return (
        <footer className="footer">
            <section className="footer__top container">
                <article className="col-lg-4 block-content ">
                    <h5 className="footer__title"><GiSurferVan/>Local Customer Service</h5>
                    <p>100% local, NZ owned and operated</p>
                </article>

                <article className="col-lg-4 block-content">
                    <h5  className="footer__title"><RiMoneyDollarCircleLine/>Price Matching</h5>
                    <p>Found a cheaper price elsewhere?<br/>Ask us to beat it!</p>
                </article>
 
                <article className="col-lg-4 block-content">
                    <h5  className="footer__title"><MdAvTimer/>Piano Experts</h5>
                    <p>We are very passionate about our <br/>pianos and are experts on our range</p>
                </article>
            </section>
            <section className="footer__middle container">
                <article className="block info-block">
                    <div className="block-title">
                        <strong>AT MUSIC PLANET</strong>
                    </div>
                    <div className="block-content">
                        <p>We live and breathe music and are passionately dedicated to helping hobbyists, students and musicians succeed in their musical endeavours.</p>
                    </div>
                </article>
                <article className="block info-block">
                    <div className="block-title block-title--center">
                        <strong>USEFUL LINKS</strong>
                    </div>
                    <div className="block-content useful__links">
                        <ul>
                            <li>About us</li>
                            <li>Shipping</li>
                            <li>FQA</li>
                        </ul>
                        <ul>
                            <li>My Account</li>
                            <li>Privacy Policy</li>
                            <li>Guarantee</li>
                        </ul>
                    </div>
                </article>
                <form className="form subscribe">
                    <div className="field newsletter">
                        <label className="label" htmlFor="footer_newsletter"><span>Sign Up for Our Newsletter:</span></label>
                        <div className="subscribe__control">
                            <input name="email" type="email" id="footer_newsletter" placeholder="Email Address"/>
                            <div className="actions">
                                <button className="action subscribe primary" title="Subscribe" type="submit">
                                    <span>Subscribe</span>
                                </button>
                            </div>
                        </div>
                    </div>  
                </form>     
            </section>
            <section className='copyright__container'>
                <p><MdCopyright/>2021 Music Planet Nepal. All Rights Reserved</p>
            </section>           
        </footer>
    )
}

export default Footer
