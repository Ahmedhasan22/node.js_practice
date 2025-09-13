const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const router = require("./routes");

const PORT = 3000;
const HOST = "localhost";

const server = http.createServer(router);
server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});
