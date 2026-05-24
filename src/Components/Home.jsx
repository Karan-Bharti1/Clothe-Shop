import {Link} from "react-router-dom"
import { FaShopify } from "react-icons/fa";
const Home=()=>{
    return (<>
<h1>
<section>
    <div className="img-container">
    <img className="img-home" src="https://images.pexels.com/photos/33517294/pexels-photo-33517294.jpeg"/>
  <Link className="primary-btn position-img-button" to="/products"><FaShopify/></Link>
  </div>
</section>

</h1>
    </>)
}
export default Home