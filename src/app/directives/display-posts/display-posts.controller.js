angular.module('seekstream').controller('DisplayPostsController', function (Posts) {
    var vm = this;
    vm.new_post = {
        content: null
    };

    vm.getPosts = function () {
        Posts.self.query({profile_id: vm.profileid}, function(posts_data) {
            vm.data = posts_data;
        }, function(err){
            vm.error = "Error getting profile posts:" + err;
        });
    }
    vm.submitPost = function () {
        vm.send_post = {
            title: vm.new_post.title,
            content: vm.new_post.content
        };

        if (vm.currentuserid === vm.profileid) {
            Posts.self.save(vm.send_post, vm.successCbk, vm.errorCbk);
        } else {
            Posts.one.save(vm.send_post, {user_id: vm.profileuserid}, vm.successCbk, vm.errorCbk);
        }
    }

    vm.successCbk = function () {
        vm.new_post.title = null;
        vm.new_post.content = null;
        vm.getPosts();
    }

    vm.errorCbk = function (err) {s
        vm.error = "Error creating new post:" + err;
    }


    vm.getPosts();
});
