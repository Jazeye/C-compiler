function compile(code) {
    // Create a new compiler instance
    const compiler = new Compiler();
  
    // Compile the code
    const result = compiler.compile(code);
  
    // Check for errors
    if (result.errors.length > 0) {
      return result.errors;
    }
  
    // Get the compiled code
    const compiledCode = result.code;
  
    // Run the compiled code
    const output = eval(compiledCode);
  
    // Return the output
    return output;
  }
  
  // Bind the `compile` function to the `submit` event of the form
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Get the code from the form
    const code = document.querySelector('input[name="code"]').value;
  
    // Compile the code
    const errors = compile(code);
  
    // Check for errors
    if (errors.length > 0) {
      // Display the errors
      for (const error of errors) {
        console.error(error);
      }
    } else {
      // Display the output
      console.log(output);
    }
  });
  