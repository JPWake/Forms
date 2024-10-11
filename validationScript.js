  // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      let text = document.getElementById('inputField');
      let form = document.getElementById('myForm');

      // Regular expression pattern for alphanumeric input

      let textRegex = /^[a-z0-9]+$/i;
      
      // Check if the input value matches the pattern

      form.addEventListener('submit', function(event){
        if(!textRegex.test(inputField.value)){
      

      // Invalid input: display error message
      console.log('invalid text input.');
      window.alert("invalid text input. " + inputField.value + " is not alphanumeric. Please use only alphanumeric values.");
      event.preventDefault();
      return;
      }

      // Valid input: display confirmation and submit the form

      console.log('confimred');
      window.alert("confirmed submission");
      });