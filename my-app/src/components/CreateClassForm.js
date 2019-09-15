import React from 'react'
import Container from './Container'
import { createClass } from '../api'
import {Button, TextField,List, ListItem, ListItemText} from '@material-ui/core'

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
        if (e.keyCode === 13){
        this.setState({ students: this.state.students.concat(
            {
                name : this.state.student,
                present : false
            }
            //this.state.student
        ),student:"" })
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
        createClass(this.state.className, this.state.students, this.props)

    }

    render() {
        return (
            <Container>
                <TextField
                    required
                    autoComplete="off"
                    id="class-name-id"
                    label="Class Name:"
                    placeholder="Class Name"
                    margin="normal"
                    style={{width:"50%"}}
                    name="class-name" 
                    onChange={this.handleChange} 
                    />
                <List style={ {width:'50%'} }>
                    {this.state.students.map(
                        (item) => 
                            <ListItem divider={true} >
                                <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                                    <ListItemText icon="done" primary={item.name} > </ListItemText>
                                </div>
                            </ListItem>
                    )}
                </List>
                    
                    <TextField
                        autoComplete="off"
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
                    
                <div style={{marginTop:'20px'}}>
                    <Button variant="outlined" type="submit" onClick={this.handleSubmit}>Create </Button>
                </div>
            </Container>
        )
    }
}

export default CreateClassForm;