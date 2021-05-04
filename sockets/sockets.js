const {io} = require('../index')

//mensaje de sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    client.on('disconnect', () => {
        console.log('Cliente desconectado') });
    client.on('mensaje', (men) => {
        io.emit('mensaje', {admin: 'Nuevo mensaje'})
          console.log('Mensaje!!!',men) });
  });