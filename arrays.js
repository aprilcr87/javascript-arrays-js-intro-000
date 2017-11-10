var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  return [element,...array];
}
addElementToBeginningOfArray(chocolateBars, 'Milky way');

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
}
destructivelyAddElementToBeginningOfArray(chocolateBars, 'Milky way');
