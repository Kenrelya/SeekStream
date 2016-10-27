angular.module('seekstream').controller('ProfileController', function (profile, identity) {
	var vm = this;

    vm.identity = identity.login.get().$promise.then(function(data) {
        vm.authenticated = true;
        vm.current_user = data;
    }, function () {
    	vm.current_user = null;
    });

	vm.error = "Une erreur est survenue";
	profile.self.get({}, function(data) {
		vm.data = data;
        console.log(vm.profile);
	}, function(err) {
		vm.error = "une erreur est survenue:" + err;
	})

});
