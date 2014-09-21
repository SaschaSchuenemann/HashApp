/**
 * Created by sascha on 9/21/14.
 */
angular.module('starter.controllers')
    .service('sitesService', function ($localStorage) {
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
            },
            getSites: function () {
                // initialise object so that controller can bind to it
                if (storage.sites == null)
                    storage.sites = [];
                return storage.sites;
            },
            addSite: function (site) {
                site.id = storage.sites.length + 1;
                storage.sites.push(site);
            },
            setConfiguration: function(configuration) {
                storage.configuration = configuration;
            },
            getConfiguration: function() {
                // initialise object so that controller can bind to it
                if (storage.configuration == null)
                storage.configuration = {passwordLength : 8};
                return storage.configuration;
            }

        };
    });