angular.module('myApp')
.controller('picturesCtrl', ['$scope', 'profileService','$rootScope',
function ($scope, profileService, $rootcope) {

    $scope.status;
    $scope.albums;
    $scope.userId = $rootcope.userId;
    getAlbums($scope.userId);    
    
    
    function getAlbums(id) {
        profileService.getAlbums(id)
            .then(function (response) {
                $scope.albums = response.data;
                angular.forEach(response.data, function(item ,$index) {
                    profileService.getPhotos(item.id)
                        .then(function (response) {
                            $scope.albums[$index].photos= response.data;
                        }, function (error) {
                            $scope.status = 'Unable to load users data: ' + error.message;
                        });   
                    console.log('album', $scope.albums)
                })
            }, function (error) {
                $scope.status = 'Unable to load users data: ' + error.message;
            });
    }
    
    
    
}]);