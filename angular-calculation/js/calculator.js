
app.controller("CalculatorController",['$scope',function($scope){

	$scope.lumens_options=[375,600,900,1125,1600];
	//used to set starting value and get the selected value from the user as well
	$scope.current_lumens=600;

	$scope.current_cost=12;
	$scope.current_hours=3;
	$scope.total_days=365;

	//set conversion rates
		$scope.inc_conversion = .0625;
		$scope.hal_conversion = .0450;
		$scope.cfl_conversion = .0146;
		$scope.led_conversion = .0125;

		$scope.calculate = function(){
			
			$scope.inc_wattage = ($scope.current_lumens * $scope.inc_conversion).toFixed(1);
			$scope.hal_wattage = ($scope.current_lumens * $scope.hal_conversion).toFixed(1);
			$scope.cfl_wattage = ($scope.current_lumens * $scope.cfl_conversion).toFixed(1);
			$scope.led_wattage = ($scope.current_lumens * $scope.led_conversion).toFixed(1);

			if($scope.current_hours > 24){ $scope.current_hours = 24; }
			if($scope.current_hours< 1){ $scope.current_hours = ''; }
			if($scope.current_cost > 99){ $scope.current_cost = 99; }
			if($scope.current_cost < 1){ $scope.current_cost = ''; }

			var total_hours = $scope.total_days * $scope.current_hours;
			
			var cost = $scope.current_cost / 100;
			
			
			

			$scope.inc_finalcost = ((($scope.inc_wattage * total_hours) / 1000) * cost).toFixed(2);
			$scope.hal_finalcost = ((($scope.hal_wattage * total_hours) / 1000) * cost).toFixed(2);
			$scope.cfl_finalcost = ((($scope.cfl_wattage * total_hours) / 1000) * cost).toFixed(2);
			$scope.led_finalcost = ((($scope.led_wattage * total_hours) / 1000) * cost).toFixed(2);


		}

		$scope.calculate();
}]);