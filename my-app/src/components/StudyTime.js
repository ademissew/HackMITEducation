import React from 'react'
// import TweenOne from 'rc-tween-one';
// import PropTypes from 'prop-types';
// import TweenOne from 'rc-tween-one';
// import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
// TweenOne.plugins.push(PathPlugin);
// import './StudyTime.css'
import {Planet} from 'react-kawaii'
import Container from './Container'

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
		this.state = {
			color: getRandomColor()
		}
		this.stuff = {
			moodMapping: {
				"ko": "#ab2e2e",
				"happy": "#ffd553",
				"excited": "#ffb253",
				"blissful": "#a5ee78",
				"sad": "#81c5f9"
			},
			moodCycle: ["ko","sad","happy","excited","blissful"],
			index: 2
		}
	}
	render(){
		const currentMood = this.stuff.moodCycle[this.stuff.index]
		return (
		<Container>
			<Planet size={300} mood={currentMood} color={this.stuff.moodMapping[currentMood]} text="Hello World!" />
		</Container>)
	}
}

