(function () {

    var $username, $email;


    function init() {

        $username = $("#username");
        $email = $("#email");
        profile()
            .then(renderUser);
    }
    init()


    function renderUser(user) {
        console.log(user);
        $username.val(user.username);
        $email.val(user.email);
    }



    // function generate a fetch get the current user
    function profile() {
        return fetch('/profile', {
            'credentials': 'include'
        }).then(function (response) {
            return response.json();
        })
    }

})()