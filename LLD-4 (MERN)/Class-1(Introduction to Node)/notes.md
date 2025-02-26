---
title: Agenda of the lecture
description: What will be covered in the topic?
duration: 120
card_type: cue_card
---

## Agenda
* curiculumn
* Exploring different node inbuilt modules
* Understanding server side development with node (http)
* Understanding http  module with req and res
* Serving static html via the server
So let's start.

---
title: Curiculumn 
description: Breakdown of each class in Projects module 
duration: 780
card_type: cue_card
---

## How are we going to learn backend  development 
In total there will be 16 classes in the module they will as follows
 1. Intro to nodejs and backend development  
 2. Intro to API, express and CRUD
 3. Intro to Mongodb and CRUD operation
 4. Rest API ,Imp API features and integration BMS to frontend 
 5. Data validation, aliasing, pre-post hook 
 6. Login Signup,Hashing Password
 7. Authentication,JWT and cookies 
* cookies 
* Authentication ,authorization and identification 
* JWT algorithm 
 8. Update,reset,forgot Password & sending email
* Sending Email using sendgrid and Nodemailer
* Integrating email sent on forget password
9. Authorization , conditional flow of data , Admin dashboard  
 10. Data Modelling and Theatre API and MVC 
* converting the code into MVC architecture
* Build the Theater API
 11. Payment Gateway Integration and shows API
  12.  security.
* Security
    * Guidelines for security policy of your backend
* Types of attacks
    * Denial of service attack
    * XSS
    * NoSQL injection
* Ways to secure
    * Password hashing
    * Adding rate limiter
    * Adding required headers 

 13. Testing, CORS and Deployment 
 14. Websockets
* usecase of realtime applications
* How websocket are a better at real time communication
* Process of upgradation from HTTP -> websockets
* Websockets using node js 
* Project : Chat application
 15. Backend Interview Prep-1
* Types of modules in nodejs
* Nodejs modules
* Nodejs streams	
* Nodejs child process
 16. Backend Interview Prep-2
*  first principles of Nodejs
    * event driven 
	* single threaded
	* asynchronous 
* Understanding architecture of nodejs -> 
* Identifying things that are async and those are sync 

---
title: Intro to Nodejs and Server side development 
description: 
duration: 2100
card_type: cue_card
---

## Nodejs
Node.js is an open-source, server-side JavaScript runtime environment that allows you to run JavaScript code on the server. It was created by Ryan Dahl and first released in 2009. Node.js is built on the V8 JavaScript engine, which is also used in Google Chrome, and it provides an event-driven, non-blocking I/O model that makes it well-suited for building scalable and high-performance network applications.
## Why use nodejs for web server
Node.js is a popular choice for web servers, especially in scenarios involving heavy I/O operations and small server requirements. Here's why Node.js is a suitable option for such use cases:

1. **Non-Blocking I/O Model:** Node.js is designed around a non-blocking, event-driven architecture. This means it can efficiently handle multiple I/O operations concurrently without blocking the execution of other tasks. When performing heavy I/O operations, such as reading and writing files, making network requests, or interacting with databases, Node.js can initiate these operations and continue executing other code while waiting for the I/O operations to complete. This asynchronous approach is highly advantageous for scenarios with many concurrent I/O tasks.
2. **Scalability:** In situations involving heavy I/O, it's common for multiple clients to make simultaneous requests to the server. Node.js's non-blocking model allows it to handle a large number of concurrent connections efficiently, making it a suitable choice for scalable applications. It can process incoming requests as soon as they arrive, rather than waiting for each request to complete before moving on to the next one.
3. **Low Overhead:** Node.js has a relatively small memory footprint compared to some other web server technologies. This makes it well-suited for small server applications where resource utilization needs to be efficient. You can run multiple Node.js instances on a single server without consuming excessive system resources.
5. **Rich Ecosystem:** Node.js has a vast ecosystem of libraries and modules available through npm, which can simplify the development of web servers for various purposes. Developers can find packages to handle specific I/O tasks, such as file uploads, database connections, and HTTP requests, making it easier to build web servers tailored to their needs.

---
title: Internal Modules of nodejs Part-1
description: file system module
duration: 120
card_type: cue_card
---

