angular.module('seekstream').directive('displayComments', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/directives/display-comments/display-comments.html',
		scope: {
			profileid: '=',
			currentuserid: '=',
			postid: '='
		},
		controller: 'DisplayCommentsController',
		controllerAs: 'comments',
		bindToController: true
	};
});