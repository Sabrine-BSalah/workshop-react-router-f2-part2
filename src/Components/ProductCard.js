import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div className="productCard">

            <h2 className="prodName">
                {/* Method 1 : location */}
                {/* <Link className="productLink" to={{
                    pathname: `/product/${product.id}`,
                    state: product
                }}>
                    {product.name}
                </Link> */}

                {/* Method 2 : match */}
                <Link to={`/product/${product.id}`}>
                    {product.name}
                </Link>
            </h2>
            <img src={product.img} alt={product.name} className="productImg" />
        </div>
    )
}

export default ProductCard
