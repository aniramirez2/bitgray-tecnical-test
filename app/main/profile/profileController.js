angular.module('myApp.profile')
.controller('profileCtrl', ['$scope', 'profileService', 
        function ($scope, profileService) {

    $scope.status;
    $scope.users;

    getUsers();

    function getUsers() {
        profileService.getUsers()
            .then(function (response) {
                $scope.users = response.data;
            }, function (error) {
                $scope.status = 'Unable to load users data: ' + error.message;
            });
    }

    $scope.updateCustomer = function (id) {
        var cust;
        for (var i = 0; i < $scope.customers.length; i++) {
            var currCust = $scope.customers[i];
            if (currCust.ID === id) {
                cust = currCust;
                break;
            }
        }

         dataFactory.updateCustomer(cust)
          .then(function (response) {
              $scope.status = 'Updated Customer! Refreshing customer list.';
          }, function (error) {
              $scope.status = 'Unable to update customer: ' + error.message;
          });
    };

    $scope.insertCustomer = function () {
        //Fake customer data
        var cust = {
            ID: 10,
            FirstName: 'JoJo',
            LastName: 'Pikidily'
        };
        dataFactory.insertCustomer(cust)
            .then(function (response) {
                $scope.status = 'Inserted Customer! Refreshing customer list.';
                $scope.customers.push(cust);
            }, function(error) {
                $scope.status = 'Unable to insert customer: ' + error.message;
            });
    };

    $scope.deleteCustomer = function (id) {
        dataFactory.deleteCustomer(id)
        .then(function (response) {
            $scope.status = 'Deleted Customer! Refreshing customer list.';
            for (var i = 0; i < $scope.customers.length; i++) {
                var cust = $scope.customers[i];
                if (cust.ID === id) {
                    $scope.customers.splice(i, 1);
                    break;
                }
            }
            $scope.orders = null;
        }, function (error) {
            $scope.status = 'Unable to delete customer: ' + error.message;
        });
    };

    $scope.getCustomerOrders = function (id) {
        dataFactory.getOrders(id)
        .then(function (response) {
            $scope.status = 'Retrieved orders!';
            $scope.orders = response.data;
        }, function (error) {
            $scope.status = 'Error retrieving customers! ' + error.message;
        });
    };
}]);