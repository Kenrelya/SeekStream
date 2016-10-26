angular.module('seekstream').controller('MainController', function ($scope, $state, identity) {

    var vm = this;

    vm.hello = 'main page';

    vm.identity = identity.login.get().$promise.then(function(data) {
        vm.authenticated = true;
        vm.current_user = data;
        $state.go('profile');
    }, function () {
    	vm.current_user = null;
        console.log(vm.identity);
    });

    console.log($scope);
});
