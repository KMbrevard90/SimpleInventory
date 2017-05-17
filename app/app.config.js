angular.module('simpleInventory').
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/items', {
      template : '<item-list></item-list>'
    }).
    when('/items/:itemId', {
      template: '<item-detail></item-detail>'
    }).
    otherwise('/items');
}]);
