const express = require('express'),
     fs = require('fs');
    path = require('path'),
     bodyParser = require('body-parser'),
     multer = require('multer');
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');
    

    const app = express();

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );
    const adUnitRoutes = require('./routes/adunit.route');
    
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(bodyParser.json());
    

    let storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, DIR);
      },
      filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
      }
  });
  

    
    
    
    app.use(cors());
    
    
    app.use('/adunites', adUnitRoutes);

    

    const port = process.env.PORT || 4000;

    app.listen(port, function () {
     
     console.log('Node.js server is running on port ' + port);
    });