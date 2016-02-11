/**
 * Created by kelseybrickel on 2/11/16.
 */
angular.module("myApp").service("dataService", function(){

    var namesArray = ['Sean','Scott','Rebecca','Anna'];

    this.getNames = function(){
        return namesArray;

    };

    this.addNames = function(pName){
        namesArray.push(pName);
    };

    this.removeName = function(pName){
        namesArray.splice(namesArray.inexOf(pName),1);
    }


});
