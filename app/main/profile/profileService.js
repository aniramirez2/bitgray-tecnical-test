angular.module('myApp.profile')
.service('profileService', ['$http', function ($http) {

        var urlBase = 'http://jsonplaceholder.typicode.com';

        this.getUsers = function () {
            return $http.get(urlBase + '/users' );
        };

        this.getUser = function (id) {
            return $http.get(urlBase + '/users/' + id);
        };

        this.insertUser = function (user) {
            return $http.post(urlBase + '/users', user);
        };

        this.updateUser = function (user) {
            return $http.put(urlBase + '/users/' + cust.ID, user)
        };

        this.deleteUser = function (id) {
            return $http.delete(urlBase + '/users/' + id);
        };

    }]);