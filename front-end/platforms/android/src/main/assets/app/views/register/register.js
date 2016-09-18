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
    .catch(function(error) {
        console.log("Error with register: " + error);

        dialogsModule.alert({
            message: "There was error with registering your account",
            okButtonText: "OK"
        });

        return Promise.reject();
    })
    .then(function() {
        frameModule.topmost().navigate("views/login/login");
    });
};
