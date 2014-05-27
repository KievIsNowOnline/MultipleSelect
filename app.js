var app = angular.module('myModule', []);

app.controller('myController', function($scope){
	$scope.items = [
		{
			id:1,
			value:'Option 1',
			selected: true
		},
		{
			id:2,
			value:'Option 2',
			selected: false
		},
		{
			id:3,
			value:'Option 3',
			selected: false
		}

	];

	
});

