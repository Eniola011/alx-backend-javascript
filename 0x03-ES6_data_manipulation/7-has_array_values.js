// return a boolean if all the elements in the array exist within the set.
function hasValuesFromArray(set, array) {
  // we loop through the array
  for (const element of array) {
    // Check if the set does not contain the current element
    if (!set.has(element)) {
      return false; // If any element is not found in the set, return false
    }
  }
  return true; // If all elements are found in the set, return true
}

export default hasValuesFromArray;
