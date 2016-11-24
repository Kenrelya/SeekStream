angular.module('seekstream').controller('MainStreamController', function ($interval, $http, $sce) {
    var vm = this;

    vm.loading       = true;
    vm.user_infos    = vm.userinfos;

    vm.twitch_online = false;
    vm.hitbox_online = false;
    twitch_api_url   = 'https://api.twitch.tv/kraken/streams/';
    hitbox_api_url   = 'http://api.hitbox.tv/media/live/';

    vm.mylink        = "https://player.twitch.tv/?channel=" + vm.user_infos.twitch_username;
    vm.interval_time = 4000;

    twitch_username = vm.userinfos.twitch_username + '?client_id=3q7fxx94uudt0r51zgf7sigu64fccvl&callback=JSON_CALLBACK';
    hitbox_username = vm.userinfos.hitbox_username;

    if (vm.user_infos.twitch_username !== '' && vm.user_infos.twitch_username !== null) {
        stream_username = vm.userinfos.twitch_username + '?client_id=3q7fxx94uudt0r51zgf7sigu64fccvl&callback=JSON_CALLBACK';

        vm.startTwitchOnline = $interval(function() {
        $http.jsonp(twitch_api_url + twitch_username)
            .success(function(response) {
                if (response.status === 404) {
                    vm.twitch_online = false;
                } else if (response.stream === null) {
                    vm.twitch_online = false;
                    vm.loading       = false;
                } else {
                    if (angular.isDefined(vm.startCheckOnline)) {
                        $interval.cancel(vm.startCheckOnline);
                    }

                    vm.mylink        = "https://player.twitch.tv/?channel=" + vm.user_infos.twitch_username;
                    vm.streams       = $sce.trustAsResourceUrl(vm.mylink);
                    vm.interval_time = 50000;
                    vm.loading       = false;
                    vm.twitch_online = true;
                }
            });
        }, vm.interval_time);

    } else if (vm.user_infos.hitbox_username !== '' && vm.user_infos.hitbox_username !== null) {
        vm.startHitboxOnline = $interval(function() {
            $http.get(hitbox_api_url + hitbox_username)
                .success(function(response) {
                        if (angular.isDefined(vm.startCheckOnline)) {
                            $interval.cancel(vm.startCheckOnline);
                        }
                        vm.mylink        = 'https://www.hitbox.tv/embed/' + hitbox_username;
                        vm.streams       = $sce.trustAsResourceUrl(vm.mylink);

                        vm.interval_time = 50000;
                        vm.loading       = false;
                        vm.hitbox_online = true;
                })
                .error(function(response) {
                    if (response.error === true) {
                        vm.hitbox_online = false;
                        vm.loading       = false;
                    }
                });
        }, vm.interval_time);
    }

});
