import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/productReducer";
import { useEffect, useState } from "react";
import { fetchCart } from "../Redux/cartReducer";

function Accounts() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    const products = useSelector(state => state.products)
    const carts = useSelector(state => state.carts)
    return (
        <>
            <h1>Accounts :</h1>
            {
                products.loading ? <h1>Loading ...</h1> :
                    products.error ? <h1>{products.error}</h1> :
                        products.data && products.data.map(product => {
                            return (
                                <ul key={product.product_id}>
                                    <li>{product.product_name}</li>
                                </ul>
                            )
                        })
            }
        </>
    )
}

export default Accounts;