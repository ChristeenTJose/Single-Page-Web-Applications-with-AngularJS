(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.items = '';
        $scope.message = '';
        $scope.QuantityCheck = function(){
            var itemsArray = $scope.items.split(',');
            var n = itemsArray.length;
            if ($scope.items == ''){
                $scope.message = "Please enter data first";
            }else if(n <= 3){
                $scope.message = "Enjoy!";
            }else{
                $scope.message = "Too much!";
            }
        };
    }
})();
