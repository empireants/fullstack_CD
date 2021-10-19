require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const productRoutes = require('./routes/product.routes');
require("./config/mongoose.config")();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

productRoutes(app);


app.listen(PORT, () => console.log(`1/2 El servidor está en PORT: ${PORT}`));