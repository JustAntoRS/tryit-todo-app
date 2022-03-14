import App from "./app";
import * as http from "http";

const port = 3080;

App.set("port", port);
const server = http.createServer(App);
server.listen(port);

server.on("listening", function(): void{
    console.log("Server ready and listening!")
});

module.exports = App;