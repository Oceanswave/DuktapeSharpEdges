var duktape = require('duktape');
var edge = require('edge');

//Edge.js lifted .net code that concats a string.
var helloFunction = function (name) {
    return edge.func(function () { /*
    async (input) => { 
        return ".NET Welcomes " + input.ToString(); 
    }
*/
    })(name, true);
};

//Duktape script to execute
var script = " \
  function helloFun(parameterString) { \
    return { \
      value: hello(parameterString), \
      extra: 'bye ' + parameterString \
    }; \
  }";

//Api to expose to the Duktape script -- note that we're exposing the function that runs the .net script.
var apiObject = {
    hello: helloFunction
};

duktape.run("helloFun", "world", script, apiObject, function (error, ret) {
    if (error) {
        console.log("got error: " + ret);
    } else {
        var retVal = JSON.parse(ret);
        console.log(retVal.value);
        console.log(retVal.extra);
    }
});