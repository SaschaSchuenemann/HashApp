/**
 * Created by sascha on 9/21/14.
 */
angular.module('starter.controllers').controller('AppCtrl', function($scope, $stateParams, $ionicModal, $timeout, $localStorage,
                               $sessionStorage) {

    // Form data for the login modal
    $scope.newService = {};
    $scope.masterPassword = {};
    $scope.servicePassword = {};
    //$scope.currentService = { name: 'my service'};

    $scope.$storage = $localStorage.$default([{
        masterPassword : {}
    },{
        services : []
    }
    ]);

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
        // (re)set local masterPassword to the one in storage.
        // This allows to forget changes to the password incase the dialog was closed
        $scope.masterPassword = angular.copy($scope.$storage.masterPassword);
        $scope.setPasswordModal.hide();
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


    // Perform the add service action when the user submits the login form
    $scope.addService = function() {
        console.log('adding service', $scope.newService);

        if ($scope.$storage.services == null ){
            $scope.newService.id = 1;
            $scope.$storage.services = [angular.copy($scope.newService)];
        }else{
            $scope.newService.id = $scope.$storage.services.length + 1;
            $scope.$storage.services.push(angular.copy($scope.newService));
        }


        $scope.closeAddService();
    };

    // run when set password is clicked in setPassword modal
    $scope.setPassword = function() {
        console.log('setting password', $scope.masterPassword.name);
        // save current password in storage
        $scope.$storage.masterPassword=angular.copy($scope.masterPassword);
        $scope.closeSetPassword();
    };

});