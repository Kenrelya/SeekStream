angular.module('seekstream').factory('Informations', function ($resource) {
	return {
        self: $resource('http://localhost:5000/informations/', null,
        {
			'update': {method: 'PUT'}
		}),
        one: $resource('http://localhost:5000/informations/:user_id', null,
		{
			'update': {method: 'PUT'}
		})
    }
});
