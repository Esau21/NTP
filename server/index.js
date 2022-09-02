const express = require('express');
const cors = require('cors');
const moongose = require('mongoose');
const userRoutes = require("./routes/userRoutes")

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes)

moongose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB is connceted");
}).catch((err) => {
    console.log(err.message);
});

const server = app.listen(process.env.PORT, ()=> {
    console.log(`The server is runnig in the port ${process.env.PORT}`);
});