const fs = require("fs");
const router = (req, res) => {
  const url = req.url;
  const method = req.method;
  const body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
    
  });
  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    fs.writeFileSync("message.txt", parsedBody);
    console.log(parsedBody);
  });
  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(fs.readFileSync("index.html").toString());
    res.end("<h1>Welcome to the Home Page</h1>");
  } else if (url === "/message" && method === "POST") {
    res.writeHead(201, { "Content-Type": "text/html" });
    res.end("<h1>message received</h1>");
  }
};

module.exports = router;
