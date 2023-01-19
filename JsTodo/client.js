const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const client = new todoPackage.Todo("localhost:40000", grpc.credentials.createInsecure());

client.createTodo({
    "id": -1,
    "text": "Do stuff"
}, (err, response) => {
    //console.log("Recive from server " + JSON.stringify(response));
});

client.readTodo({}, (err, response) => {
    console.log("Reviced Todos from the server" + JSON.stringify(response));
})