## Fs module in depth 
The `fs` module in Node.js stands for "File System," and it provides a way to work with the file system on your computer or server. It allows you to read from and write to files, manipulate directories, perform file operations, and more. Let's explore some of the key functionalities of the `fs` module in-depth:

**1. Reading Files:**

The `fs` module provides methods for reading the contents of files. The most commonly used method for this purpose is `fs.readFile()`:

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

In this example, `readFile()` reads the content of 'example.txt' and then calls the provided callback function with any errors encountered and the file's contents.

**2. Writing Files:**

You can also use the `fs` module to write data to files using methods like `fs.writeFile()`:

```javascript
const fs = require('fs');

const content = 'Hello, world!';

fs.writeFile('example.txt', content, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been written.');
});
```

Here, `writeFile()` creates or overwrites 'example.txt' with the provided content.

**3. Synchronous vs. Asynchronous Operations:**

Most `fs` module functions come in both synchronous and asynchronous versions. The asynchronous versions (e.g., `fs.readFile()`) allow non-blocking file operations, while synchronous versions (e.g., `fs.readFileSync()`) block the Node.js event loop until the operation is complete.

Asynchronous methods are typically preferred in Node.js to maintain the application's responsiveness.

**4. Working with Directories:**

You can perform operations on directories using methods like `fs.mkdir()`, `fs.rmdir()`, `fs.readdir()`, and `fs.stat()`. These methods allow you to create, remove, list, and get information about directories, respectively.

**5. Renaming and Deleting Files:**

`fs.rename()` can be used to rename files, and `fs.unlink()` to delete them:

```javascript
fs.rename('old-file.txt', 'new-file.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been renamed.');
});

fs.unlink('file-to-delete.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File has been deleted.');
});
```


**Creating a Directory:**

To create a directory, you can use the `fs.mkdir()` method. Here's an example:

```javascript
const fs = require('fs');

const directoryName = 'my-directory';

fs.mkdir(directoryName, (err) => {
  if (err) {
    console.error(`Error creating directory: ${err}`);
  } else {
    console.log(`Directory "${directoryName}" created successfully.`);
  }
});
```

In this code, `fs.mkdir()` is used to create a directory named "my-directory." The callback function is called when the directory creation is complete. If an error occurs, it will be logged.

**Deleting a Directory:**

To delete a directory, you can use the `fs.rmdir()` method. Here's an example:

```javascript
const fs = require('fs');

const directoryName = 'my-directory';

fs.rmdir(directoryName, { recursive: true }, (err) => {
  if (err) {
    console.error(`Error deleting directory: ${err}`);
  } else {
    console.log(`Directory "${directoryName}" deleted successfully.`);
  }
});
```
In this code, `fs.rmdir()` is used to delete the "my-directory" directory. The `{ recursive: true }` option is provided to ensure that the directory and its contents are deleted recursively. The callback function is called when the deletion is complete, and any errors are logged.

Make sure to handle errors appropriately when creating or deleting directories in your Node.js applications to ensure that your code is robust and reliable.

You can check whether a directory or file exists in Node.js using the `fs` module. Here's how you can do it:

**Checking if a Directory Exists:**

To check if a directory exists, you can use the `fs.existsSync()` method. Here's an example:

```javascript
const fs = require('fs');

const directoryPath = '/path/to/your/directory';

if (fs.existsSync(directoryPath)) {
  console.log(`The directory "${directoryPath}" exists.`);
} else {
  console.log(`The directory "${directoryPath}" does not exist.`);
}
```

Replace `/path/to/your/directory` with the actual path to the directory you want to check. `fs.existsSync()` returns `true` if the directory exists and `false` if it doesn't.

---
title: Internal Modules of nodejs Part-2
description: path module
duration: 120
card_type: cue_card
---
## Path Module
The `path` module in Node.js provides utilities for working with file and directory paths. It's an essential module when dealing with file system operations and path manipulation in your Node.js applications. Here are some important functions and concepts from the `path` module:

1. **`path.join([...paths])`**: This method joins multiple path segments into a single path string, taking care of platform-specific path separators (e.g., backslashes on Windows and forward slashes on Unix-like systems).

   ```javascript
   const path = require('path');
   const fullPath = path.join('folder', 'subfolder', 'file.txt');
   ```
