import {useState} from "react"
const User=({name,location})=>{
    const [count,setCount]=useState(0)
    const [toggleValue,setToggleValue]=useState(false)
    useEffect(()=>{
        
    },[])
return(<div className="user-card">
<h1>Name: {name}</h1>
<h2>Location: {location}</h2>
<h2>{count}</h2>
<button onClick={() => setCount(count + 1)
}>Increase</button>
</div>)
}
export default User