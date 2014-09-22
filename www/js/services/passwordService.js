/**
 * Created by sascha on 9/22/14.
 */
angular.module('starter.controllers')
    .service('passwordService', function ($localStorage) {
        // initialise local storage object
        var storage = $localStorage;
        // return getter and setter for elements within local storage
        return {
            getMasterPassword: function () {
                // initialise object so that controller can bind to it
                if (storage.masterPassword == null)
                    storage.masterPassword = {name: ""};
                return storage.masterPassword;
            },
            setMasterPassword: function(value) {
                console.log("New master password: " + value);
                storage.masterPassword = value;
            }
        }
    });