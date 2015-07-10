(function () {

  'use strict';

  /**
   * Add a fourth ignore argument to orderByFilter.
   * Will keep the current order state while ignore is true.
   * When ignore evaluates to a falsey value, the orderBy
   * filter will run like normal.
   */
  function config ($provide) {
    $provide.decorator('orderByFilter', function ($delegate) {
      var previousState;

      return function (arr, predicate, reverse, ignore) {
        if (!!ignore) {
          return previousState || arr;
        }

        previousState = $delegate.apply(null, arguments);

        return previousState;
      }
    });
  }

  angular
    .module('angular-orderby-ignore', [])
    .config(config);

}());
