import React from 'react'
import CreateClassForm from './CreateClassForm'
import { Link } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'
import {List, ListItem, ListItemText} from '@material-ui/core'
import axios from 'axios'
import { getClassNames } from '../api'
import Container from './Container'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

class SelectClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { classes: [] }
    }

    componentDidMount() {
        getClassNames().then((response) => {
            this.setState({ 'classes': response.data });
        });
    }

    /*async getDataAxios(){
        const response =
          await axios.get("https://dog.ceo/api/breeds/list/all",
              { params: {name: 'bruno'}}
          )
        console.log(response.data)
    }*/

    goToClass = (classId) => {
        this.props.history.push({
            pathname: '/classView',
            state: { classId: classId }
        })
    }

    render() {
        return (

            <Container>
                <h1>Select Class</h1>
                <List style={ {width:'50%'} }>
                    {
                        this.state.classes.map(
                            (item, i) => <ListItem style={ {width:'100%', height:'50px'} }><Button style={ {width:'100%',  height:'50px'} } variant="outlined" color="default" key={i} onClick={(e) => this.goToClass(item)}> {item} </Button></ListItem>
                        )
                    }
                    <ListItem style={ {width:'100%', marginTop:'30px'} }><Button style={ {width:'100%'} }variant="outlined" color="primary" onClick={() => this.props.history.push('/createClass')}> Add a new class </Button></ListItem>
                </List>
                {/* <div>
                    <Fab size="small" color="extended" aria-label="add">
                        <AddIcon />
                    </Fab>
                </div> */}
            </Container>

        )
    }
}

export default SelectClass;