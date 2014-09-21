/**
 * Created by sascha on 9/21/14.
 */
angular.module('starter.controllers').controller('ServiceCtrl', function(
    $scope,
    $stateParams) {
    $scope.currentServiceOld = $stateParams.serviceId;
    $scope.currentService = $scope.$storage.services[$stateParams.serviceId-1];

    // Open the servicePassword modal
    $scope.showServicePassword = function() {
        console.log($stateParams);
        console.log("Generating password using: " + $scope.servicePassword.name + $scope.currentService.name + $scope.$storage.masterPassword.name);
        var password = passLib.genPass($scope.servicePassword.name , $scope.currentService.name , $scope.$storage.masterPassword.name , 50);
        console.log(password);
        $scope.servicePassword.name = password;
        $scope.servicePasswordModal.show();
    };
});