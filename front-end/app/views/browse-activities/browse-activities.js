var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var ActivityListViewModel = require("../../shared/view-models/browse-activities-view-model");

var page;

var activityList = new ActivityListViewModel([]);

var pageData = new Observable({
    activityList: activityList
});

exports.selectActivity = function() {
    console.log("Activity pressed");
};

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;

    activityList.empty();
    activityList.load();
};
