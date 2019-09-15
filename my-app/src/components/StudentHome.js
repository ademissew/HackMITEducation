import React from 'react'
import {Redirect} from 'react-router-dom'
import openSocket from 'socket.io-client'
import Container from './Container'
import {TextField,Button} from '@material-ui/core'
class StudentHome extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            socket: openSocket('http://localhost:8080')
        }
        this.joinClass = this.joinClass.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleCodeChange = this.handleCodeChange.bind(this)
    
    }
    joinClass(){
        const username = document.getElementById("username-id").value
        const classcode = document.getElementById("class-code-id").value
        //this.setState({'username':username,'classcode':classcode})
        // if class/username doesn't exist, should push back to /studentHome, else go to /studyTime
        
        this.state.socket.emit('join', (classcode, username))
        
        this.props.history.push("/studyTime")
    }
    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }
    handleCodeChange(event) {
        this.setState({ classcode: event.target.value });
    }
    render(){
        return (
        <Container>
            <TextField
                autoComplete="off"
                id="username-id"
                label="User ID"
                placeholder="User ID"
                margin="normal"
                style={{width:"50%",textAlign:"left"}}
                name="username" 
                value={this.state.username} 
                variant="outlined"
                onChange={this.handleUsernameChange} 
            />
            <div></div>
            <TextField
                autoComplete="off"
                id="class-code-id"
                label="Class Code"
                placeholder="User ID"
                margin="normal"
                style={{width:"50%",textAlign:"left"}}
                name="class-code" 
                value={this.state.classcode} 
                variant="outlined"
                onChange={this.handleCodeChange} 
            />
            <div></div>
            <div style={{marginTop:'20px'}}>
                    <Button variant="outlined" type="submit" onClick={this.joinClass}>Join</Button>
            </div>
        </Container>)
    }
}
export default StudentHome