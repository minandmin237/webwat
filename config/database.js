import mysql from "mysql";

const connection = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "esZzOh3dzLvejUup",
  database: "webwat"
});
export default connection;
