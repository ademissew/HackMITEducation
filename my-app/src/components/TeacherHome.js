import React from 'react';

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

    render(){
        return (
            <div>
                {<ul>
                    {this.state.classes.map((item)=><button> {item} </button>)}
                </ul>}
                <button> Create a class </button>
            </div>
        )
    }
}

export default TeacherHome;