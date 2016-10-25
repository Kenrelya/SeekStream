angular.module('seekstream').controller('LoginFormController', function($http, $state, identity) {
    var vm = this;

    // vm.authenticated = false;
    // vm.identity = new identity.login.get().$promise.then(function(data) {
    //     vm.authenticated = true;
    //     vm.current_user = data;
    // }, function () {
    //     console.log(vm.identity);
    // });

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
    });
