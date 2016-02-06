/**
 * Created by kelseybrickel on 2/3/16.
 */
var app = angular.module('myApp', []);
app.controller('GroceryController', function($scope) {

    $scope.newItem;

    //List Item
    $scope.groceries = ['Spinach', 'Raspberries', 'Eggs'];

    //Add List Item
    $scope.addItem = function() {
        $scope.groceries.push($scope.newItem);
        $scope.newItem = '';

    }

    //Remove List Item
    $scope.removeItem = function(item){
        var idx = $scope.groceries.indexOf(item);
            $scope.groceries.splice(idx,1);
    }
});