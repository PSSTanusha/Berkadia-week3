var events = require('events');
var em = new events.EventEmitter();
em.on('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});
em.emit('FirstEvent', 'This is my first Node.js event emitter example.');

output:
C:\Users\tanus\.vscode\extensions>node eventemitter.js
First subscriber: This is my first Node.js event emitter example.
