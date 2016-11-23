angular.module('seekstream').factory('Users', function ($resource) {
	return {
		self: $resource('http://localhost:5000/users/:user_id', null,
		{
			'update': {method: 'PUT'}
		}),
		one: $resource('http://localhost:5000/users/:profile_id')
	}
});
