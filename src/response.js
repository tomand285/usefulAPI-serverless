//AWS
//function(event, context, callback)

//GCP
//functions(req, res)

//Azure
//function(context,req)

//AWS
//*
module.exports.done = (code, data, callback) => {
  let response = {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(data.body),
  };

  if (data.headers != undefined) {
    response.headers = Object.assign({}, response.headers, data.headers);
  }

  callback(null, response);
};
/*/

//GCP
/*
module.exports.done = (code, data, res) =>{
  res.set("Access-Control-Allow-Origin","*");
  res.set("Access-Control-Allow-Credentials",true);
  for(var key in data.headers){
    res.set(key,data.headers[key]);
  };

  res.status(code).json(data.body);
}

*/
//Azure
/*
module.exports.done = (code, data, context) =>{
  let response = {
    status: code,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(data.body),
  };

  if(data.headers != undefined){
    response.headers = Object.assign({},response.headers,data.headers);
  }

  context.done(null, response);
}
*/