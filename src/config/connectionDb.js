
//server host name
const HOST = "localhost";

//remote database name
const DATABASE = "Cluster0";

//database credentials
const USERNAME = "krishna";
const PASSWORD = "Project23%!";

//default app port
const PORT = 3333;

//default connection url
const DEFAULT_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.koprp.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;
// mongodb+srv://krishna:<password>@cluster0.koprp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongoose options for connection
const MONGOOSE_OPTIONS = {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    useNewUrlParser:true
}

module.exports = {HOST, PORT, DATABASE, USERNAME, PASSWORD, DEFAULT_CONNECTION_STRING, MONGOOSE_OPTIONS}