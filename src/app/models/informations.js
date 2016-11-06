angular.module('seekstream').factory('Informations', function ($resource) {
	return {
        self: $resource('http://localhost:5000/informations/', null,
        {
			'update': {method: 'PUT'}
		}),
        one: $resource('http://localhost:5000/informations/:profile_id', null,
		{
			'update': {method: 'PUT'}
		})
    }
});
