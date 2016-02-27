/**
 * Created by kelseybrickel on 2/20/16.
 */
var myLists = anglar.module("MyApp",['ngRoute'])

.config(function($routeProvider){

    $routeProvider.when('/view1',{
        templateUrl : "Quad1.html",
        controller : "quadIcntrlr"
    }).when('/view2',{
        templateUrl: "Quad2.html",
        controller : "quadIIcntrlr"
    }).when('/view3',{
        templateUrl: "Quad3.html",
        controller : "quadIIIcntrlr"
    }).when('/view4',{
        templateUrl : "Quad4.html",
        controller : "quadIVcntrlr"
    }).otherwise({
        redirectTo : "index.html"
    });
});

.controller("quadIcntrlr",function($scope,DataService){

    $scope.quadI = DataService.getQuadI();
    $scope.newQuadI = {};

    $scope.addQuadI = function(){
        DataService.saveQuadI($scope.newQuadI.quadI, $scope.newQuadI);
        $scope.newQuadI = {};
    };

    $scope.removeQuadI = function(idx){
        DataService.destroyLocalStorage();
    }
})

.controller("quadIIcntrlr", function($scope){

    $scope.quadII;

    $scope.quadIIArray = [''];

        $scope.addItem = function () {

            $scope.quadIIArray.push($scope.quadII);

            $scope.quadII = '';
        };

        $scope.delete
})