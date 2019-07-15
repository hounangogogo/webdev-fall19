(function () {

    // Define jquery variables
    var $username,
        $password,
        $passwordCheck,
        $email,
        $registerBtn


    // bind the variable to actual field id
    function init() {
        $username = $('#username');
        $password = $('#password');
        $passwordCheck = $('#passwordCheck');
        $email = $('#email');
        $registerBtn = $('#registerBtn');

        // When LoginButton clicked
        $registerBtn.click(registerHandler)
    }

    init();

    // Check whether two passwords are the same or not
    function passwordCheck() {
        var x = document.getElementById('passwordWrong');
        if($password.val() != $passwordCheck.val()) {
            x.style.display = "block";
            throw new Error("Password don't match");
        }
        else {
            x.style.display = "none";
        }
    }


    // LoginHandler function
    function registerHandler() {
        passwordCheck();

        // Create a JSON for userObj
        var userObj = {
            'username': $username.val(),
            'password': $password.val(),
            'email': $email.val(),
        }

        // Convert the JSON to string
        var userObjStr = JSON.stringify(userObj);

        // Send a register request
        fetch('/register', {
            method: 'post',
            body: userObjStr,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(registrationCheck)


        // Check the registration successful or not
        function registrationCheck(response) {
                console.log(response);
                if (response.status == 200) {
                    window.location.href = '../profile/profile.template.client.html';
                }
                else {
                    var x = document.getElementById('usernameTaken');
                    x.style.display = "block";
                    throw new Error("Not 200 response")
                }
        }


    }

})()