var config = {
  client: "sqlite3",
  connection: {
    filename: "./book.sqlite",
  },
  useNullAsDefault: true,
};

var knex = require("knex")(config);

console.log("Done.");
