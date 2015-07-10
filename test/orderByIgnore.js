(function () {

  'use strict';

  describe('orderby-ignore', function () {
    var $obFilter, $scope;

    var data = [
      { name:'John',  phone:'555-1212', age:10 },
      { name:'Mary',  phone:'555-9876', age:19 },
      { name:'Mike',  phone:'555-4321', age:21 },
      { name:'Adam',  phone:'555-5678', age:35 },
      { name:'Julie', phone:'555-8765', age:29 }
    ];

    beforeEach(function () {
      module('angular.orderby.ignore');

      inject(function ($injector) {
        $obFilter = $injector.get('orderByFilter');
        $scope    = $injector.get('$rootScope').$new();
      });
    });

    it('accepts a fourth argument (ignore)', function () {
      var str = $obFilter.toString();
      expect(str.split(/\n/)[0].indexOf('ignore')).to.not.equal(-1);
    });

    context('ignore:false', function () {
      it('orders like usual', function () {
        expect($obFilter(data, '-age', null, false)[0].name).to.equal('Adam');
      });
    });

    context('ignore:true', function () {
      it('does not order', function () {
        expect($obFilter(data, '-age', null, true)[0].name).to.equal('John');
      });
    });
  });

}());
