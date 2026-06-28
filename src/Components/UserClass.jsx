import {Component}  from "react"
class UserClass extends Component{
constructor(props){
super(props)
this.state={
count:0,
toggleValue:false
}
console.log("I am a child contructor")
}
componentDidMount(){
    console.log("I am  child component did mount")
}

    render(){
        console.log("I am a child render")
        const {count,toggleValue}=this.state
        const {name,location}=this.props
        return (<div className="user-card">
        <h1>Name: {name}</h1>
<h2>Location: {location}</h2>
<h2>{count}</h2>
<button onClick={()=>{
    this.setState({
        count:count+1,
 
    })
}}>Increase</button>
        </div>)
    }
}
export default UserClass;

// What is a class based component?
// It is a class and it inherits the properties of  Component class that comes from react
// It has a render method that returns JSX
// There were no mordern day hooks, that can be used inside class based components

// In both the components you have to design a toggle
//  button on click of which the  color of the card changes to red