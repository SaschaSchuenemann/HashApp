/**
 * Created by sascha on 9/21/14.
 */
angular.module('starter.controllers').controller('AppCtrl', function($scope, $stateParams, $ionicModal, $timeout, $localStorage,
                                                                     $sessionStorage, sitesService) {
    // bind to ojects from service
    $scope.sites = sitesService.getSites();
    $scope.masterPassword = sitesService.getMasterPassword();
    $scope.configuration = sitesService.getConfiguration();

    // create empty objects needed by modals
    $scope.newService = {};
    $scope.newMasterPassword = {};
    $scope.servicePassword = {};


// Create the add service modal
    $ionicModal.fromTemplateUrl('templates/modals/addService.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.addServiceModal = modal;
    });

// Create the setPassword modal
    $ionicModal.fromTemplateUrl('templates/modals/setPassword.html', {
        scope: $scope,
        backdropClickToClose : false
    }).then(function(modal) {
        $scope.setPasswordModal = modal;
    });

// Create the servicePassword modal
    $ionicModal.fromTemplateUrl('templates/modals/servicePassword.html', {
        scope: $scope,
        backdropClickToClose : false
    }).then(function(modal) {
        $scope.servicePasswordModal = modal;
    });

// Create the add service modal
    $ionicModal.fromTemplateUrl('templates/modals/confPassword.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.confPasswordModal = modal;
    });

// Triggered in the servicePassword modal to close it
    $scope.closeServicePassword = function() {
        window.location.replace("#/app/services");
        $scope.servicePasswordModal.hide();
        console.log("closed service Password");
        $scope.servicePassword.name = "";
        console.log("removed password");
    };

// Triggered in the addService modal to close it
    $scope.closeAddService = function() {
        $scope.addServiceModal.hide();
    };

// Triggered in the addService modal to close it
    $scope.closeSetPassword = function() {
        $scope.setPasswordModal.hide();
    };

// Triggered in the addService modal to close it
    $scope.closeConfPassword = function() {
        $scope.confPasswordModal.hide();
    };

// Open the addService modal
    $scope.showAddService = function() {
        $scope.addServiceModal.show();
    };

// Open the setPassword modal
    $scope.showSetPassword = function() {
        $scope.setPasswordModal.show();
    };

// Open the confPassword modal
    $scope.showConfPassword = function() {
        $scope.confPasswordModal.show();
    };

// set master password when user submits the form in setPassword modal
    $scope.setPassword = function(){
        sitesService.setMasterPassword($scope.newMasterPassword);
        $scope.newMasterPassword = {};
    }

// Perform the add service action when the user submits the form in addService modal
    $scope.addService = function() {
        console.log('adding service', $scope.newService);
        sitesService.addSite($scope.newService);
        $scope.closeAddService();
    };


});