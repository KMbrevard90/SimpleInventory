angular.module('itemList').
  component('itemList', {
    templateUrl: 'components/item-list/item-list.template.html',
    controller: ['$http',
      function PhoneListController($http) {
        var vm = this;
        vm.orderByChoice = "name";
        vm.category = "appliance"

        $http.get('data/items.json').then(function(response){
          vm.items = response.data;
        });
      }
    ]
  });
