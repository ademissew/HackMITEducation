import React from 'react'
import {Redirect} from 'react-router-dom'

class StudentHome extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        this.joinClass = this.joinClass.bind(this)
    }
    joinClass(){
        const username = document.getElementById("username-id").value
        const classcode = document.getElementById("class-code-id").value
        this.setState({'username':username,'classcode':classcode})
        // if class/username doesn't exist, should push back to /studentHome, else go to /studyTime
        this.props.history.push("/studyTime")
    }
    render(){
        return (
        <div>
            <label>
                Username: 
                <input type="text" name="username" id="username-id"/>
            </label>
            <div></div>
            <label>
                Class Code: 
                <input type="text" name="class-code" id="class-code-id"/>
            </label>
            <div></div>
            <input type="submit" value="Join" onClick={this.joinClass}/>

        </div>)
    }
}
export default StudentHome