/**
 * Created by sascha on 9/21/14.
 */
angular.module('starter.controllers').controller('AppCtrl', function($scope, $stateParams, $ionicModal, $timeout, $localStorage,
                                                                     $sessionStorage, sitesService,passwordService) {
    // bind to ojects from service
    $scope.sites = sitesService.getSites();
    $scope.masterPassword = passwordService.getMasterPassword();
    $scope.configuration = sitesService.getConfiguration();

    // create empty objects needed by modals
    $scope.newSite = {};
    $scope.newMasterPassword = {};
    $scope.sitePassword = {};
    $scope.login = {name: 'none'};


// Create the add site modal
    $ionicModal.fromTemplateUrl('templates/modals/addSite.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.addSiteModal = modal;
    });

    // Create the add site modal
    $ionicModal.fromTemplateUrl('templates/modals/editSite.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.editSiteModal = modal;
    });

// Create the setPassword modal
    $ionicModal.fromTemplateUrl('templates/modals/setPassword.html', {
        scope: $scope,
        backdropClickToClose : false
    }).then(function(modal) {
        $scope.setPasswordModal = modal;
    });

// Create the sitePassword modal
    $ionicModal.fromTemplateUrl('templates/modals/sitePassword.html', {
        scope: $scope,
        backdropClickToClose : false
    }).then(function(modal) {
        $scope.sitePasswordModal = modal;
    });

// Create the add site modal
    $ionicModal.fromTemplateUrl('templates/modals/confPassword.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.confPasswordModal = modal;
    });
    
// Create the login modal
    $ionicModal.fromTemplateUrl('templates/modals/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.loginModal = modal;
    });

// Triggered in the sitePassword modal to close it
    $scope.closeSitePassword = function() {
        window.location.replace("#/app/sites");
        $scope.sitePasswordModal.hide();
        console.log("closed site Password");
        $scope.sitePassword.name = "";
        console.log("removed password");
    };

// Triggered in the addSite modal to close it
    $scope.closeAddSite = function() {
        $scope.addSiteModal.hide();
    };

    // Triggered in the addSite modal to close it
    $scope.closeEditSite = function() {
        $scope.editSiteModal.hide();
    };

// Triggered in the addSite modal to close it
    $scope.closeSetPassword = function() {
        $scope.setPasswordModal.hide();
    };

// Triggered in the addSite modal to close it
    $scope.closeConfPassword = function() {
        $scope.confPasswordModal.hide();
    };

// Open the addSite modal
    $scope.showAddSite = function() {
        //$scope.newSite.passwordRequirements = angular.copy($scope.configuration.passwordRequirements);
        $scope.addSiteModal.show();
    };

    // Open the addSite modal
    $scope.showEditSite = function() {
        $scope.editSiteModal.show();
    };

// Open the setPassword modal
    $scope.showSetPassword = function() {
        $scope.setPasswordModal.show();
    };

// Open the confPassword modal
    $scope.showConfPassword = function() {
        $scope.confPasswordModal.show();
    };
    
// Open the login modal
    $scope.showLogin = function() {
        $scope.loginModal.show();
    };

// set master password when user submits the form in setPassword modal
    $scope.setPassword = function(){
        passwordService.setMasterPassword($scope.newMasterPassword);
        $scope.newMasterPassword = {};
        $scope.closeSetPassword();
    }

// sets the user for the current session
    $scope.closeLogin = function(){
        $scope.loginModal.hide();
    }

// Perform the add site action when the user submits the form in addSite modal
    $scope.addSite = function() {
        console.log('adding site', $scope.newSite);
        sitesService.addSite($scope.newSite);
        $scope.newService = {};
        $scope.closeAddSite();
    };

    $scope.edit = function(site) {
        $scope.activeSite = site;
        $scope.showEditSite();
    }

});