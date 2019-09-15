import React from 'react'
import CreateClassForm from './CreateClassForm'
import {Link} from 'react-router-dom'
import {Grid, Button} from '@material-ui/core'
import Container from './Container'

class TeacherHome extends React.Component {
    constructor(props){
        super(props)
        
        const classes = ['Calculus', 'Geometry']

        this.state = {'classes': classes }
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
            state : {classId : classId}
        })
    }

    render(){
        return (
            <Container>
                    <Button variant="outlined" onClick={() => this.props.history.push('/createClass')}> Create class </Button>
                    <Button variant="outlined" onClick={() => this.props.history.push('/selectClass')}> Start class </Button>
            </Container>
        )
    }
}

export default TeacherHome;