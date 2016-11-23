angular.module('seekstream').directive('displayPosts', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/directives/display-posts/display-posts.html',
		scope: {
			profileid: '=',
			currentuserid: '=',
			twitchusername: '='
		},
		controller: 'DisplayPostsController',
		controllerAs: 'posts',
		bindToController: true
	};
});
