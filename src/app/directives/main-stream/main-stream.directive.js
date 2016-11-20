angular.module('seekstream').directive('mainStream', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/directives/main-stream/main-stream.html',
		scope: {
			userinfos:'='
		},
		controller: 'MainStreamController',
		controllerAs: 'stream',
		bindToController: true
	};
});
