var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  return [element,...array];
}
addElementToBeginningOfArray(chocolateBars, 'Milky way');

function destructivelyAddElementToBeginningOfArray(array, element){
 array[0] = element;
 return array;
}
destructivelyAddElementToBeginningOfArray(chocolateBars, 'Milky way');
