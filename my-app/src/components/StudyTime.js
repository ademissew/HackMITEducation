import React from 'react'
import openSocket from 'socket.io-client'
// import TweenOne from 'rc-tween-one';
// import PropTypes from 'prop-types';
// import TweenOne from 'rc-tween-one';
// import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
// TweenOne.plugins.push(PathPlugin);
// import './StudyTime.css'
import { Planet } from 'react-kawaii'
import Container from './Container'
import { FadeLoader } from 'react-spinners';
import { getStudents, countPresent } from '../api'

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

export default class StudyTime extends React.Component {
	constructor(props) {
		super(props)

		let studentId = props.location.state.studentId
		let isHost = false
		if (studentId == null) {
			isHost = true
			studentId = -1
        }
		this.state = {
			color: getRandomColor(),
			loading: false,
			socket: openSocket('http://localhost:8080'),
			studentId: studentId,
            classId: props.location.state.classId,
            numStudents: 0,
    	}

		this.state.socket.on('notifyClass', data => {
            this.setState({numStudents : countPresent(data)})
        })

		this.stuff = {
			moodMapping: {
				"ko": "#ab2e2e",
				"happy": "#ffd553",
				"excited": "#ffb253",
				"blissful": "#a5ee78",
				"sad": "#81c5f9"
			},
			moodCycle: ["ko", "sad", "happy", "excited", "blissful"],
			index: 2
		}
    }
    
    componentDidMount() {
        getStudents(this.state.classId).then((response) => {
            this.setState({
                numStudents: countPresent(response.data),
                classId: this.state.classId
            });
        });
    }


	componentWillUnmount() {
		console.log("unmounting");
		this.state.socket.emit('studentAction', {
			className: this.state.classId,
			student: { name: this.state.studentId, present: false }
		});
	}

	render() {
		const currentMood = this.stuff.moodCycle[this.stuff.index]
		if (this.state.loading) {

		}
		return (
			<Container>
				{/* {this.state.loading ? (<FadeLoader
					// css={override}
					sizeUnit={"px"}
					size={150}
					color={'#123abc'}
					loading={this.state.loading}
                />) : */}
                    {this.state.numStudents}
					 {/* <Planet size={300} mood={currentMood} color={this.stuff.moodMapping[currentMood]} text="Hello World!" />} */}
            </Container>
        )
	}
}

