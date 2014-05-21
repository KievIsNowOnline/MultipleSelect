
app.directive('multiSelect',function(){
	return {
		restrict: 'C',
		templateUrl :'/multiSelectTemplate.html',
		replace:true,
		scope:{
			items: '='
		},
		controller: ['$scope', function($scope){

		}],
	}


});

app.directive('mayItem', function(){
	return{
		require: '^multiSelect',
		restrict: 'C',
		   link: function (scope, element, attrs, controller) {
              

                //function that binds the <li> element mousedown() event
                //click is not used as it brings race condition on onBlur and click of the <input> element
                element.bind('mousedown', function () {
                	alert('you have clicked a line item');
                });
            }

	}
});