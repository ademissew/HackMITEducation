import React from 'react'
import { createClass } from '../api'

class CreateClassForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { className: "", students: [] }
        this.addStudent = this.addStudent.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    addStudent() {
        const student = document.getElementById("student-name-id").value
        console.log(student)
        this.setState({ students: this.state.students.concat(student) })
        document.getElementById("student-name-id").value = ""
    }

    handleChange(event) {
        this.setState({ students: this.state.students, className: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        createClass(this.state.className, this.state.students)
        this.props.history.push('/selectClass')
    }

    render() {
        return (<div >
            <label>
                Class Name:
                    <input type="text" name="class-name" value={this.state.className} onChange={this.handleChange} />
            </label>
            <div></div>
            <ul>
                {this.state.students.map((student) => <li key={student}>{student}</li>)}
            </ul>
            <label>
                StudentId:
                    <input type="text" name="student-name" id="student-name-id" />
                <button name="add-student" onClick={this.addStudent}>+</button>
            </label>
            <div></div>
            <button type="submit" onClick={this.handleSubmit}>Create</button>
        </div >)
    }
}

export default CreateClassForm;