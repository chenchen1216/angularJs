
 angular.module('app', [])
            .controller('MyController', ['$scope', function MyController($scope) {
            	<!--初始化化计数器的值-->
  				$scope.counter = 0;
  				<!--定义增加函数-->
  				$scope.add = function (amount) {
    				$scope.counter += amount;
  				};
                $scope.clock = {
                    now: new Date(),
					count : 0
                };
                var updateClock = function () {
                    $scope.clock.now = new Date();
                    $scope.clock.count +=1;
                };
                setInterval(function () {
                    $scope.$apply(updateClock());
                }, 1000);
                updateClock();

            }]);

