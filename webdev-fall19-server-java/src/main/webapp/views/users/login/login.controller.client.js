(function () {

    // Define jquery variables
    var $username,
        $password,
        $loginBtn;

    // bind the variable to actual field id
    function init() {
        $username = $('#username');
        $password = $('#password');
        $loginBtn = $('#loginBtn');

        // When LoginButton clicked
        $loginBtn.click(loginHandler)
    }

    init();




    // LoginHandler function
    function loginHandler() {
        console.log("LoginBtn clicked");
        var userObj = {
            'username': $username.val(),
            'password': $password.val()
        }

        var userObjStr = JSON.stringify(userObj);

        fetch('/login', {
            method: 'post',
            body: userObjStr,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(loginCheck)


        // Check the login successful or not
        function loginCheck(response) {
            if (response.status !== 200) {
                var x = document.getElementById('loginError');
                x.style.display = "block";
                throw new Error("Not 200 response")
            }
            else {
                window.location.href = '../profile/profile.template.client.html';
            }
        }
    }

})()