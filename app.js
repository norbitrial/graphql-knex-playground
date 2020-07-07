var config = {
  client: "sqlite3",
  connection: {
    filename: "./book.sqlite",
  },
};

var knex = require("knex")(config);

console.log("Done.");
