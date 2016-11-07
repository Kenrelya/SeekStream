angular.module('seekstream').factory('Tags', function ($resource) {
	return {
        list: $resource('http://localhost:5000/users/:user_id/tags', null,
		{
			'update': {method: 'PUT'}
		})
    }
});
