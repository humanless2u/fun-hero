const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/hello", require("./controller/helloController"));
app.use("/hero", require("./controller/heroController"));

app.listen(PORT, () => {
  console.log(`The Fun-Hero API is runnig at ${PORT}`);
});
