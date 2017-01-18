(function () {
  angular.module('Angular1').service('ClientsService', ClientsService);
  ClientsService.$inject = ['$q', '$http'];
  function ClientsService($q, $http) {
    var data = [];
    var fetched;
    this.getData = function () {
      var promise;
      if (fetched) {
        promise = $q(function (resolve, reject) {
          resolve(data);
        });
      } else {
        promise = $http.get('clients').then(function (response) {
          data = response.data;
          fetched = true;
          return data;
        });
      }
      return promise;
    }
  }
})();
