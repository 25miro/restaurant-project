import React from 'react';

export default function Product(props) {

    const {product, onAdd} = props;

  return (
    <>
    <div>
        <h3>{product.name}</h3>
        <img className="small" src={product.image} alt={product.name}></img>
        <h3>{product.description}</h3>
        <div>{"\u20AC" + product.price}</div>
        <div>
            <button onClick={() => onAdd(product)}>Add to Cart</button>
        </div>
    </div>
    </>
  );
}
