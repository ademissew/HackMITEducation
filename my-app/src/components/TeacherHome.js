
import React from 'react'
import Container from './Container'
import {TextField,Button} from '@material-ui/core'
class TeacherHome extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        this.joinClass = this.joinClass.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleCodeChange = this.handleCodeChange.bind(this)
    
    }
    joinClass = (classId) => {
                    this.props.history.push({
                        pathname: '/classView',
                        state : {classId : classId}
                    })
                }
    handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }
    handleCodeChange(event) {
        this.setState({ classcode: event.target.value });
    }
    render(){
        return (
        <Container>
            <h1>Teacher Login</h1>
            <TextField
                autoComplete="off"
                id="username-id"
                label="User ID"
                placeholder="User ID"
                margin="normal"
                style={{width:"50%",textAlign:"left"}}
                name="username" 
                value={this.state.username} 
                variant="outlined"
                onChange={this.handleUsernameChange} 
            />
            <div></div>
            <TextField
                autoComplete="new-password"
                id="class-code-id"
                label="Password"
                placeholder="Password"
                margin="normal"
                type="password"
                style={{width:"50%",textAlign:"left"}}
                name="class-code" 
                value={this.state.classcode} 
                variant="outlined"
                onChange={this.handleCodeChange} 
            />
            <div></div>
            <div style={{marginTop:'20px'}}>
                    <Button variant="outlined" type="submit" onClick={() => this.props.history.push('/selectClass')}>Join</Button>
            </div>
        </Container>)
    }
}
export default TeacherHome// import React from 'react'
// import CreateClassForm from './CreateClassForm'
// import {Link} from 'react-router-dom'
// import {Button} from '@material-ui/core'
// import Container from './Container'

// class TeacherHome extends React.Component {
//     constructor(props){
//         super(props)
        
//         const classes = ['Calculus', 'Geometry']

//         this.state = {'classes': classes }
//     }

//     /*async getDataAxios(){
//         const response =
//           await axios.get("https://dog.ceo/api/breeds/list/all",
//               { params: {name: 'bruno'}}
//           )
//         console.log(response.data)
//     }*/

//     goToClass = (classId) => {
//         this.props.history.push({
//             pathname: '/classView',
//             state : {classId : classId}
//         })
//     }

//     render(){
//         return (
//             <Container>
//                     {/* <Button variant="outlined" onClick={() => this.props.history.push('/createClass')}> Create class </Button> */}
//                     <Button variant="outlined" onClick={() => this.props.history.push('/selectClass')}> Start class </Button>
//             </Container>
//         )
//     }
// }

// export default TeacherHome;