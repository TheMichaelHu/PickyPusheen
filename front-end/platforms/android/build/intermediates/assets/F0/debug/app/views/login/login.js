var UserViewModel = require("~/shared/view-models/user-view-model");
var frameModule = require("ui/frame");
var dialogsModule = require("ui/dialogs");

var user = new UserViewModel();
var page;
var username;
var password;

exports.loaded = function(args) {
    console.log("Login page loaded");

    page = args.object;
    page.bindingContext = user;
};

exports.signIn = function() {
    console.log("Sign-in button pressed");

    frameModule.topmost().navigate("views/browse-activities/browse-activities");
    
    // user.login()
    // .catch(function(error) {
    //     console.log("Error with login: " + error);
    //
    //     dialogsModule.alert({
    //         message: "There was error with retrieving your account",
    //         okButtonText: "OK"
    //     });
    //
    //     return Promise.reject();
    // })
    // .then(function() {
    //     frameModule.topmost().navigate("views/browse-activities/browse-activities");
    // });
};

exports.register = function() {
    console.log("Register button pressed");

    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};
