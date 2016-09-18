var dialogsModule = require("ui/dialogs");
var frameModule = require("ui/frame");

var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();

var page;
var email;
var username;
var password;

exports.loaded = function(args) {
    console.log("Register page loaded");

    page = args.object;
    page.bindingContext = user;
};

exports.createAccount = function() {
    console.log("Create account button pressed");

    email = page.getViewById("email");
    username = page.getViewById("username");
    password = page.getViewById("password");

    user.register()
        .then(function() {
            dialogsModule
                .alert("Account successfully created.")
                .then(function() {
                    frameModule.topmost().navigate("views/login/login");
                });
        }).catch(function(error) {
            console.log(error);
            dialogsModule
                .alert({
                    message: "Unable to create account.",
                    okButtonText: "OK"
                });
        });
};
