angular.module('seekstream').controller('SearchController', function ($scope, $state, Identity, Search) {
    var vm = this;

    vm.identity = Identity.login.get().$promise.then(function(data) {
        vm.current_user = data;
    }, function () {
    	vm.current_user = null;
    });

    vm.query = $state.params.query;

    vm.querySearch = function (query) {
    	Search.profiles.query({user: query}).$promise.then(function(data) {
    		vm.query_result = data;
    		if (vm.query_result.length === 0)
    		{
    			vm.results = "No profile found with this name";
    		}
    	}, function (err) {
    		vm.error = err;
    	})
    }

    vm.goProfile = function(profileid) {
        $state.go('profile', {user_id: profileid});
    }

    vm.querySearch(vm.query);
});
