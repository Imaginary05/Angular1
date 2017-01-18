(function () {
  angular.module('Angular1').controller('ClientsCollectionController', ClientsCollectionController);
  ClientsCollectionController.$inject = ['$scope', 'ClientsService'];
  function ClientsCollectionController($scope, service) {
    service.getData().then(function (response) {
      $scope.clientsCollection = response;
    });
    $scope.showDetails = function (client) {
      $scope.clientDetails = client;
    }
  }
})();
