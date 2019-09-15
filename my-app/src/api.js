import openSocket from 'socket.io-client';
import axios from 'axios';

const baseURL = 'http://localhost:8080'
const socket = openSocket(baseURL);

function getWeather() {
    socket.emit('getWeather', null);
}

const countPresent = (currClass) => {
    let numStudents = 0;
    
    for(let j=0; j<currClass.length; j++){
        numStudents += currClass[j].present ? 1 : 0 
    }
        
    return numStudents
}

const getClassNames = async () => {
    try {
        const res = await axios.get(
            baseURL + "/getClassNames"
        );
        return res;
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
};

const getStudents = async (className) => {
    try {
        const res = await axios.get(
            baseURL + "/getStudents?className=" + className
        );
        return res;
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
};

const createClass = async (className, students, props) => {
    let data = {
        "className": className,
        "students": students
    }
    try {
        const res = await axios.post(
            baseURL + "/createClass", data
        );
        props.history.push('/selectClass')
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
};

export { socket, createClass, getClassNames, getStudents, countPresent };