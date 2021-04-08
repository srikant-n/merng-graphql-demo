require("dotenv").config();
const path = require('path');
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

// Client
app.use(express.static(path.join(__dirname, 'build')));

mongoose.connect(process.env.DB_PATH, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  err ? console.log(err) : console.log("DB Connected");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
  })
);

app.listen(port, () => {
  console.log(`Listener on port ${port}`);
});
