var config = require("../../shared/config");
var fetchModule = require("fetch");
var Observable = require("data/observable").Observable;

function User(info) {
    info = info || {};

    var viewModel = new Observable({
        email: info.email || "",
        password: info.password || ""
    });

    var serializeJSON = function(data) {
        return Object.keys(data).map(function (keyName) {
            return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName]);
        }).join('&');
    };

    var data = {
        "users": {
            "email": viewModel.get("email"),
            "password": viewModel.get("password"),
            "password_confirmation": viewModel.get("password")
        }
    };

    var playload = JSON.stringify(data);

    viewModel.login = function() {
        return fetchModule.fetch(config.signinUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: viewModel.get("username"),
                    password: viewModel.get("password"),
                    remember_me: 1
                }
            }),
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
            body: JSON.stringify({
                "users": {
                    "email": viewModel.get("email"),
                    "password": viewModel.get("password"),
                    "password_confirmation": viewModel.get("password")
                }
            })
        }).then(handleErrors)
        .then(function (response) {
            return response.json();
        });
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
