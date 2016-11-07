angular.module('seekstream').controller('UserInfosController', function ($state, Informations) {
    var vm = this;

    if (vm.profileid === vm.currentuserid) {
        Informations.self.get().$promise.then(function(data) {
            vm.data = data;
            console.log(vm.data);
        }, function(err) {
            vm.error = err;
        });
    } else {
        console.log( 'hey');
        Informations.one.get({ user_id: $state.params.user_id }).$promise.then(function(data) {
            vm.data = data;
        }, function(err) {
            vm.error = err;
        });
    }
    vm.isMine = function() {
        if (vm.profileid === vm.currentuserid)
            return true;
        return false;
    }

    vm.modifyInfos = function() {
        $state.go('informations', {type: 'modify'});
    }


});
