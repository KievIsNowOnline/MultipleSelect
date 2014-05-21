var app = angular.module('myModule', []);

app.controller('myController', function($scope){
	$scope.items = [
		{
			id:1,
			value:'Option 1'
		},
		{
			id:2,
			value:'Option 2'
		},
		{
			id:3,
			value:'Option 3'
		},
		{
			id:4,
			value:'Option 4'
		}

	];

	console.log($scope.items);
});

