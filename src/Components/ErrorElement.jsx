import { useRouteError } from "react-router-dom";
const ErrorElement
=()=>{

    const err=useRouteError()
console.log(err)
    return (<>
<h1>I am A ErrorElement
     Page</h1>
    </>)
}
export default ErrorElement
