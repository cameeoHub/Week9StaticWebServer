require("./db/connection");
const express = require("express");
const userRouter = require("./user/routes");
const app = express();

app.use(express.json());
app.use(userRouter);

app.listen(5001, () => {
    console.log("Listening on port 5001");
});