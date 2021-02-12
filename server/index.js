const iohook = require('iohook');
const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const net = require('net');
const socketServer = net.createServer();
socketServer.listen(3123, 'localhost');

let powerups = {
  charge: false,
  ice: false,
  wave: false,
  spazer: false,
  plasma: false,
  varia: false,
  gravity: false,
  morph: false,
  bombs: false,
  spring: false,
  screw: false,
  hijump: false,
  space: false,
  speed: false
};

socketServer.on('connection', (socket) => {
  console.log('connection on socketserver');
  socket.on('data', (data) => {
    if (data.toString().slice(0, 7) === 'bizhawk') {
      powerups.charge = data.toString().includes('charge');
      powerups.ice = data.toString().includes('ice');
      powerups.wave = data.toString().includes('wave');
      powerups.spazer = data.toString().includes('spazer');
      powerups.plasma = data.toString().includes('plasma');
      powerups.varia = data.toString().includes('varia');
      powerups.gravity = data.toString().includes('gravity');
      powerups.morph = data.toString().includes('morph');
      powerups.bombs = data.toString().includes('bombs');
      powerups.spring = data.toString().includes('spring');
      powerups.screw = data.toString().includes('screw');
      powerups.hijump = data.toString().includes('hijump');
      powerups.space = data.toString().includes('space');
      powerups.speed = data.toString().includes('speed');
      io.emit('metroid update', powerups);
    }
  });
});

setInterval(() => {
  io.emit('metroid update', powerups);
}, 10000);

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

async function start() {
  // Init ioHook
  iohook.start();
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  await nuxt.ready();
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  iohook.on('keydown', (event) => {
    io.emit('keydown', event);
  });

  iohook.on('keyup', (event) => {
    io.emit('keyup', event);
  });

  io.on('connect', function(socket) {
    console.log('user connected');
    socket.on('message', function() {
      console.log('user message');
    });
  });
  io.on('connection', function(socket) {
    console.log('user connected');
    socket.on('message', function() {
      console.log('user message');
    });
  });

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  http.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();
