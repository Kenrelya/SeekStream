angular.module('seekstream').factory('Profile', function ($resource) {
	return {
		self: $resource('http://localhost:5000/profile/'),
		one: $resource('http://localhost:5000/profile/:user_id'),
        follow: $resource('http://localhost:5000/profile/follow/:followed_user_id'),
        links: $resource('http://localhost:5000/profile/:user_id/links'),
        posts: $resource('http://localhost:5000/profile/:user_id/posts')
	}
});
