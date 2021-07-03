import React from 'react'
import { listProducts } from '../Data'
import ProductCard from './ProductCard'

const Products = () => {
    console.log(listProducts)
    return (
        <div className="productsContent">
            <h2>This is the Page Products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laborum. Delectus corporis blanditiis nemo, hic consectetur ut iure fugiat illo optio ad rerum quibusdam sequi quas veniam asperiores harum ullam corrupti aperiam impedit quidem! Quae doloribus ex architecto similique reprehenderit accusantium sed eum facilis, provident voluptas. Rerum dolores iure quod facere vitae numquam, id incidunt voluptatem, quidem dolorum beatae. Facere similique accusamus iure vel dolores ipsam ullam est, suscipit quidem explicabo, laudantium officiis impedit ducimus eveniet? Animi cumque tenetur, consequatur deserunt, in eos odio vel facilis ad quam minus? Voluptatibus expedita voluptate, sed architecto blanditiis soluta iure hic eum fugit!</p>
            <hr />
            <div className="listProducts">
                {listProducts.map(product =>
                    <ProductCard key={product.id} product={product} />
                )}
            </div>

        </div>
    )
}

export default Products
