const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");
const connectDB = require("./config/db");

dotenv.config();

app.use(express.json());

// Connect to the database
connectDB();

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});









// mongodb+srv://map:map123@cluster0.vfsrmkw.mongodb.net/