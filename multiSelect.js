
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



			$scope.toggleItem = function(item){
				
				//invert me master
				angular.forEach($scope.items, function(v,i){

					if(v.id === item.id){

						v.selected = !v.selected;
						
					}
					
				});

				//manual $digest() call. I dunno why this is needed.
			
				
			}

			
		}],
	}


});
