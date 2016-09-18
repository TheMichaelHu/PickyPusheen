var config = require("../../shared/config.js");
var fetchModule = require("fetch");
var Observable = require("data/observable").Observable;

function User(info) {
    info = info || {};

    var viewModel = new Observable({
        username: info.username || "",
        password: info.password || ""
    });

    viewModel.login = function() {
        return fetchModule.fetch(config.signinUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
<<<<<<< HEAD
            body: JSON.stringify({
=======
            payload: {
>>>>>>> master
                user: {
                    username: viewModel.get("username"),
                    password: viewModel.get("password")
                }
<<<<<<< HEAD
            }),
=======
            },
>>>>>>> master
        })
        .then(handleErrors)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
    };

    viewModel.register = function() {
        return fetchModule.fetch(config.registerUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
<<<<<<< HEAD
            body: JSON.stringify({
                Email: viewModel.get("email"),
                Username: viewModel.get("username"),
                Password: viewModel.get("password")
            }),
        }).then(handleErrors)
        .then(function (response) {
            return response.json();
        });
=======
            payload: {
                Email: viewModel.get("email"),
                Username: viewModel.get("username"),
                Password: viewModel.get("password")
            },
        }).then(handleErrors);
>>>>>>> master
    };

    return viewModel;
}

function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}

module.exports = User;
