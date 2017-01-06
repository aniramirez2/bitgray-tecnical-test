angular.module('myApp')
.controller('profileCtrl', ['$scope','$rootScope', 'profileService', 
        function ($scope, $rootScope, profileService) {

    $scope.status;
    $scope.users;

    getUser($rootScope.userId);
    console.log('rootscope:',$rootScope.userId)        

    function getUsers() {
        profileService.getUsers()
            .then(function (response) {
                $scope.users = response.data[0];
            }, function (error) {
                $scope.status = 'Unable to load users data: ' + error.message;
            });
    }

    function getUser(id) {
        profileService.getUser(id)
            .then(function (response) {
                $scope.users = response.data;
            }, function (error) {
                $scope.status = 'Unable to load users data: ' + error.message;
            });
    }

    
}]);