import React from 'react'
import Container from './Container'
import {Button} from '@material-ui/core'
import {List, ListItem, ListItemText} from '@material-ui/core'
import Done from '@material-ui/icons/Done';
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

        this.state.socket.on('notifyClass', data => {
            console.log("whoa");
            if(data.classId == this.state.class_id){
                    for(let i=0; i<this.state.students.length; i++){
                        if(this.state.students[i].name == data.studentId){
                            this.state.students[i].present = data.present
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

    goToStudyTime = () => {
        this.props.history.push({
            pathname: '/studyTime',
            state: { classId: this.state.class_id }
        })
    }

    

    render(){
        return(
            <Container>
                <div style={ {fontSize: '150%'} }> 
                    Class code : <span style={ {fontWeight : 500} }>{this.state.class_id}</span> 
                </div>
                <List style={ {width:'50%'} }>
                    {this.state.students.map(
                        (item) => 
                            <ListItem divider={true} >
                                <div style={{color :item.present == true ? 'green' : 'lightgray', display: 'flex', justifyContent: 'flex-end'}}>
                                    <Done />
                                    <ListItemText icon="done" primary={item.name} > </ListItemText>
                                </div>
                            </ListItem>
                    )}
                </List>
                <Button variant="outlined" style={ {marginTop : '20px'} } onClick={() => this.goToStudyTime()}> Start class </Button>
            </Container>
        )
    }
}

export default ClassView;