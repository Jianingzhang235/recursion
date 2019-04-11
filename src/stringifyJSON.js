// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // your code goes here
   var output = "";
  if(typeof obj === "string") {
    return '"' + obj + '"';
  }
  if(typeof obj === "number" || typeof obj === "boolean") {
    return String(obj);
  }
  if(obj === null) {
    return String(obj);
  }

  if(!obj) {
    return undifined;
  }
  //NaN;

  // if array
  if (Array.isArray(obj)) {
    output = '[';
    obj.forEach(function (i) {
      output += stringifyJSON(i);
      output += ',';
    });
    if (output[output.length - 1] === ',') {
      output = output.slice(0, -1);
    }
    output += ']';
    // if object
  } else if(typeof obj === "object") {
    output = "{";
    for(var key in obj) {
         if (obj[key] !== undefined && typeof obj[key] !== 'function' && typeof obj[key] !== 'symbol') {
        output += '"' + key + '":';
        output = output + stringifyJSON(obj[key]) + ',';
      }
    }
    if (output.slice(-1) === ',') {
      output = output.slice(0, -1)
    }
    output += '}'
  }


return output;
};
