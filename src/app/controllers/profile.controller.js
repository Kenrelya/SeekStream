angular.module('seekstream').controller('ProfileController', function ($state, Profile, Posts, Identity, Users) {
    var vm = this;

    vm.identity = Identity.login.get().$promise.then(function(data) {
        vm.current_user = data;
    }, function () {
        vm.current_user = null;
    });

    vm.new_public_name = {
        content: null
    };

    if ($state.params.user_id !== null) {
        Profile.one.get({user_id: $state.params.user_id}, function(data) {
            vm.data = data;
        }, errorCbk);
    } else {
        Profile.self.get({}, function(data) {
            vm.data = data;
            console.log(vm.data);
        },
        errorCbk
        );
    }

    vm.followUser = function() {
        Profile.follow.save({followed_user_id: $state.params.user_id}, {}, function() {
            console.log('follow successful');
        },
        errorCbk);
    }

    vm.isMine = function() {
        if (vm.current_user.profile._id === vm.data._id) {
            return true;
        }
        return false;
    }

    vm.goProfile = function(user_profile) {
        console.log(user_profile);
        $state.go('profile', {user_id: user_profile});
    }

    var errorCbk = function(err) {
        vm.error = "une erreur est survenue:" + err;
    };
});
