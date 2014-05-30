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
		},
		{
			id:4,
			value:'One Piece: Pirate Warriors',
			selected: false
		},
		{
			id:5,
			value:'Uncharted 3: Drake\'s Deception',
			selected: false
		},
		{
			id:6,
			value:'Assassin\'s Creed: Brotherhood',
			selected: false
		},
		{
			id:7,
			value:'Saint\'s Row 4',
			selected: false
		},
		{
			id:8,
			value:'Burnout: Paradise',
			selected: false
		},
		{
			id:9,
			value:'Grand Theft Auto: V',
			selected: false
		}

	];

	
});

