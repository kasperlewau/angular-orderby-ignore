## angular-orderby-ignore ![travisci](https://travis-ci.org/kasperlewau/angular-orderby-ignore.svg?branch=master)
> adds a fourth parameter to the orderBy filter to halt ordering

#### installation
```
  bower install angular-orderby-ignore --save
```

### usage
```js
  angular.module('yourModule', [ 'angular.orderby.ignore' ]);
```
```js
  /** in controllers (etc) **/
  app.controller(function ($scope, orderByFilter) {
    var data      = [];
    var ignore    = true;
    var predicate = 'prop';

    $scope.exposedData = orderByFilter(data, predicate, null, ignore);
  });
```
```html
  <!-- in the view -->
  <div ng-repeat="d in data | orderBy:predicate:reverse:ignore"></div>
```

### testing
`npm install; npm test`

### License
MIT
