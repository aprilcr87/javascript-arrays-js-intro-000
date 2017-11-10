var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  return [element,...array];
}
addElementToBeginningOfArray(chocolateBars, 'Milky way');

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
destructivelyAddElementToBeginningOfArray(chocolateBars, 'Milky way');

function addElementToEndOfArray(array, element){
  return [...array, element];
}
addElementToEndOfArray(chocolateBars, 'Milky way');

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
destructivelyAddElementToEndOfArray(chocolateBars, 'Milky way');

function accessElementInArray(array, index){
  return array [index];
}
accessElementInArray(chocolateBars, [2]);

function destructivelyRemoveElementFromBeginningOfArray(array){
  array = array.shift(2, 3);
  return array;
}
destructivelyRemoveElementFromBeginningOfArray(chocolateBars);

