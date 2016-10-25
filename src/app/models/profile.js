angular.module('seekstream').factory('profile', function ($resource) {
	return {
		self: $resource('http://localhost:5000/profile/'),
		one: $resource('http://localhost:5000/profile/:user_id'),
        follow: $resource('http://localhost:5000/profile/:user_id/follow'),
        links: $resource('http://localhost:5000/profile/:user_id/links'),
        posts: $resource('http://localhost:5000/profile/:user_id/posts')
	}
});
