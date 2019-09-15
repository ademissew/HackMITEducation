import React from 'react'
import Container from './Container'
import {Button} from '@material-ui/core'
import {List, ListItem, ListItemText,Slider,Typography} from '@material-ui/core'
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

        this.state.socket.on('notifyClass', data => {

            if(data.classId === this.state.class_id){
                console.log("hellooo")
                    for(let i=0; i<this.state.students.length; i++){
                        if(this.state.students[i].name === data.studentId){
                            console.log(data.present)
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
                <div style={{width:"50%",marginTop:'30px',marginBottom:'30px'}}>
                <Typography id="input-slider" style={{textAlign:'left'}}>
                    Duration
                </Typography>
                    <Slider
                    style={{width:"100%",display:'flex'}}
                    defaultValue={60}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={15}
                    marks
                    min={0}
                    max={120}
                />
                </div>
                <Button onClick={() => this.goToStudyTime()} variant="outlined" style={ {marginTop : '20px'} }> Start class </Button>
            </Container>
        )
    }
}

export default ClassView;