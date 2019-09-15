import React from 'react'
import CreateClassForm from './CreateClassForm'
import { Link } from 'react-router-dom'
import { Button, Grid } from '@material-ui/core'
import axios from 'axios'
import { getClassNames } from '../api'

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

            <div>
                {<ul>
                    {/* {() => Object.keys(this.state.classes).map(
                        (className) => <button onClick={(e) => this.goToClass({ className: this.state.classes[className] })}> {className} </button>
                    )} */
                        this.state.classes.map(
                            (item, i) => <button key={i} onClick={(e) => this.goToClass(item)}> {item} </button>
                        )

                    }

                </ul>}

            </div>

        )
    }
}

export default SelectClass;