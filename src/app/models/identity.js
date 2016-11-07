angular.module('seekstream').factory('Identity', function ($resource) {
	return {
		login:$resource('http://localhost:5000/login'),
        register: $resource('http://localhost:5000/register'),
        logout: $resource('http://localhost:5000/logout')
	}
});
