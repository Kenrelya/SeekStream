angular.module('seekstream').factory('usersFactory', function ($resource) {
	return {
		all: $resource('http://localhost:5000/users/'),
		getUser: $resource('http://localhost:5000/users/:user_id'),
		updateUser: $resource('http://localhost:5000/users/:user_id', null,
		{
			'update': {method: 'PUT'}
		})
	}
});
