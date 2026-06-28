import User from "./User"
import UserClass from "./UserClass"
import {Component}  from "react"


class Profile extends Component{
    constructor(props){
        super(props)
        console.log("Parent Contructor")
    }
    componentDidMount(){
        console.log("I am  parent comp did mount")
    }
    render(){
        console.log("Parent Render")
        return (<>

            <UserClass name={"Shivam From  Class Based Component" }  location={"New Delhi"}/>
            <UserClass name={"Shivam From  Class Based Component" }  location={"New Delhi"}/>
                </>)
    }
}
export default Profile