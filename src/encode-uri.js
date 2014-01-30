angular.module('rt.encodeuri', []).filter('encodeUri', function ($window) {
    return $window.encodeURIComponent;
});
