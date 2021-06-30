const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


const PORT = 4000;
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({limit: "100mb"}));
app.use(bodyParser.urlencoded({limit: "100mb", extended: true, parameterLimit: 500000}));

mongoose.connect("mongodb+srv://admin:admin@cluster1.4y8vp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true});
const connection = mongoose.connection;


connection.once('open', function () {
    console.log('mongoDB database Connections extablished Successfully')
});

//start the server using express
app.listen(PORT, function () {
    console.log("Server is running on PORT: " + PORT);
});

const adminRoute = require('./routes/admin.serve.route');
const workshopRoute = require('./routes/workshop.serve.route');
const researchRoute = require('./routes/researcher.serve.route');
const wsPaymentRoute = require('./routes/wsPayment.serve.route');
const rpPaymentRoute = require('./routes/rpPayment.serve.route');


////////////////////////////////////////////////////////////////////
app.use('/api/admin', adminRoute);
app.use('/api/workshop', workshopRoute);
app.use('/api/research', researchRoute);
app.use('/api/workshop/payment', wsPaymentRoute);
app.use('/api/research/payment', rpPaymentRoute);
