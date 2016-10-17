angular.module('seekstream').controller('LoginFormController', function($http) {
    var vm = this;

    vm.user = {
        username:"",
        password:""
    };

    vm.connexionUser = function() {
        $http.post('http://localhost:5000/login', {username: vm.user.username, password: vm.user.password}).
        success(function() {
            console.log("succes");
        }).
        error(function() {
            console.log("error");
        });
      };
    vm.registerUser = function () {
      console.log("test")
      $http.post('http://localhost:5000/register', {username: vm.user.username, password: vm.user.password}).
      success(function() {
        console.log("success");
      }).
      error(function() {
        console.log("error");
      });
    };
    });
