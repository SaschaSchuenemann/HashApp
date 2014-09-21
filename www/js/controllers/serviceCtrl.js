/**
 * Created by sascha on 9/21/14.
 */
angular.module('starter.controllers').controller('ServiceCtrl', function(
    $scope,
    $stateParams,
    sitesService) {
    $scope.currentServiceOld = $stateParams.serviceId;
    $scope.currentService = sitesService.getSites()[$stateParams.serviceId-1];
    $scope.masterPassword = sitesService.getMasterPassword();
    $scope.configuration = sitesService.getConfiguration();



    // Open the servicePassword modal
    $scope.showServicePassword = function() {
        console.log($stateParams);
        console.log("Generating password using: " + $scope.servicePassword.name + $scope.currentService.name + $scope.masterPassword.name);
        var password = passLib.genPass($scope.servicePassword.name , $scope.currentService.name , $scope.masterPassword.name , $scope.configuration.passwordLength);
        console.log(password);
        $scope.servicePassword.name = password;
        $scope.servicePasswordModal.show();
    };

    $scope.clickTest = function() {
        alert("test");
    }
});