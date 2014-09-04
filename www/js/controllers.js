angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $localStorage,
    $sessionStorage) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

    // Create the lockpattern modal that we will use later
  $ionicModal.fromTemplateUrl('templates/lockpattern.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.patternModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
    // Open the login modal
  $scope.pattern = function() {
    $scope.patternModal.show();
  };
    // Triggered in the login modal to close it
  $scope.closePattern = function() {
    $scope.patternModal.hide();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  $scope.$storage = $localStorage;
  $scope.services = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistsCtrl', function(
  $scope) {
  
  $scope.currentService = 'my service';
})

.controller('PlaylistCtrl', function(
  $scope,
  $stateParams) {
  $scope.currentServiceOld = $stateParams.serviceId;
  $scope.currentService = $scope.services[$stateParams.serviceId-1];
});
