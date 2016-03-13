app.controller("sportsStoreCtrl", function ($scope, $http) {
  $http.get('data.json')
       .then(function(res){
          $scope.products = res.data;                
        });
});