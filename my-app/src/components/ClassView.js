import React from 'react';
import { getStudents } from '../api'

class ClassView extends React.Component {
    /* 
        1. Receive class_id from TeacherHome. 
        2. Get students for class via API request
    */
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            class_id: props.location.state.classId
        }
    }

    componentDidMount() {
        getStudents(this.state.class_id).then((response) => {
            this.setState({
                students: response.data,
                class_id: this.state.class_id
            });
        });
    }


    render() {
        return (
            <div>
                Class code : {this.state.class_id}
                {<ul>
                    {this.state.students.map(
                        (item, i) => <li key={i}> {item.name} : {item.present} </li>
                    )}
                </ul>}
                <button> Start class session </button>
            </div>
        )
    }
}

export default ClassView;