2. **`path.resolve([...paths])`**: Resolves an absolute path from multiple path segments, starting from the root directory. It can be helpful for creating absolute paths based on relative ones.

   ```javascript
   const path = require('path');
   const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
   ```
3. **`path.basename(path[, ext])`**: Returns the base filename of a path, optionally removing a file extension if provided.

   ```javascript
   const path = require('path');
   const fileName = path.basename('/path/to/file.txt');
   ```

4. **`path.dirname(path)`**: Returns the directory name of a path.

   ```javascript
   const path = require('path');
   const dirName = path.dirname('/path/to/file.txt');
   ```


The `path` module is particularly useful when working on cross-platform applications or when dealing with file and directory paths dynamically in your Node.js code. It ensures that your path manipulation is consistent and compatible with various operating systems.


---
title: Server creation with http module
description: 
duration: 2100
card_type: cue_card
---
## Server side development

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/057/500/original/upload_af7747181e71dae0ad309735bcc4284c.png?1700553526)

Usually when a user visits a website ->to get some data. It makes the http request by clicking on a button or by doing some other action . A request will be send to a backend server and then the server will search the content related to the request and return the resp. 

On a Higher level
**Server** : 
* It is used to serv html document , assets like images and data also.
* It is also used to provide authentication , autorization to the client  

## Server-side development using the `http` module
In nodejs we have   the `http` module in Node.js that allows you to create a basic HTTP server to handle incoming requests and send responses. Here's a step-by-step guide to building a simple HTTP server using the `http` module:

1. **Import the `http` Module:**
   Start by requiring the `http` module in your Node.js script:

   ```javascript
   const http = require('http');
   ```

2. **Create the HTTP Server:**
   You can create an HTTP server using the `http.createServer()` method. This method takes a callback function that will be invoked for each incoming HTTP request.

   ```javascript
   const server = http.createServer((req, res) => {
     // Handle incoming requests here
   });
   ```

3. **Handle Incoming Requests:**
   Inside the callback function, you can handle incoming HTTP requests. The `req` object represents the request, and the `res` object is used to send the response back to the client.

   ```javascript
   const server = http.createServer((req, res) => {
     // Set response header
     res.setHeader('Content-Type', 'text/plain');
     
     // Write response content
     res.write('Hello, World!');
     
     // End the response
     res.end();
   });
   ```

   In this example, we set the `Content-Type` header to `'text/plain'`, write "Hello, World!" as the response content, and then end the response.

4. **Specify the Listening Port and Host:**
   You need to specify the port and host (usually `'localhost'` for development) on which your server will listen for incoming requests:

   ```javascript
   const port = 3000;
   const host = 'localhost';
   
   server.listen(port, host, () => {
     console.log(`Server is listening on http://${host}:${port}`);
   });
   ```
5. **Start the Server:**
   Finally, you can start the server by calling the `server.listen()` method. This will start listening for incoming HTTP requests on the specified port and host.

6. **Test Your Server:**
   Run your Node.js script, and your server will be accessible at the specified URL (e.g., http://localhost:3000). You can use a web browser or tools like cURL or Postman to send HTTP requests to your server.

Here's the complete code for a basic HTTP server:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Set response header
  res.setHeader('Content-Type', 'text/plain');
  
  // Write response content
  res.write('Hello, World!');
  
  // End the response
  res.end();
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
```

This simple HTTP server will respond with "Hello, World!" to any incoming request. You can expand upon this foundation to handle different types of requests and serve dynamic content based on the requested URL or route.

You can modify the code to send an HTML response containing an `<h1>` tag. Here's an example of a Node.js HTTP server that responds with an HTML `<h1>` tag:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Set response header with Content-Type as text/html
  res.setHeader('Content-Type', 'text/html');
  
  // Write HTML response
  res.write('<html><head><title>Node.js HTTP Server</title></head><body>');
  res.write('<h1>Hello, World!</h1>');
  res.write('</body></html>');
  
  // End the response
  res.end();
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
```

In this code:

- We set the `Content-Type` header to `'text/html'` to indicate that the response will contain HTML content.
- We use `res.write()` to send the HTML content, which includes an `<h1>` tag with the text "Hello, World!".
- The response is ended with `res.end()`.

Now, when you access the server in your web browser, you will receive an HTML response with the specified `<h1>` tag. This demonstrates how you can send HTML content as a response using the Node.js `http` module.
