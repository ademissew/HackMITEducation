import React from 'react'
import Container from './Container'
import {Button} from '@material-ui/core'
import {List, ListItem, ListItemText} from '@material-ui/core'
import Done from '@material-ui/icons/Done';
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
                <Button variant="outlined" style={ {marginTop : '20px'} }> Start class </Button>
            </Container>
        )
    }
}

export default ClassView;