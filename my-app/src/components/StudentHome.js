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
        this.state.socket.emit('studentAction', {
            classId: this.state.classcode,
            studentId: this.state.username,
            present: true
        });
        /* Go to classroom animation screen */
        this.props.history.push({
            pathname: '/studyTime',
            state: { 
                classId: this.state.classcode,
                studentId: this.state.username,
            }
        })
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