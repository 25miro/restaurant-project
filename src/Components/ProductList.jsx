import React from 'react'
import Product from './Product'

export default function ProductList(props) {

    const {product, onAdd} = props;

    return (
        <section className="grid">
                {
                    product.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                        ))
                }
           </section>
           
    )
}
