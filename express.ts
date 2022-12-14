const helmet = require('helmet');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const contentSecurityPolicy = require('helmet-csp');

const view = __dirname + '/dist/deezer-dvt/';

const corsOptions = {
  origin: '*',
  credentials: false,
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
};

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  contentSecurityPolicy({
    useDefaults: true,
    directives: {
      defaultSrc: ["'unsafe-inline'"],
      scriptSrc: ["'self'"],
    },
    reportOnly: false,
  })
);
app.use('/api', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET , PUT , POST , DELETE',
    'OPTIONS'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Authorization, Origin, Accept, Accept-Encoding'
  );

  next();
});

const proxyConfig = {
  changeOrigin: true,
  target: 'https://api.deezer.com',
  pathRewrite: {
    [`^/api`]: '/',
  },
};

const proxyCors = createProxyMiddleware('/', proxyConfig);

app.use(cors(corsOptions));
app.use(proxyCors);
app.use(helmet.contentSecurityPolicy.getDefaultDirectives);
app.use(express.static(view));
router.get('*', (req, res) => {
  res.sendFile(view + 'index.html');
});
// set port, listen for requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = router;
