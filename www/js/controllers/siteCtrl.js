/**
 * Created by sascha on 9/21/14.
 */
angular.module('starter.controllers').controller('SiteCtrl', function(
    $scope,
    $stateParams,
    sitesService,
    passwordService) {
    $scope.currentSiteOld = $stateParams.siteId;
    $scope.currentSite = sitesService.getSites()[$stateParams.siteId-1];
    $scope.masterPassword = passwordService.getMasterPassword();
    $scope.configuration = sitesService.getConfiguration();



    // Open the sitePassword modal
    $scope.showSitePassword = function() {
        console.log($stateParams);
        console.log("Generating password using: " + $scope.sitePassword.name + $scope.currentSite.name + $scope.masterPassword.name);
        if ( $scope.currentSite.passwordRequirements == null || $scope.currentSite.passwordRequirements.length == null)
            var passwordLength = $scope.configuration.passwordRequirements.length;
        else
            var passwordLength = $scope.currentSite.passwordRequirements.length;
        var password = passLib.genPass($scope.sitePassword.name , $scope.currentSite.name , $scope.masterPassword.name , passwordLength);
        console.log(password);
        $scope.sitePassword.name = password;
        $scope.sitePasswordModal.show();
    };

    $scope.clickTest = function() {
        alert("test");
    }

});