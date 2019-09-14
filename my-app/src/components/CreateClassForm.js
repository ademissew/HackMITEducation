import React from 'react'

class CreateClassForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {students : []}
        this.addStudent = this.addStudent.bind(this)
    }

    addStudent() {
        const student = document.getElementById("student-name-id").value
        console.log(student)
        this.setState({students: this.state.students.concat(student)})
        document.getElementById("student-name-id").value = ""
    }

    render() {
        return (<div>
                <label>
                    Class Name: 
                    <input type="text" name="class-name"/>
                </label>
                <div></div> 
                {console.log(this.state.students)}
                <ul>
                    {this.state.students.map((student) => <li key={student}>{student}</li>)}
                </ul>
                <label>
                    StudentId: 
                    <input type="text" name="student-name" id = "student-name-id"/>
                    <button name="add-student" onClick={this.addStudent}>+</button>
                </label>
                <div></div>
                <input type="submit" value="Create"/>
        </div>)
    }
}

export default CreateClassForm;