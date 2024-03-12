// Task 2: get students location through filter
function getStudentsByLocation(students, city) {
  if (!Array.isArray(students) || typeof city !== 'string') {
    return [];
  }
  return students.filter((student) => student.location === city);
}

export default getStudentsByLocation;
