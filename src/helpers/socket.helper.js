import socketIOClient from 'socket.io-client'

const connectSocket = () => {
  // const endpoint = 'http://localhost:9000'
  const endpoint = 'https://wordle-api.brownbutton.io'
  // process.env.REACT_APP_NODE_ENV === 'development'
  //   ? 'http://localhost:9000'
  //   : process.env.REACT_APP_NODE_ENV === 'stage'
  //     ? 'https://stage.baeroad.com'
  //     : 'http://localhost:9000';
  // let token = localStorage.getItem('token');
  console.log('endpoint', endpoint)
  const socket = socketIOClient.connect(endpoint, {
    // query: { token },
    transports: ['websocket'],
    timeout: 2000,
  })
  socket.on('connected', (message) => {
    console.log(`socket connected & authenticated: ${message}`)
  })
  socket.on('exception', function (error) {
    console.log(`socket error: ${error}`)
  })
  socket.on('disconnect', function () {
    console.log('Socket disconnected')
  })
  return socket
}

export default connectSocket
