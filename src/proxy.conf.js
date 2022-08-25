// var HttpsProxyAgent = require('https-proxy-agent');
let proxyConfig = [{
  context: '/api',
  target: "http://localhost:4200",
  secure: false,
  changeOrigin: true,
  logLevel: "info"

}];
//
// function setupForCorporateProxy(proxyConfig) {
//   var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
//   if (proxyServer) {
//     var agent = new HttpsProxyAgent(proxyServer);
//     console.log('Using corporate proxy server: ' + proxyServer);
//     proxyConfig.forEach(function(entry) {
//       entry.agent = agent;
//     });
//   }
//   return proxyConfig;
// }
//
// module.exports = setupForCorporateProxy(proxyConfig);

const PROXY_CONFIG = {
  "": {
    "target": "http://localhost:4200",
    "secure": false,
    "bypass": function (req, res, proxyOptions) {
      if (req.headers.accept.indexOf("html") !== -1) {
        console.log("Skipping proxy for browser request.", res, req);
        return "/index.html";
      }
      console.log("Skipping proxy for browser request.", res, req);
      req.headers["X-Custom-Header"] = "yes";
      req.headers["Access-Control-Allow-Origin"] = "http://localhost:4200"
    }
  }
}

module.exports = PROXY_CONFIG;
