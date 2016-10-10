angular.module('seekstream').directive('acmeNavbar', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/navbar/navbar.html',
        scope: {
            creationDate: '='
        },
        controller: 'NavbarController',
        controllerAs: 'vm',
        bindToController: true
    };
});
