import React from 'react'

class StudentHome extends React.Component{
    constructor(props){
        super(props)
        this.joinClass = this.joinClass.bind(this)
    }
    joinClass(){
        const username = document.getElementById("username").value
        const classcode = document.getElementById("class-code").value
    }
    render(){
        return (<div>
            <label>
                Username: 
                <input type="text" name="username"/>
            </label>
            <div></div>
            <label>
                Class Code: 
                <input type="text" name="class-code"/>
            </label>
            <div></div>
            <input type="submit" value="Join" onClick={this.joinClass}/>

        </div>)
    }
}
export default StudentHome