(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.displayLunchCheck = function () {

    var message = determineLunchMessage($scope.lunchValue);
    $scope.lunchMessage = message;
  };

  function determineLunchMessage(lunchItems) {
    var message = "Please enter data first";
    if(lunchItems) {
      var itemCount = lunchItems.split(',').length;

      if(itemCount >= 1 && itemCount <= 3) {
        message = "Enjoy!";
      } else if(itemCount > 3) {
        message = "Too much!";
      }
    }
    return message;
  }


}
})();
