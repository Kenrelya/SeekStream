angular.module('seekstream').controller('LoginFormController', function($http, $state, Identity) {
    var vm = this;

    vm.current_user = vm.authenticated;
    console.log(vm.current_user);
    vm.user = {
        username:"",
        password:""
    };

    vm.connexionUser = function() {
        Identity.login.save({
                username: vm.user.username,
                password: vm.user.password
            },
            vm.successLogin,
            vm.errorLogin);
    };

    vm.successLogin = function (data) {
        vm.current_user = data;
        $state.go('profile');
    };

    vm.errorLogin = function () {
        console.log('NOPE LOGIN');
    };

    vm.logoutCall = function () {
        vm.identity = Identity.logout.get().$promise.then(function () {
            console.log('Logged out');
            $state.go('home');
        });
    }

    vm.goSearch = function() {
        $state.go('search', {query: vm.search_bar.query});
    }

    vm.goHome = function() {
        $state.go('home');
    }

    });
