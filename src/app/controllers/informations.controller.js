angular.module('seekstream').controller('InformationsController', function ($state, Users, Identity, Informations) {
	var vm = this;
	vm.page_title = "";

	vm.identity = Identity.login.get().$promise.then(function(data) {
        vm.current_user = data;
		vm.page_title = 'Modify your informations';
		Informations.self.get().$promise.then(function(data) {
            vm.data = data;
        }, function(err) {
            vm.error = err;
        });
    }, function () {
        vm.current_user = null;
		vm.page_title = 'Register to SeekStream';
		vm.data = {};
    });

	vm.submitInfos = function() {
		to_send = vm.data;
		Informations.self.update(to_send, function() {
			console.log('success submit infos');
			$state.go('profile');
		}, function(err){
			console.log(err);
			console.log('error submit infos');
			vm.error = err;
		});
	}

	vm.cancelModify = function() {
		$state.go('profile');
	}


  });
