angular.module('seekstream').factory('users', function ($resource) {
	return {
		all: $resource('http://localhost:5000/users/'),
		info: $resource('http://localhost:5000/users/:user_id'),
		updateUser: $resource('http://localhost:5000/users/:user_id', null,
		{
			'update': {method: 'PUT'}
		})
	}
});
