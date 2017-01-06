angular.module('myApp')
.service('profileService', ['$http', function ($http) {

        var urlBase = 'http://jsonplaceholder.typicode.com';

        this.getUsers = function() {
            return $http.get(urlBase + '/users' );
        };

        this.getUser = function(id) {
            return $http.get(urlBase + '/users/' + id);
        };

        this.getAlbums = function() {
            return $http.get(urlBase + '/albums' + id );
        };

    }]);