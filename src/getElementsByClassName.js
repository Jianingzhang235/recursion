// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:var getElementsByClassName = function(className) {

// your code here
var getElementsByClassName = function (className) {

var result = [];

var testFunc = function (doc) {
  // for every element of doc.childNodes
  for (var i = 0; i < doc.childNodes.length; i++) {
    console.log(doc.childNodes);
    // if doc.childNodes at [i] has length
    if (doc.childNodes[i].childNodes.length > 0) {
      // recurse at [i]
      testFunc(doc.childNodes[i]);
    }
    // if doc.childNodes at [i] has element
    if (doc.childNodes[i].getAttribute !== undefined) {
      // if doc.childNodes at [i] classList is === className
      if (doc.childNodes[i].classList.contains(className)) {
        // push doc.childNodes at [i]
        result.unshift(doc.childNodes[i]);
      }
    }
  }
}

testFunc(document);
console.log(result);
return result;
};
