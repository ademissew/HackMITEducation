import openSocket from 'socket.io-client';
import axios from 'axios';
const socket = openSocket('http://localhost:8080');

function getWeather() {
    socket.emit('getWeather', null);
}

const createClass = async (teacher, className, students) => {
    let data = {
        "teacher": teacher,
        "className": className,
        "students": students
    }
    try {
        const res = await axios.post(
            "http://localhost:8080/createClass", data
        );
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
};

export { socket, createClass };