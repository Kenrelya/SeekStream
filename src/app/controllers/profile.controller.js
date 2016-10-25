angular.module('seekstream').controller('ProfileController', function (profile) {
	var vm = this;

	vm.data = {};
	vm.error = "Une erreur est survenue";
	profile.self.get({}, function(data) {
		console.log(data);
		vm.profile = data;
	}, function(err) {
		vm.error = "une erreur est survenue:" + err;
	})

});
