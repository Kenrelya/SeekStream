angular.module('seekstream').directive('loginForm', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/directives/login-form/login-form.html',
		scope: false,
		controller: 'LoginFormController',
		controllerAs: 'login',
		bindToController: true
	};
});
