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

function addElementToTheEndOfArray(array, element){
  return [array,...element];
}
addElementToEndOfArray(chocolateBars, 'Milky way');
