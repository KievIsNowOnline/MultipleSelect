var app = angular.module('myModule', []);

app.controller('myController', function($scope){
	$scope.items = [
		{
			id:1,
			value:'One Piece: Pirate Warriors',
			selected: true
		},
		{
			id:2,
			value:'Assassin\'s Creed',
			selected: false
		},
		{
			id:3,
			value:'Gran Turismo 5 XL',
			selected: false
		}

	];

	
});

