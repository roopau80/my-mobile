import React from 'react'
import { useParams } from 'react-router-dom';
import DATA from '../Data';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const ProductDetails = () => {
    const [cartBtn, setCartBtn] = useState("Add to cart")
    // now we need product id  which is pass the product page.
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    // we need to store useDispatch in to variable
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartBtn === "Add to cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from cart")
        } else {
            dispatch(delItem(product))
            setCartBtn("Add to cart")
        }
    }
    return (
        <>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-md-6 d-flex justify-content-center mx-auto product'>
                        <img src={process.env.PUBLIC_URL + product.img} alt={product.title} height="400px" />
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                        <h1 className='display-5 fw-bold'>{product.title}</h1>
                        <hr />
                        <h2 className='my-2'>{product.price}</h2>
                        <p className=' '>{product.desc}</p>
                        <button onClick={() => handleCart(product)} className='btn btn-outline-primary'> {cartBtn}</button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductDetails;