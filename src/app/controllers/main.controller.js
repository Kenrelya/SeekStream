angular.module('seekstream').controller('MainController', function (usersFactory) {

    var vm = this;

    vm.hello = 'main page';
    vm.authenticated = false;

    // exemple get all users
    //vm.all_users = usersFactory.all.query();
    // exemple get one specific user
  /*  vm.user = usersFactory.getUser.get({user_id: '7e147cad51edc917e1ff084'}).$promise.then(function(data) {
        vm.one_guy = data;
    }, function (error) {
        vm.result = 'error :' + error;
    });*/
});
