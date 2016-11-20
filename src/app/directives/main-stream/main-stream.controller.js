angular.module('seekstream').controller('MainStreamController', function ($interval, $http, $sce) {
    var vm = this;

    vm.twitch_online = false;
    vm.hitbox_online = false;

    vm.user_infos = vm.userinfos;
    vm.mylink     = "https://player.twitch.tv/?channel=" + vm.user_infos.twitch_username;
    vm.streams    = $sce.trustAsResourceUrl(vm.mylink);
    vm.interval_time = 15000;

    vm.startCheckOnline = $interval(function() {
        $http.jsonp(
            'https://api.twitch.tv/kraken/streams/' + vm.user_infos.twitch_username + '?client_id=3q7fxx94uudt0r51zgf7sigu64fccvl&callback=JSON_CALLBACK')
            .success(function(response) {
                if (response.stream !== null) {
                    vm.interval_time = 50000;
                    vm.twitch_online = true;

                } else {
                    if (angular.isDefined(vm.startCheckOnline)) {
                        $interval.cancel(vm.startCheckOnline);
                    }
                    vm.twitch_online = false;
                }
            });
    }, vm.interval_time);

});
