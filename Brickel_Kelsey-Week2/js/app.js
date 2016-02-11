/**
 * Created by kelseybrickel on 2/11/16.
 */
var theApp = angular.module("MyApp", []);
theApp.controller("MyNewController",function($scope,DataService){
    "use strict";

    $scope.addresses = DataService.getAddresses();


    $scope.addNewAddress = function(){

        DataService.saveAddress($scope.newAddress.name, $scope.newAddress.job, $scope.newAddress.street, $scope.newAddress.city, $scope.newAddress.state, $scope.newAddress.zipCode);
        $scope.newAddress = {};
    };



    //delete button
    $scope.removeMe = function(idx){
        DataService.removeAddressAt(idx);
    };

    //clear button
    $scope.clearIt = function(){
        DataService.destroyLocalStorage();
    };
});