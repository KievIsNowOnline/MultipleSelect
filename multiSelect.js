
app.directive('multiSelect',function(){
	return {
		restrict: 'C',
		templateUrl :'/multiSelectTemplate.html',
		replace:true,
		scope:{
			items: '='
		},
		controller: ['$scope', function($scope){

			$scope.toggleSelectFlag = function(flag){
					angular.forEach($scope.items, function(v,i){
						v.selected = flag;
				})
			}



			this.toggleItem = function(item){
				
				//invert me master
				angular.forEach($scope.items, function(v,i){

					if(v.id === item.id){
						v.selected = !v.selected;
					}
					
				});

				//manual $digest() call. I dunno why this is needed.
				$scope.$digest();
				
			}

			 $scope.$watch(
			 	function () { return $scope.items; }, 
			 	function (newItems) {
		 			
                    $scope.items = newItems;
                        },true);
		}],
	}


});

app.directive('multiSelectItem', function(){
	return{
		require: '^multiSelect',
		restrict: 'C',
		   link: function (scope, element, attrs, controller) {
              

                //function that binds the <li> element mousedown() event
                //click is not used as it brings race condition on onBlur and click of the <input> element
                element.bind('mousedown', function () {
                	
                	controller.toggleItem(scope.item)
                	
                });
            }

	}
});