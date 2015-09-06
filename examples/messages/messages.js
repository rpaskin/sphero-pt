"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    sphero: { adaptor: "sphero", port: "/dev/rfcomm0" }
  },

  devices: {
    sphero: { driver: "sphero" }
  },

  work: function(me) {
    after((1).seconds(), function() {
      console.log("Setting up Collision Detection...");
      me.sphero.detectCollisions();
      me.sphero.setRGB(0x00FF00);
    });

    me.sphero.on("update", function(data) {
      console.log("Update event eventName: " + data + " ");
      console.log("Update event args: ");
      console.log(data);
    });

    me.sphero.on("message", function(data) {
      me.sphero.setRGB(0x0000FF);
      console.log("Message:");
      console.log(data);
    });

    me.sphero.on("collision", function(data) {
      me.sphero.setRGB(0xFF0000);
      console.log("Collision:");
      console.log(data);
    });

    me.sphero.on("notification", function(data) {
      me.sphero.setRGB(0xFF0000);
      console.log("Notification:");
      console.log(data);
    });
  }
}).start();
