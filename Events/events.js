var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

//addEventListener

function printEvent(el){
	console.log('events' + el + '...1');
};

life.on('start', printEvent);

var hasConforListener = life.emit('start', 'A');
var hasLovedLister = life.emit('start', 'B');

// console.log(hasLovedLister);
// console.log(hasConforListener);

// life.removeListener('start', printEvent);
// life.removeAllListeners();
// life.removeAllListeners('start');

console.log(life.listeners('start').length);

console.log(EventEmitter.listenerCount(life, 'start'));

// life.emit('start', 'AAAAAAAA');

