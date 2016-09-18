var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var ActivityListViewModel = require("../../shared/view-models/browse-activities-view-model");

var page;

var activityList = new ActivityListViewModel([]);

var pageData = new Observable({
    activityList: activityList,
    activity: ""
});

exports.selectActivity = function() {
    console.log("Activity pressed");
};

exports.loaded = function(args) {
    page = args.object;
    var listView = page.getViewById("activityList");

    page.bindingContext = pageData;

    activityList.empty();
    pageData.set("isLoading", true);
    activityList.load().then(function() {
        pageData.set("isLoading", false);
        listView.animate({
            opacity: 1,
            duration: 1000
        });
    });
};
