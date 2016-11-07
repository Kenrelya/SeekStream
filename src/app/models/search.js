angular.module('seekstream').factory('Search', function ($resource) {
	return {
		profiles: $resource('http://localhost:5000/search/')
	}
});
