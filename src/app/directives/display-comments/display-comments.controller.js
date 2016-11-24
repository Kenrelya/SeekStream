angular.module('seekstream').controller('DisplayCommentsController', function (Comments) {
    var vm = this;
    vm.new_comment = {
        content: null
    };

    vm.getComments = function () {
        Comments.toPost.query({post_id: vm.postid}, function(comments_data) {
            vm.data = comments_data;
            console.log(comments_data);
        }, function(err){
            vm.error = "Error getting profile comments:" + err;
        });
    }

    vm.submitComment = function () {
        vm.send_comment = {
            content: vm.new_comment.content
        };

        if (vm.currentuserid === vm.profileid) {
            Comments.toPost.save({post_id: vm.postid}, vm.send_comment, vm.successCbk, vm.errorCbk);
        } else {
            Comments.one.save(vm.send_comment, vm.successCbk, vm.errorCbk);
        }
    }

    vm.successCbk = function () {
        vm.new_comment.content = null;
        vm.getComments();
    }

    vm.errorCbk = function (err) {
        vm.error = "Error creating new post:" + err;
    }

    vm.getComments();
});
