// Simulated uploadPhoto function
function uploadPhoto() {
  return new Promise((resolve) => {
    // Simulated delay for asynchronous operation
    setTimeout(() => {
      resolve({
        status: 200,
        body: 'photo-profile-1'
      });
    }, 1000); // Simulating 1 second delay
  });
}

// Simulated createUser function
function createUser() {
  return new Promise((resolve) => {
    // Simulated delay for asynchronous operation
    setTimeout(() => {
      resolve({
        firstName: 'Guillaume',
        lastName: 'Salva'
      });
    }, 1500); // Simulating 1.5 seconds delay
  });
}

export { uploadPhoto, createUser };
