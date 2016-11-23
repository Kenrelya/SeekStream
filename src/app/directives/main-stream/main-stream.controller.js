angular.module('seekstream').controller('MainStreamController', function ($interval, $http, $sce) {
    var vm = this;

    vm.loading = true;
    vm.twitch_online = false;
    vm.hitbox_online = false;

    vm.user_infos = vm.userinfos;
    vm.mylink     = "https://player.twitch.tv/?channel=" + vm.user_infos.twitch_username;
    vm.streams    = $sce.trustAsResourceUrl(vm.mylink);
    vm.interval_time = 8000;

    vm.startCheckOnline = $interval(function() {
        $http.jsonp(
            'https://api.twitch.tv/kraken/streams/' + vm.user_infos.twitch_username + '?client_id=3q7fxx94uudt0r51zgf7sigu64fccvl&callback=JSON_CALLBACK')
            .success(function(response) {
                if (response.status === 404) {
                    vm.twitch_online = false;
                } else if (response.stream === null) {
                    vm.twitch_online = false;
                    vm.loading = false;
                } else {
                    if (angular.isDefined(vm.startCheckOnline)) {
                        $interval.cancel(vm.startCheckOnline);
                    }
                    vm.interval_time = 50000;
                    vm.loading = false;
                    vm.twitch_online = true;
                }
            });
    }, vm.interval_time);

});
