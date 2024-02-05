const express = require("express");
const volleyball = require("volleyball");
const cors = require("cors");
require('dotenv').config()


const mongoose = require("mongoose");
const { default: Chocolate } = require("./model/chocolateModel");
const { default: chocolatesRouter } = require("./routes/chocolatesRoutes");

const app = express();
const port = process.env.PORT || 3000;

main().catch(error => console.log(error))
async function main(){
   await mongoose.connect(process.env.MONGO_URI);
    console.log(`🔥 Database connected successfully 🔥`); 
}

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors());
app.use(volleyball)

app.use("/",chocolatesRouter);

app.listen(port, () => {
    console.log("🛠️  Server Open 🛠️")
});