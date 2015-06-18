var masterCardApp = angular.module('masterCardApp);

masterCardApp.controller('loginCtrl', ['$scope', '$modal',function($scope,$modal) {
  $scope.login = function() { window.alert("testing login"); };

  $scope.register = function(){

  	var modalInstance = $modal.open({
      templateUrl: 'registration.html',
      controller: registrationCtrl,
      scope: $scope
    });

    modalInstance.result.then(function () {
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  	
  }]);

  masterCardApp.controller('registrationCtrl', ['$scope','$modalInstance', function($scope,$modalInstance) {

  $scope.ok = function () {
  	window.alert("registering user...");
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

}]);