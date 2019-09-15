import React from 'react'
import openSocket from 'socket.io-client'
import { Button } from '@material-ui/core'
import { Planet } from 'react-kawaii'
import Container from './Container'
import { FadeLoader } from 'react-spinners';
import Confetti from 'react-confetti'
import { getStudents, countPresent } from '../api';

var d3Interpolate = require("d3-interpolate");
import { getStudents, countPresent } from '../api';

export default class StudyTime extends React.Component {
	constructor(props) {
		super(props)
		this.studentId = props.location.state.studentId;
		let isHost = false
		if (this.studentId == null) {
			isHost = true
			this.studentId = -1
		}

		this.state = {
			loading: false,
			socket: openSocket('http://localhost:8080'),
			studentId: this.studentId,
			classId: props.location.state.classId,
			numStudents: 0,
			loading: true,
			socket: openSocket('http://localhost:8080'),
			studentId: this.studentId,
			classId: props.location.state.classId,
			moodMapping: {
				"ko": "#ab2e2e",
				"sad": "#81c5f9",
				"happy": "#ffd553",
				"excited": "#ffb253",
				"blissful": "#a5ee78"
			},
			sizeMapping: {
				"ko": 100,
				"sad": 110,
				"happy": 120,
				"excited": 140,
				"blissful": 160
			},
			moodCycle: ["ko", "sad", "happy", "excited", "blissful"],
			index: 2,
			cycle: 0
		}


		this.state.socket.on('notifyClass', data => {
			this.setState({ numStudents: countPresent(data) })
		})

		this.interval = 0
		this.intervalTwo = 0
		this.resetAnimation = this.resetAnimation.bind(this)
	}

	componentDidMount() {
		getStudents(this.state.classId).then((response) => {
			let count = countPresent(response.data)
			if (count !== this.state.numStudents) {
				this.setState({
					numStudents: count,
					index:0,
					cycle:0,
					classId: this.state.classId
				});
			} else {
				this.setState({
					numStudents: count,
					classId: this.state.classId
				});
			}
			
		});
	}

	resetAnimation(animiationState){
		this.interval = setInterval(() => this.setState({ time: Date.now(), index: (animiationState+ 1), cycle: 0 }), 40000);
		this.intervalTwo = setInterval(() => this.setState({ time: Date.now(), cycle: this.state.cycle + 1 }), 200);
	}

	componentDidMount() {
		this.resetAnimation(2)
	}

	componentWillUnmount() {//this will trigger the server to emit "notifyClass"
		clearInterval(this.interval);
		clearInterval(this.intervalTwo);

		this.state.socket.emit('studentAction',
			{ classId: this.state.classcode, studentId: this.state.username, present: false })
	}

	render() {
		const currentMood = this.state.moodCycle[this.state.index]
		let x
		if (this.state.index < 4) {
			const nextMood = this.state.moodCycle[this.state.index + 1]

			x = d3Interpolate.interpolateLab(this.state.moodMapping[currentMood], this.state.moodMapping[nextMood]);
			x = x((this.state.cycle) / 200.0)
		} else {
			x = this.state.moodMapping['blissful']
		}
		let size = (this.state.index >= 4) ? this.state.sizeMapping[currentMood] : this.state.sizeMapping[currentMood] + this.state.cycle / 20.0
		return (
			<Container>
				{this.state.index >= 4 && <Confetti />}
				{!this.state.loading ? (<FadeLoader
					// css={override}
					sizeUnit={"px"}
					size={150}
					color={'#123abc'}
					loading={this.state.loading}
				/>) :
					<Planet
						size={size}
						mood={currentMood}

						color={x}
						text="Pay attention!" />}
				{this.state.numStudents}
				{this.studentId === -1 && <Button style={{ margin: '100px' }} color="secondary" variant="outlined" type="submit" onClick={this.joinClass}>End Class</Button>}

			</Container>)
	}
}
