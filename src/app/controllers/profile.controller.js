angular.module('seekstream').controller('ProfileController', function (profile, identity) {
	var vm = this;

    vm.identity = identity.login.get().$promise.then(function(data) {
        vm.authenticated = true;
        vm.current_user = data;
    }, function () {
    	vm.current_user = null;
        console.log(vm.identity);
    });

	vm.error = "Une erreur est survenue";
	profile.self.get({}, function(data) {
		vm.profile = data;
	}, function(err) {
		vm.error = "une erreur est survenue:" + err;
	})

});
