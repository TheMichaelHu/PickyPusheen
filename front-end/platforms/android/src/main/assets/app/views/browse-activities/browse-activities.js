var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var page;

// var pageData = new Observable({
//     activityList: new ObservableArray([
//         { activity: "Groceries" },
//         { activity: "Shopping" },
//         { activity: "Exercise" }
//     ])
// });

exports.selectActivity = function() {
    console.log("Activity pressed");
};

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;
};
