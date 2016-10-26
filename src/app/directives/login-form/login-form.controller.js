angular.module('seekstream').controller('LoginFormController', function($http, $state, identity) {
    var vm = this;

    vm.current_user = vm.authenticated;
    console.log(vm.current_user);
    vm.user = {
        username:"",
        password:""
    };

    vm.connexionUser = function() {
        identity.login.save({
                username: vm.user.username,
                password: vm.user.password
            },
            vm.successLogin,
            vm.errorLogin);
    };

    vm.successLogin = function (data) {
        vm.current_user = data;
        $state.go('profile');
        console.log(data);
    };

    vm.errorLogin = function () {
        console.log('NOPE LOGIN');
    };

    vm.registerUser = function () {
      $http.post('http://localhost:5000/register', {username: vm.user.username, password: vm.user.password}).
      success(function() {
        console.log("success");
      }).
      error(function() {
        console.log("error");
      });
    };

    vm.logoutCall = function () {
        vm.identity = identity.logout.get().$promise.then(function () {
            console.log('Logged out');
            $state.go('home');
        });
    }

    });
