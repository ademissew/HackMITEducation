import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');

function getWeather() {
    socket.emit('getWeather', null);
}
export { socket, getWeather };