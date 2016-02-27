/**
 * Created by kelseybrickel on 2/26/16.
 */
angular.module('app').service('DataService1', function() {
    var myGoals = [];

    //Get myGoals data from local storage
    this.getGoal = function() {
        //convert JSON data from localStorage into JS object
        var gArray = JSON.parse(localStorage.getItem('goalsLS')) || myGoals;
        //sync changes to all copies
        myGoals = gArray;
        //return myGoals data as JS Object
        return myGoals;
    }

    //Add a new goal
    this.addNewGoal = function(ggoal) {
        //add myGoal to array
        myGoals.push(ggoal);
        //convert myGoals array into JSON data and use to update the localstorage copy
        localStorage.setItem("goalsLS", JSON.stringify(myGoals));
    }

    //Remove a goal
    this.forgotGoal = function (pIndex) {
        //find the goal at pIndex
        myGoals.splice(pIndex, 1);
        localStorage.setItem("goalsLS", JSON.stringify(myGoals));
    }

    //clear all goals
    this.allClear = function () {
        myGoals.splice(0);
        localStorage.clear();
    }


});


//create a service for app
angular.module('app').service('DataService2', function() {
    var theAssignments = [];

    //Get theActions data from local storage
    this.getAssignments = function() {
        //convert JSON data from localStorage into JS object
        var aArray = JSON.parse(localStorage.getItem('actLS')) || theAssignments;

        theAssignments = aArray;
        return theAssignments;
    };


    //forget an action
    this.forgotAssignment = function(pIndex) {
        //delete an action from the array
        theAssignments.splice(pIndex, 1);
        localStorage.setItem("actLS", JSON.stringify(theAssignments));
    };

    //clear all actions
    this.allClear = function () {
        theAssignments.splice(0);
        localStorage.clear();
    };


});


//create a service for app
angular.module('app').service('DataService3', function() {
    var theAchievements = [];


    this.getAchievement = function() {

        var mArray = JSON.parse(localStorage.getItem('fitLS')) || theAchievements;

        theAchievements = mArray;

        return theAchievements;
    };


    this.newAchievement = function(achieve) {

        theAchievements.push(achieve);


        localStorage.setItem("fitLS", JSON.stringify(theAchievements));
    };


    this.forgotAchievement = function(pIndex) {

        theAchievements.splice(pIndex, 1);
        localStorage.setItem("fitLS", JSON.stringify(theAchievements));
    };

    this.allClear = function () {
        theAchievements.splice(0);
        localStorage.clear();
    };


});