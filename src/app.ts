// import the express application and type definition
import express, { Express } from "express";

// Importing morgan
import morgan from "morgan";

// initialize the express application
const app: Express = express();

// Use morgan for HTTP request logging
app.use(morgan("combined"));

// respond to GET request at endpoint "/" with message
app.get("/", (req, res) => {
    res.send("Hello, world!");
})

// export app and server for testing
export default app;