function cleanSet(set, startString) {
  // Create an array to store filtered values
  const filteredValues = [];
  // Iterate over the set's values
  for (const value of set) {
    // Check if the value starts with the provided startString
    if (value.startsWith(startString)) {
      // If it does, append the rest of the string to the filtered values
      filteredValues.push(value.substring(startString.length));
    }
  }
  // Join the filtered values with "-"
  return filteredValues.join('-');
}

export default cleanSet;
