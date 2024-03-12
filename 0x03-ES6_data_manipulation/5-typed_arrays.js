// Task 5: Get a new ArrayBuffer with an Int8 value at a specific position.
function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  // Is the position is within the range of the buffer
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // Create a dataview for the buffer
  const dataView = new DataView(buffer);
  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);
  return dataView;
}

export default createInt8TypedArray;
