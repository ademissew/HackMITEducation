import React from 'react';

class ClassView extends React.Component {
    /* 
        1. Receive class_id from TeacherHome. 
        2. Get students for class via API request
    */
   constructor(props){
       super(props);
       const students = [
           {name : 'Joseph', present: 1}
       ]
       this.state = {
           students : students,
           class_id : props.location.state.classId
       }
   }


    render(){
        return(
            <div>
                Class code : {this.state.class_id}
                {<ul>
                    {this.state.students.map(
                        (item) => <li> {item.name} : {item.present} </li>
                    )}
                </ul>}
                <button> Start class session </button>
            </div>
        )
    }
}

export default ClassView;