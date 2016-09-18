var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var ActivityListViewModel = require("../../shared/view-models/browse-activities-view-model");
var gestures = require("ui/gestures");

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

    listView.on(gestures.GestureTypes.swipe, function (args) {
        console.log("Swiped");
    });

    page.bindingContext = pageData;

    activityList.empty();
    activityList.load();
};
