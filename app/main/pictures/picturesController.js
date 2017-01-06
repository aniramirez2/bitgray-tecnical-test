angular.module('myApp')
.controller('picturesCtrl', ['$scope', 'profileService','$rootScope',
function ($scope, profileService, $rootcope) {

    $scope.status;
    $scope.albums;
    $scope.userId = $rootcope.userId;
    console.log('userid', $scope.userId);
    getAlbums($scope.userId);
    
    function getAlbum(id){
    
    }
    
    function getAlbums() {
        profileService.getAlbums()
            .then(function (response) {
                $scope.albums = response.data;
            }, function (error) {
                $scope.status = 'Unable to load users data: ' + error.message;
            });
    }
    
    
    
}]);