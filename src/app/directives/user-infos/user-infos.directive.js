angular.module('seekstream').directive('userInfos', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/directives/user-infos/user-infos.html',
		scope: {
			profileid: '=',
			currentuserid: '='
		},
		controller: 'UserInfosController',
		controllerAs: 'info',
		bindToController: true
	};
});
