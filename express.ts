const axios  =  require("axios");

const {createProxyMiddleware} = require("http-proxy-middleware");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = __dirname + '/dist/deezer-dvt/';

const instance = axios.create({
  baseURL: 'https://api.deezer.com'
});

const corsOptions = {
  origin: "http://localhost:4200",
  credentials: true,
};

const proxyConfig =  {
  changeOrigin: true,
  target: 'https://api.deezer.com',
};
const proxyCors = createProxyMiddleware( proxyConfig)

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization, Origin, Accept, Accept-Encoding");
  res.header("Access-Control-Expose-Headers", "server,access-control-allow-headers,access-control-allow-methods,access-control-allow-credentials,access-control-expose-headers,access-control-max-age,p3p,content-encoding,x-host,x-content-type-options,content-length,content-type,date,connection,vary,x-org,x-final-url,access-control-allow-origin");
  // req.header("Access-Control-Allow-Origin", "*");
  // req.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  // req.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
  // req.header("Access-Control-Allow-Credentials", "true")
  // req.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization, Origin, Accept, Accept-Encoding");
  // req.header("Access-Control-Expose-Headers", "server,access-control-allow-headers,access-control-allow-methods,access-control-allow-credentials,access-control-expose-headers,access-control-max-age,p3p,content-encoding,x-host,x-content-type-options,content-length,content-type,date,connection,vary,x-org,x-final-url,access-control-allow-origin");
  next();
});
app.use(express.static(path));
app.use(cors(corsOptions));


//
app.get('/', function (req,res) {

  res.sendFile(path + "index.html");
});


app.use(proxyCors);
// set port, listen for requests
const PORT = 4200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
