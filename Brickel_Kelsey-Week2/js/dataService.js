/**
 * Created by kelseybrickel on 2/11/16.
 */
angular.module("MyApp").service("DataService",function(){
    "use strict";
    //Array with no objects []
    var addressArray = [];

    this.getAddresses = function(){
        var myVariable = JSON.parse(localStorage.getItem("addressesLS")) || [];
        addressArray = myVariable;
            console.log(myVariable);
        return addressArray;
    };

    this.saveAddress = function(pName,pJob,pAddress,pCity,pState,pZip){
        var savedAddresses = {name: pName, job: pJob, address: pAddress, city: pCity, state: pState, zip: pZip };
        addressArray.push(savedAddresses);
        localStorage.setItem("addressesLS",JSON.stringify(addressArray));
    };

    this.removeAddressAt = function(pIndex){
        addressArray.splice(pIndex,1);
        localStorage.setItem("addressesLS",JSON.stringify(addressArray));
    };

    this.destroyLocalStorage = function(){
        addressArray.splice(0);
        localStorage.clear();
    };

});