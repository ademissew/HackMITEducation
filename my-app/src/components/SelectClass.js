import React from 'react'
import CreateClassForm from './CreateClassForm'
import {Link} from 'react-router-dom'
import {Button, Grid} from '@material-ui/core'

class SelectClass extends React.Component {
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
        
            <div>
                 {<ul>
                    {this.state.classes.map(
                        (item)=><button onClick={(e) => this.goToClass(item)}> {item} </button>
                    )}
                </ul>}
                
            </div>

        )
    }
}

export default SelectClass;