//callback

function step1(value, callback) {
    callback(value + 10, false); // The callback is called with the result and error flag
  }
  
  step1(5, function(result, error) {
    if (error) {
      console.log("An error occurred");        
    } else {
      console.log("Result: " + result); // If no error, print the result
    }
  });

  //15 

//Promise 


function step1(value) {
    return new Promise((resolve, reject) => {
      // Simulating the callback behavior
      resolve(value + 10); // Resolving the promise with the result
    });
  }
 

  //Promise { 15}

  
  step1(5)
    .then(result => {
      console.log("Result: " + result); // If promise is resolved, print the result
    })
    .catch(error => {
      console.log("An error occurred"); // If promise is rejected, handle error
    });

  //15

// Async - Await 

async function step1(value) {
    return new Promise((resolve, reject) => {
      resolve(value + 10); // Resolving the promise with the result
    });
  }
  
  async function run() {
    try {
      const result = await step1(5); // Await the result of step1 //15
      console.log("Result: " + result); // Print the result
    } catch (error) {
      console.log("An error occurred"); // If promise is rejected, handle error
    }
  }
  
  run();

  //15 