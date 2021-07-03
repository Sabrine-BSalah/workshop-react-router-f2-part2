import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { listProducts } from '../Data'


const Product = ({ location, match, history }) => {
    const [product, setProduct] = useState({});

    // const { name, description, img } = location.state

    useEffect(() => {
        setProduct(listProducts.find(product => product.id === +match.params.id))
    }, [match.params.id]);


    return (
        <div className="productDetails">
            <h2 className="prodName">{product.name}</h2>
            <h3>{product.description}</h3>
            <img className="productImg" src={product.img} alt={product.name} />
            <Button variant="secondary"
                onClick={() => history.goBack()}
            >Go Back</Button>
        </div>
    )
}

export default Product
