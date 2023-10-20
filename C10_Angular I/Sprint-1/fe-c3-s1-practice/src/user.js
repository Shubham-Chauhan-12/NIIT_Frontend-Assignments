//Define User class
var User = /** @class */ (function () {
    //constuctor 
    function User(username, password, contact, email, address) {
        this.username = username;
        this.password = password;
        this.contact = contact;
        this.email = email;
        this.address = address;
    }
    return User;
}());
//Fetch form values using Object.fromentries()
var submitUser = function (formData) {
    var form = document.querySelector("#reg-form");
    var data = new FormData(form);
    var users = new User(data.get("username"), data.get("password"), data.get("contact"), data.get("email"), data.get("address"));
    //alert("savedata")
    registerUser(users);
    return false;
    //call registerUser method with the constructed User object
};
//POST data using fetch() api
function registerUser(user) {
    //Dispay welcome message after successful registration
    fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "content-type": "application/json;charset=UTF-8"
        }
    }).then(function (response) { return response.json(); }).then(function (json) { return console.log(json); });
    alert("Registration Successful");
    return false;
    //Dispay welcome message after successful registration
}
