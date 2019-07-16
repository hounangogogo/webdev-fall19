(function () {

    function init() {
        findAllUsers()
            .then(renderUsers);
    }
    init()


    function renderUsers(users) {
        console.log(users);
        var tbody = $('tbody');
        tbody.empty();
        for(var i=0; i < users.length; i++) {
            var user = users[i];

            var tr = $('<tr>'); //render new one
            var td = $('<td>');

            td.append(user.username);
            tr.append(td);

            td = $('<td>');
            td.append("******");
            tr.append(td);


            td = $('<td>');
            td.append(user.firstname);
            tr.append(td);



            td = $('<td>');
            td.append(user.lastname);
            tr.append(td);

            td = $('<td>');
            td.append('dddd@halk.com');
            tr.append(td);


            td = $('<td>');
            td.append("student");
            tr.append(td);


            td = $('<td>');
            var deleteBtn = $('<button>Delete</button>');
            deleteBtn.click(deleteUser);

            //set the attr for button for userId
            deleteBtn.attr('id', user.id);
            td.append(deleteBtn);
            tr.append(td);

            tr.appendTo(tbody)
        }

        function deleteUser(event) {
            console.log(event);
            var $button = $(event.currentTarget);
            var id = $button.attr('id');
            console.log(id);

            var url = "/api/user/delete/" + id;
            return fetch(url, {
                method: 'delete'
            }).then(function (value) {
                findAllUsers()
                    .then(renderUsers)
            })



        }

    }


    function findAllUsers() {
        var url = "/api/users";

        return fetch(url)
            .then(function (response) {
                console.log(response);
                return response.json();
            })
    }


})()