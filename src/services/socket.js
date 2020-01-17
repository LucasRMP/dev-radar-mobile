import socketio from 'socket.io-client';

const socket = socketio(
  'https://3333-da120803-de21-40fc-aff5-658526d4f21a.ws-us02.gitpod.io',
  {
    autoConnect: false,
  }
);

function connect(latitude, longitude, techs) {
  socket.io.opts.query = { latitude, longitude, techs };
  socket.connect();
  socket.on('message', text => console.log(text));
}

function subscribeToNewDevs(subscribeFunction) {
  socket.on('new-dev', subscribeFunction);
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, subscribeToNewDevs, disconnect };
