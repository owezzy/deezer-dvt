/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const axios = require('axios');
const cors = require('cors');
// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});
app.options('*', cors());

/**********************
 * Example get method *
 **********************/
const ep_artist = (id) => `https://api.deezer.com/artist/${id}/top?index=0&limit=5`;// artists top5
const ep_search = (artist) => `https://api.deezer.com/search/artist?q=${artist}&limit=5&index=0`;//&index=0&limit=200&output=json
const ep_searchex = (query) => `https://api.deezer.com/search/artist?q=${query}`;// search artists
const ep_album = (id) => `https://api.deezer.com/artist/${id}/albums`; // artist albums
const ep_albums = (id) => `https://api.deezer.com/search/album?q=${id}`;
const ep_albumsex = (id) => `https://api.deezer.com/search?q=artist:"${id}"`;

app.get('/artists/:artist', function(req, res) {
  // Add your code here
  const artist = req.params.artist;
  if(artist && artist.length > 0) {
    axios.get(ep_searchex(artist)).then(ax_res => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader("Access-Control-Allow-Headers", "*");
      res.json(ax_res.data);
    });
  }
  // res.json({success: 'get call succeed!', url: req.url});
});
//
// app.get('/artists/:id', function(req, res) {
//   // Add your code here
//   const id = req.params.id;
//   if(id && id.length > 0) {
//     axios.get(ep_artist(id)).then(ax_res => {
//       res.setHeader("Access-Control-Allow-Origin", "*");
//       res.setHeader('Access-Control-Allow-Methods', '*');
//       res.setHeader("Access-Control-Allow-Headers", "*");
//       res.send(ax_res.data);
//     });
//   }
//   res.json({success: 'get call succeed!', url: req.url});
// });


const set_get = (ep_local, ep_origin) => {
  app.get(ep_local, (ex_req, ex_res, next) => {
    const id = ex_req.params.id;
    if(id && id.length > 0) {
      axios.get(ep_origin(id)).then(ax_res => {
        ex_res.setHeader("Access-Control-Allow-Origin", "*");
        ex_res.setHeader('Access-Control-Allow-Methods', '*');
        ex_res.setHeader("Access-Control-Allow-Headers", "*");
        ex_res.send(ax_res.data);
      });
    }
    ex_res.json({success: 'get call succeed!', url: req.url});

  });

}

// set_get("/albums/:id", ep_albumsex);
set_get("/albums/:id", ep_album);


/****************************
* Example post method *
****************************/

app.post('/artists', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/artists/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/artists', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/artists/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/artists', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/artists/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
