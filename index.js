const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/fram", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Error Occured");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
