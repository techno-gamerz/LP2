var users = JSON.parse(localStorage.getItem("users")) || [];

var registrationForm = document.getElementById("registrationForm");
var userTable = document.getElementById("userTable");
var message = document.getElementById("message");

if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var user = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            mobile: document.getElementById("mobile").value,
            city: document.getElementById("city").value
        };

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        ajaxPost(user);
        registrationForm.reset();
        message.textContent = "User registered and saved in local storage.";
    });
}

if (userTable) {
    displayUsers();
}

function ajaxPost(user) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/users", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(user));
}

function displayUsers() {
    if (users.length === 0) {
        userTable.innerHTML = "<tr><td colspan='4'>No users registered.</td></tr>";
        return;
    }

    users.forEach(function (user) {
        var row = document.createElement("tr");
        row.innerHTML =
            "<td>" + user.name + "</td>" +
            "<td>" + user.email + "</td>" +
            "<td>" + user.mobile + "</td>" +
            "<td>" + user.city + "</td>";
        userTable.appendChild(row);
    });
}
