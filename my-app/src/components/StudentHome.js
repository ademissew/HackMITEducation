import React from 'react'
import {Redirect} from 'react-router-dom'

class StudentHome extends React.Component{
    constructor(props){
        super(props)
        this.state = {join:false}
        this.joinClass = this.joinClass.bind(this)
    }
    joinClass(){
        const username = document.getElementById("username-id").value
        const classcode = document.getElementById("class-code-id").value
        this.setState({join:true,'username':username,'classcode':classcode})
    }
    render(){
        return (
        this.state.join ? <Redirect to="/studyTime"/> : (<div>
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

        </div>))
    }
}
export default StudentHome