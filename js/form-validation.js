        // test if entered email address is valid using regexp
        function isValidEmail(emailAddress) {
            /* returns true if the following conditions are met (case insensitive throughout):            
            // starts with zero or more groups of letters, numbers or hyphens, which must start with a letter and end with a dot: ([a-z]([a-z]|\d|-)*\.)*
            // then one group of letters, numbers or hyphens, which must start with a letter: ([a-z]([a-z]|\d|-)*)           
            // then the @ symbol: @
            // then one or more groups of letters, numbers or hyphens, which must start with a letter and end with a dot: ([a-z]([a-z]|\d|-)*\.)+
            // then ends with one group of 2-4 letters: ([a-z]{2,4}) */
            var myRegExp = /^([a-z]([a-z]|\d|-)*\.)*([a-z]([a-z]|\d|-)*)@([a-z]([a-z]|\d|-)*\.)+([a-z]{2,4})$/i;
            
            if (!myRegExp.test(emailAddress)) {
                var errorDiv = document.getElementById("invalid-email");
                errorDiv.classList.add("show");
                return(false);
            } else {
                return(true);
            }
        }            
            
        // create array for error message divs
        var errorMessageArray = [];
        errorMessageArray[0] = "no-email";
        errorMessageArray[1] = "no-reason";
        errorMessageArray[2] = "no-message";
        errorMessageArray[3] = "invalid-email";
        
        // description
        function clearErrorMessages() {
            for ( i = 0; i < 4; i++ ) {
                var errorMessage = errorMessageArray[i];
                var errorDiv = document.getElementById(errorMessage);
                if (errorDiv.classList.contains("show")) {
                    errorDiv.classList.remove("show");
                    }
                }
            }

        function noMissingFields(form) {
            
            // checks to see if all fields are filled in
            
            // store form input data in an array
            var inputArray = [];
            inputArray[0] = form.emailaddress.value;
            inputArray[1] = form.reason.value;
            inputArray[2] = form.message.value;

            // description
            for ( i = 0; i < 3; i++ ) {                
                if (inputArray[i] == "") {
                    var errorMessage = errorMessageArray[i];
                    var errorDiv = document.getElementById(errorMessage);
                    errorDiv.classList.add("show");
                    return(false);
                }
            }
            
            if (inputArray[1] < 1) {
                var errorDiv = document.getElementById("no-reason");
                errorDiv.classList.add("show");
                return(false);
            }
            return(true);

        }
            
        function validateForm(form) {
            
            // clear any existing error messages
            clearErrorMessages();
            
            var email = form.emailaddress.value;
            
            if ( noMissingFields(form) && isValidEmail(email) ) {
                var errorDiv = document.getElementById("form-success");
                errorDiv.classList.add("show");
            } else {
                return(false);
            }
            document.getElementById("contact").reset();
            
        }