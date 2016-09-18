var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var ActivityListViewModel = require("../../shared/view-models/browse-activities-view-model");
var gestures = require("ui/gestures");

var activityList = new ActivityListViewModel([]);

var pageData = new Observable({
    activityList: activityList,
});

exports.selectActivity = function() {
    console.log("Activity pressed");
};

exports.loaded = function(args) {
    var page = args.object;
    page.bindingContext = pageData;

    var listView = page.getViewById("activityList");

    listView.on(gestures.GestureTypes.swipe, function (args) {
        console.log("Swiped");
    });

    activityList.empty();
    activityList.load();
};
