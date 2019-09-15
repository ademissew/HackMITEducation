import React from 'react'
import Container from './Container'
import {Button} from '@material-ui/core'
import {List, ListItem, ListItemText} from '@material-ui/core'
import Done from '@material-ui/icons/Done';
import Clear from '@material-ui/icons/Clear';

import { getStudents } from '../api'
import openSocket from 'socket.io-client'

class ClassView extends React.Component {
    /* 
        1. Receive class_id from TeacherHome. 
        2. Get students for class via API request
    */
    constructor(props) {
        super(props);
        this.state = {
            socket: openSocket('http://localhost:8080'),
            students: [],
            class_id: props.location.state.classId,
        }

            this.state.socket.on('notifyTeacher', duple => {
                console.log("hi")
                if(duple.classId == this.state.class_id){
                        for(let i=0; i<this.state.students.length; i++){
                            if(this.state.students[i].name == duple.studentId){
                                this.state.students[i].present = true
                                console.log("whoa")
                            }
                        }
                        this.setState({students : this.state.students}) //?
                } 
            }
        )
    }

    componentDidMount() {
        getStudents(this.state.class_id).then((response) => {
            this.setState({
                students: response.data,
                class_id: this.state.class_id
            });
        });
    }

    

    render(){
        return(
            <Container>
                <h1>Join Class</h1>
                <div style={ {fontSize: '150%', margin: '10px'} }> 
                    Class code : <span style={ {fontWeight : 500} }>{this.state.class_id}</span> 
                </div>
                <List style={ {width:'50%'} }>
                    {this.state.students.map(
                        (item) => 
                            <ListItem divider={true} >
                                <div style={{color :item.present ? 'green' : 'lightgray', display: 'flex', justifyContent: 'flex-end'}}>
                                    {item.present ? <Done /> : <Clear/>}
                                    <ListItemText icon="done" primary={item.name} style={{marginLeft:'20px'}}>{item}</ListItemText>
                                </div>
                            </ListItem>
                    )}
                </List>
                <Button onClick={() => this.props.history.push('/studyTime')} variant="outlined" style={ {marginTop : '20px'} }> Start class </Button>
            </Container>
        )
    }
}

export default ClassView;