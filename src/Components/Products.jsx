import {useParams} from "react-router-dom"
import {useState} from "react"
import {categories} from "../data.js"
const ProductCard=({product})=>{
const {productName,sizes,ratings,imgURL,category,gender,brand}=products
}
const Products=()=>{
    const {categoryName}=useParams()
    const [products,setProducts]=useState(categories)
    const [orgProducts,setOrgProducts]=useState(categories)
   
    return (<>
    <section className="product-head">
<h3>Products</h3>
<input placeholder="Products...."/>
</section>
<section className="products-container">
<div className="filters"></div>
<div className="products-container">
    {
        products.map(product=>(<div>
            <ProductCard product={product}/>
        </div>))
    }
</div>
</section>
    </>)
}
export default Products
// useParams get all the routing Variables and wrap them into an object