/**
 * Created by kelseybrickel on 2/26/16.
 */
(function(){
    var app = angular.module('app', ['ngRoute']);

    app.controller('MainController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    });


    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'GoalController',
                templateUrl: 'goals.html'
            })
            .when('/assignment', {
                controller: 'AssignmentController',
                templateUrl: 'assignments.html'
            })
            .when('/achievement', {
                controller: 'AchievementController',
                templateUrl: 'achievements.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

    app.controller('GoalController',['$scope','DataService1', function($scope, DataService1) {

        $scope.goalsA = DataService1.getGoal();
        $scope.goal;

        $scope.addGoal = function() {
            DataService1.addNewGoal($scope.goal);
            $scope.goal = '';
        };

        $scope.forgetGoal = function (forgottenGoal) {
            var idx = DataService1.getGoal.indexOf(forgottenGoal);
            DataService1.forgotGoal(idx);
        };


        $scope.clear = function () {
            DataService1.allClear();
        }
    }]);




    app.controller('AssignmentController',['$scope','DataService2', function($scope, DataService2) {

        $scope.newAssignment = {};

        $scope.assignment = DataService2.getAssignments();


        $scope.addAssignments = function() {
            $scope.addAssignment = DataService2.addNewAssignment(

                $scope.newAssignment.assignment,
                $scope.newAssignment.due
            );


            $scope.newAssignment = {};
            $scope.aForm.$setPristine();
        }

        $scope.forgetAssignment = function(idx) {
            DataService2.forgotAssignment(idx);
        }


        $scope.clear = function() {
            DataService2.allClear();
        }
    }]);

    app.controller('AchievementController', ['$scope', 'DataService3', function($scope, DataService3) {

        $scope.achievement;
        $scope.achievement = DataService3.getAchievement();

        $scope.addAchievement = function() {
            DataService3.newAchievement($scope.achievement);
            $scope.achievement = '';
            $scope.aForm.$setPristine();
        };

        $scope.lostAchievement = function(achAc) {
            var idx = DataService3.getAchievement.indexOf(achAc);
            DataService3.forgotAchievement(achAc);
        };

        $scope.clear = function() {
            DataService3.allClear();
        }
    }]);



})();