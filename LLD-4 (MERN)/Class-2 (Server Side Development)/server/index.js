const http = require("http");
const fs = require("fs");
const urlPack = require('url')

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.url} New Request Received\n`;

  const parsedUrl = urlPack.parse(req.url , true);
  console.log(parsedUrl)

  fs.appendFile("log.txt", log, (err, data) => {
    console.log("log updated");
  });

  console.log("New Request Recieved");

  switch (parsedUrl.pathname) {
    case "/":
      res.end("This is Home Page");
      break;
    case "/about":
      res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
        }
        header {
            text-align: center;
        }
        section {
            margin-bottom: 20px;
            background: white;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        button {
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <header>
        <h1>About Us</h1>
    </header>
    <section>
        <h2>Who We Are</h2>
        <p>We are a passionate team dedicated to providing the best solutions for our customers. Our mission is to innovate and deliver quality services.</p>
    </section>
    <section>
        <h2>Our Vision</h2>
        <p>Our vision is to create impactful and sustainable solutions that make a difference in the industry.</p>
    </section>
    <section>
        <h2>Contact Us</h2>
        <p>Email: contact@company.com</p>
        <p>Phone: +123 456 7890</p>
    </section>
    <button onclick="alert('Thank you for visiting!')">Click Me</button>
</body>
</html>`);
      break;
    case "/contact":
      let userName = parsedUrl.query.name
      res.end(`hello ${userName}`);
      break;
    default:
      res.end("404 Not Found");
      break;
  }
});

myServer.listen(8000, () => {
  console.log("Server Started");
});
