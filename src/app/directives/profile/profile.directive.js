angular.module('seekstream').directive('profile', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/directives/profile/profile.html',
		scope: false, /*{
			auth:'='
		}*/
		controller: 'ProfileController',
		controllerAs: 'profile',
		bindToController: true
	};
});
