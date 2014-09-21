angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $localStorage,
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
  $ionicModal.fromTemplateUrl('templates/addService.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.addServiceModal = modal;
  });

    // Create the setPassword modal 
  $ionicModal.fromTemplateUrl('templates/setPassword.html', {
    scope: $scope,
    backdropClickToClose : false
  }).then(function(modal) {
    $scope.setPasswordModal = modal;
  });

  // Create the servicePassword modal 
  $ionicModal.fromTemplateUrl('templates/servicePassword.html', {
    scope: $scope,
    backdropClickToClose : false
  }).then(function(modal) {
    $scope.servicePasswordModal = modal;
  });

  // Triggered in the servicePassword modal to close it
  $scope.closeServicePassword = function() {
    window.location.replace("#/app/services"); 
    $scope.servicePasswordModal.hide();
    $scope.servicePassword.name = "";
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

  // Open the servicePassword modal
  $scope.showServicePassword = function() {
    console.log($stateParams);
    console.log("Generating password using: " + $scope.servicePassword.name + $scope.currentService.name + $scope.$storage.masterPassword.name);
    var hash = CryptoJS.SHA3($scope.servicePassword.name + $scope.currentService.name + $scope.$storage.masterPassword.name );
    var password = hash.toString(CryptoJS.enc.Base64);
    console.log(password);
    $scope.servicePassword.name = password;
    $scope.servicePasswordModal.show();
  };

  // Open the addService modal
  $scope.showAddService = function() {
    $scope.addServiceModal.show();
  };

  // Open the setPassword modal
  $scope.showSetPassword = function() {
    $scope.setPasswordModal.show();
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
  
  // Perform the add service action when the user submits the login form
  $scope.setPassword = function() {
    console.log('setting password', $scope.masterPassword.name);
    $scope.$storage.masterPassword=angular.copy($scope.masterPassword);
    $scope.closeSetPassword();
  };
  
})

.controller('PlaylistsCtrl', function(
  $scope) {
  
  //$scope.currentService = 'my service';
})

.controller('PlaylistCtrl', function(
  $scope,
  $stateParams) {
  $scope.currentServiceOld = $stateParams.serviceId;
  $scope.currentService = $scope.$storage.services[$stateParams.serviceId-1];
});
