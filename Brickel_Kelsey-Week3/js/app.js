/**
 * Created by kelseybrickel on 2/20/16.
 */
var myLists = anglar.module("MyApp",['ngRoute'])

.config(function($routeProvider){

    $routeProvider.when('/view1',{
        templateUrl : "Quad1.html",
        controller : ""
    })
})