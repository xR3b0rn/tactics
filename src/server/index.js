const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const db = require('./services/db');
const app = express();

(async () => {
  await db.sync();

  app.use(express.static(config.path.static));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  require('./routes')(app);

  app.listen(config.port, () => {
    console.info(`Server running http://localhost:${config.port}`);
  });
})();
