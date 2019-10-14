'use strict';

const startServer = require('./server');

//const port = parseInt(argv.port || argv.p || 8080)
var port = parseInt(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 8080);


startServer(port, (err) => {
	if (err) {
		console.error(err)
		process.exit(1)
	} else console.info(`listening on ${port}`)
});
