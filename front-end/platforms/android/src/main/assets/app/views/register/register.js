var Observable = require("data/observable").Observable;

var user = new Observable({
    username: "",
    password: ""
});

var frameModule = require("ui/frame");
var page;
var username;
var password;

exports.loaded = function(args) {
    console.log("Register page loaded");

    page = args.object;
    page.bindingContext = user;
};

exports.createAccount = function() {
    console.log("Create account button pressed");

    username = page.getViewById("username");
    password = page.getViewById("password");
};
