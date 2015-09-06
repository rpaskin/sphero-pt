"use strict";

GLOBAL.Robo = require("../../robo-pt");

Robo.configurar("/dev/tty.Sphero-PYR-AMP-SPP", 5); // nome da porta, X segundos

Robo.agir(function(me) {
  me.sphero.setRGB(Math.floor(Math.random() * 100000));
});

