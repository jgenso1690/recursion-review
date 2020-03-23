// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// check for:
// type of string
// type of number
// typeof falsey
// typeoof truthy
// typeof object
// typeof array
// typeof function
// typeof nested array, object
// typeof undefined or null

var stringifyJSON = function(obj) {


  if (typeof obj === "number"){
    return "obj";
  }

  if (typeof obj === true){
    return "true";
  }

  if (typeof obj === false){
    return "false"
  }

  if (typeof obj === undefined || typeof obj === null){
    return "null";
  }

  if (Array.isArray(obj)){
    var string = "[";
    //loop
    for ( var i = 0; i< obj.length; i++){
      if ( i !== obj.length-1){
        string+= stringifyJSON(obj[i]) + ",";
      }else{
        string+= stringifyJSON(obj[i]);
      }
    }
    return string + "]";
  }

  if (typeof obj === "object") {
    // an array of all the keys
    var objKeys = Object.keys(obj);
    var string = '{'
    // loop through keys
    for (var key in obj) {
      if (typeof key === 'undefined' || typeof key === 'functions'){
        return "{}";
      }
      if (!objKeys[objKeys.length-1]) {
      string += key + ":" + stringifyJSON(obj[key]) + ",";
      } else {
        string += key + ":" + stringifyJSON(obj[key]);
      }
    }
    return string + "}";
  }
};
