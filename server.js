const http = require("http");
const app = require("./app");

const port = process.env.PORT || 5000;

//pass "app" as entry point to the application when server runs
const server = http.createServer(app);

server.listen(port);
