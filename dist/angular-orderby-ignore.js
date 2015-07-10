(function() {
    "use strict";
    function config($provide) {
        $provide.decorator("orderByFilter", function($delegate) {
            var previousState;
            return function(arr, predicate, reverse, ignore) {
                if (!!ignore) {
                    return previousState || arr;
                }
                previousState = $delegate.apply(null, arguments);
                return previousState;
            };
        });
    }
    angular.module("angular.orderby.ignore", []).config(config);
})();