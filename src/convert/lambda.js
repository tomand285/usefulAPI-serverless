"use strict";
const multipart = require('./multipart.js');
const response = require('../response.js');
const convert = require('./index.js');

module.exports.handler = async (event, context, callback) => {
   let request = {
    httpMethod: event.httpMethod,
    headers: event.headers,
    body: event.body,
    lib: {
      multipart: multipart
    }
  };

  new convert(request, (status, body, headers) => {
    response.done(status, {
      body: body,
      headers: headers
    }, callback);
  }).invoke();
};

