// one file
// NOTE: the immediately invoked function expression 
// is used to exemplify different files and is not required
(function(){
   // declaring the module in one file / anonymous function
   // (only pass a second parameter THIS ONE TIME as a redecleration creates bugs
   // which are very hard to dedect)
   angular.module('myApp.pictures', []);
   angular.module('myApp.profile', []);    
})();


// another file and/or another anonymous function
(function(){   
 // using the function form of use-strict...
 "use strict";
  // accessing the module in another. 
  // this can be done by calling angular.module without the []-brackets
  angular.module('myApp.pictures', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/pictures', {
        templateUrl: 'main/pictures/picturesView.html',
        controller: 'picturesCtrl'
      });
    }])
    .controller('picturesCtrl', [function(){
      //..
    }])

  // appending another service/controller/filter etc to the same module-call inside the same file
    .service('picturesService', [function(){ 
    //.. 
    }]);

  // you can of course use angular.module('mymod') here as well
  angular.module('myApp.profile', ['ngRoute'])
      .config(['$routeProvider', function($routeProvider) {
          $routeProvider.when('/profile', {
            templateUrl: 'main/profile/profileView.html',
            controller: 'profileCtrl'
          });
      }]);    
  
})();