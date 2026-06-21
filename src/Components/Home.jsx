import {Link} from "react-router-dom"
import { FaShopify } from "react-icons/fa";
import {categories} from "../data.js"
import CategoryCard from "./CategoryCard.jsx"
import Footer from "./Footer"
const Home=()=>{
    return (<>

<section>
    <div className="img-container">
    <img className="img-home" src="https://images.pexels.com/photos/33517294/pexels-photo-33517294.jpeg"/>
  <Link className="primary-btn position-img-button" to="/products"><FaShopify/></Link>
  </div>
</section>
<section>
    <h1 className="category-head">Popular Categories</h1>
   <div className="categories-container">
 {
    categories.map(category=>(
        <div className="category-image"  key={category.categoryName}>
       <CategoryCard category={category}/>
       </div>
    ))
 }

   </div>
</section>
<Footer/>
    </>)
}
export default Home