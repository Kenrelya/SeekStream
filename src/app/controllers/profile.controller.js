angular.module('seekstream').controller('ProfileController', function (
    $state,
    $sce,
    $interval,
    Profile,
    Posts,
    Identity,
    Users,
    Informations
    ) {

    var vm = this;

    vm.identity = Identity.login.get().$promise.then(function(data) {
        vm.current_user = data;
    }, function () {
        vm.current_user = null;
    });

    vm.checkFollowStatus = function () {
        followed = [];

        angular.forEach(vm.current_user.profile.follow, function(value) {
            this.push(value.public_name);
        }, followed);

        if (followed.indexOf(vm.user_infos.public_name) != -1) {
            vm.follow_already = true;
        }
    }

    if ($state.params.user_id !== null) {
        Profile.one.get({user_id: $state.params.user_id}, function(data) {
            vm.data = data;
            Informations.one.get({ user_id: $state.params.user_id }).$promise.then(function(data) {
                vm.user_infos = data;
                vm.checkFollowStatus();
            }, function(err) {
                vm.error = err;
            });
    }, errorCbk);
    } else {
        Profile.self.get({}, function(data) {
            vm.data = data;
        },
        errorCbk
        );
    }


    vm.isMine = function() {
        if (vm.profileid === vm.currentuserid)
            return true;
        return false;
    }

    vm.modifyInfos = function() {
        $state.go('informations', {type: 'modify'});
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
