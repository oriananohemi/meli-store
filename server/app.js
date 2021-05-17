const express = require('express');
const cors = require("cors");
const router = require("./network/routes");
const config = require("./config");
const app = express();

app.use(cors());
app.use(express.json());

router(app)

app.listen(config.port, () => {
  console.log(`Server app listening at ${config.host}:${config.port}`)
})