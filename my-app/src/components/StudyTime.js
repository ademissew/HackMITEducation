import React from 'react'
import openSocket from 'socket.io-client'

class StudyTime extends React.Component {
    constructor(props){
        super(props)
        let studentId = props.location.state.studentId
        let isHost = false
        if(studentId == null){
            isHost = true
            studentId = -1
        }
        this.state = {
            socket : openSocket('http://localhost:8080'),
            studentId : studentId ,
            classId :  props.location.state.classId
        }

        this.state.socket.on('notifyClass' , data => {
            console.log(data.studentId + " has left the study session")
        })
    }


    componentWillUnmount(){//this will trigger the server to emit "notifyClass"
        this.state.socket.emit('studentAction', 
            {classId: this.state.classcode, studentId: this.state.username, present: false})
    }

    render() {
        return (<div>PUT YO PHONE AWAY</div>)
    } 
}
export default StudyTime