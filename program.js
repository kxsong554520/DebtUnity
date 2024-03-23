var calApp;
calApp = angular.module('calApp', ['ngAnimate'])
calApp.controller('calCtrl', function ($scope, $sce) {

    $scope.eventsVisible = 3; // How many events should be shown?

    $scope.events = [
        {
            title: "Financial-education-based Seminars and Workshops",
            date: new Date("2024-04-01T09:00:00"),
            location: "Conference Center, Perak"
        },
        {
            title: "Financial Webinars",
            date: new Date("2024-04-10T14:00:00"),
            location: "Online"
        },
        {
            title: "Financial Talks",
            date: new Date("2024-04-20T18:30:00"),
            location: "Community Hall, Kuala Lumpur"
        },
        {
            title: "Anonymous Meetings",
            date: new Date("2024-05-05T10:00:00"),
            location: "Recovery Center, Selangor"
        },
        {
            title: "Mentoring Sessions",
            date: new Date("2024-05-15T13:00:00"),
            location: "Coaching Center, Kuala Lumpur"
        },
        {
            title: "Forums",
            date: new Date("2024-05-25T19:00:00"),
            location: "Town Hall, Kuala Terengganu"
        }
    ];

    $scope.getMap = function (event) {
        return "https://maps.google.com/?q=" + event.location;
    };

    $scope.getEvents = function () {
        // Gets x number of events , using scope.eventsVisible 
        // to determine how many events to show
        var events = [];
        for (x = 0; x < $scope.eventsVisible; x++) {
            events.push($scope.events[x]);
        }
        return events;
    }

    $scope.hiddenEvents = function () {
        // Calculates how many events are hidden
        var remaining;
        if ($scope.events.length - $scope.eventsVisible > 0) {
            remaining = $scope.events.length - $scope.eventsVisible;
        } else {
            remaining = 0;
        }

        return remaining;
    }

    $scope.showHidden = function () {
        // Show hidden events
        $scope.eventsVisible = $scope.events.length;
    }
    $scope.hideEvents = function () {
        // Hide events
        $scope.eventsVisible = 3;
    }

});

