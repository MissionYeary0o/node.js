var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}
var myEventHandler = function () {
    console.log('Meu controlador de eventos funcionou!');
  }

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);
eventEmitter.on('meuEvento', meuControladorDeEvento);


//Fire the 'scream' event:
eventEmitter.emit('scream');
eventEmitter.emit('meuEvento');
