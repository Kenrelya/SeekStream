angular.module('seekstream').directive('displayPosts', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/directives/display-posts/display-posts.html',
		scope: {
			profileid: '='
		},
		controller: 'DisplayPostsController',
		controllerAs: 'posts',
		bindToController: true
	};
});
