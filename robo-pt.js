var Cylon = require("cylon");

module.exports = {
  agir: function (doWhat) {
		Cylon.robot({
		    connections: {
		      sphero: { adaptor: "sphero", port: "/dev/tty.Sphero-PYR-AMP-SPP" }
		    },

		    devices: {
		      sphero: { driver: "sphero" }
		    },

		    work: function(me) {
		      every((Robo.secs).second(), function() {
			    	doWhat(me);
			    })
		    },

		    work_: function(me) {
		      every((1).second(), function() {
		        me.sphero.setRGB(Math.floor(Math.random() * 100000));
		      });
		    }
		  }).start();
  },

  configurar: function (porta, secs) {
  	this.porta = porta;
  	this.secs = secs;
  }
};

