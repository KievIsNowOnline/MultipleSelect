
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

			$scope.keyword = "";

			$scope.searchFlag = false;

			$scope.toggleItem = function(item){
				
				//invert me master
				angular.forEach($scope.items, function(v,i){

					if(v.id === item.id){

						v.selected = !v.selected;
						
					}
					
				});



				
			
				
			};

			$scope.toggleSearchFlag = function(item){
				//Have to control the filtering brought by the keyword
				//Check if searchFlag is false, clear keyword
				if($scope.searchFlag === true){
					$scope.searchFlag = false;
					$scope.keyword = "";
				}
				else{
					$scope.searchFlag = true;
					
				}
				


				
			
				
			}

			
		}],
	}


});
