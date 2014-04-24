'use strict';

describe('Service: pathProvider', function () {

  // load the service's module
  beforeEach(module('ak2App'));

  // instantiate service
  var pathProvider;
  beforeEach(inject(function (_pathProvider_) {
    pathProvider = _pathProvider_;
  }));

  it('should do something', function () {
    expect(!!pathProvider).toBe(true);
  });

});
