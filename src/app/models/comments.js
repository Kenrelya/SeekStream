angular.module('seekstream').factory('Comments', function ($resource) {
	return {
        toPost: $resource('http://localhost:5000/comments/:post_id'),
        one: $resource('http://localhost:5000/comments/:comment_id', null,
		{
			'update': {method: 'PUT'}
		})
    }
});
