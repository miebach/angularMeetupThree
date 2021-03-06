'use strict';

describe('Controller: RoutecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('ak2App'));

  var RoutecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoutecontrollerCtrl = $controller('RoutecontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
