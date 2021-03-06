var config = require("../../shared/config");
var fetchModule = require("fetch");
var ObservableArray = require("data/observable-array").ObservableArray;

function ActivityListViewModel(items) {
    var viewModel = new ObservableArray(items);

    viewModel.load = function() {
        return fetch(config.getActivitiesUrl, {
            method: "GET",
            headers: {
            }
        })
        .then(handleErrors)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data.Result);
            for (var i = 0; i < data.length; i++) {
                viewModel.push({
                    id: data[i].id,
                    title: data[i].title,
                    is_nerd: data[i].is_nerd
                });

                console.log(data[i].title);
            }
        });
    };

    viewModel.empty = function() {
        while (viewModel.length) {
            viewModel.pop();
        }
    };

    return viewModel;
}

function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}

module.exports = ActivityListViewModel;
