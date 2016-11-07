angular.module('seekstream').controller('MainController', function ($state, Identity) {

    var vm = this;

    vm.hello = 'main page';

    vm.identity = Identity.login.get().$promise.then(function(data) {
        vm.current_user = data;
        $state.go('profile');
    }, function () {
    	vm.current_user = null;
    });

    vm.connexionUser = function() {
        Identity.login.save({
                username: vm.new_account.username,
                password: vm.new_account.password
            },
            vm.successLogin,
            vm.errorLogin);
    };

    vm.registerUser = function () {
        Identity.register.save({
            username: vm.new_account.username,
            password: vm.new_account.password
        }, function() {
            console.log("successful registration");
            vm.connexionUser();
        }, function(err) {
            vm.error = err;
            console.log("error");
        });
    };

    vm.successLogin = function() {
        $state.go('informations', {type: 'register'});
    }

    vm.errorLogin = function(err) {
        vm.error = err;
    }

});
