import React from 'react'
import Container from './Container'
import { createClass } from '../api'
import {Button,Fab, TextField} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

class CreateClassForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { className: "", students: [] }
        this.addStudent = this.addStudent.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEnter = this.handleEnter.bind(this)

    }
    handleEnter(e){
        if (e.keyCode == 13){
        this.setState({ students: this.state.students.concat(this.state.student),student:"" })
        document.getElementById("student-name-id").value = "HI"
        }
    }

    addStudent(e) {
        e.preventDefault();
        this.setState({ student: e.target.value });
    }

    handleChange(event) {
        this.setState({ className: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        createClass(this.state.className, this.state.students)
        this.props.history.push('/selectClass')
    }

    render() {
        return (
            <Container>
                <TextField
                    required
                    id="class-name-id"
                    label="Class Name:"
                    placeholder="Class Name"
                    margin="normal"
                    style={{width:"50%"}}
                    name="class-name" 
                    onChange={this.handleChange} 
                    />
                <ul>
                    {this.state.students.map((student) => <li key={student}>{student}</li>)}
                </ul>
                    
                    <TextField
                        required
                        id="student-name-id"
                        label="Add Student:"
                        placeholder="Student ID"
                        margin="normal"
                        style={{width:"50%",textAlign:"left"}}
                        name="student-name" 
                        value={this.state.student} 
                        variant="outlined"
                        onChange={this.addStudent} 
                        onKeyDown={this.handleEnter}
                        />
                    
                        {/* <AddIcon color="disabled" style={{width:"10%",display:'flex',paddingTop:"5%"}}/> */}

                <Button variant="outlined" type="submit" onClick={this.handleSubmit}>Create </Button>
            </Container>
        )
    }
}

export default CreateClassForm;