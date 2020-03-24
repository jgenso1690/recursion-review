// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

 // document.body - does it have children -yes? ???
var getElementsByClassName = function(className, element) {
  var elementList = [];
  element = element || document.body
  var target = className;

 // does it have the className?(nodeX)
 console.log(element.className)
 if (element.classList.contains(className)){
    //if yes, push to result array
   elementList.push(element);
 }
  //if childcount > 0 (nodeX)
  if (element.childElementCount > 0){
    //loop through nodeX children and apply to each getElement(nodexchil[i])
    for (var i = 0; i < element.children.length; i++) {
     elementList = elementList.concat(getElementsByClassName(target, element.children[i]));
    }
  }
  // return array with div elements
  console.log(elementList);
  return elementList;
}


