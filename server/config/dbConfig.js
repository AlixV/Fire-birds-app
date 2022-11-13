const mongoose = require("mongoose");

mongoose.mongoose //
  .connect("mongodb://127.0.0.1/firebird-fs-app")
  .then((db) => console.log("--- DB connected !"))
  .catch((e) => console.log(e));

// IMPORTANT :
//  .connect("mongodb://localhost/firebird-fs-app")
//  ----> Remplacer localhost par 127.0.0.1
