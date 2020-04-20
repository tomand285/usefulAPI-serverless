'use strict';
var global = {};
class convert {
    constructor(request, response) {
        global.request = request;
        global.response = response;
    }

    invoke() {
      let body = global.request.body;
      let decodedImage = Buffer.from(body, 'base64');
      global.request.body = decodedImage.toString('latin1');

      let data = global.request.lib.multipart.parse(global.request, true);
      data.image.base64 = data.image.content.toString("base64");
      delete data.image.type;
      delete data.image.content;
      return global.response(200, data);
    }
}

module.exports = convert;