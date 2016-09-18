var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var listPickerModule = require("ui/list-picker");

var page;

var pageData = new Observable({
    activityList: new ObservableArray([
        { activity: "Groceries" }
    ])
});

exports.loaded = function(args) {
    page = args.object;


};
