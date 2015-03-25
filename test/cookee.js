'use strict';

var cookie = require('../lib/cookee');
var test = require('tape');

test('cookie', function test(suite) {
  var it = suite.test;

  it('should return an empty object when there are no cookies', function it(t) {
    var value = cookie();

    t.equal(typeof value, 'object');
    t.deepEqual(value, {});
    t.end();
  });

  it('should return all cookies', function it(t) {
    document.cookie = 'one=1';
    document.cookie = 'two=2';

    var value = cookie();
    var expected = {
      one: '1',
      two: '2'
    };

    t.equal(typeof value, 'object');
    t.deepEqual(value, expected);
    t.end();
  });

  it('should return a cookie', function it(t) {
    var value = cookie('one');

    t.equal(value, '1');
    t.end();
  });

  it('should return undefined for a nonexistent cookie', function it(t) {
    var value = cookie('none');

    t.equal(value, undefined);
    t.end();
  });

  it('should set a cookie with a value', function it(t) {
    cookie('three', 3);

    t.ok(document.cookie.indexOf('three=3') > -1);
    t.end();
  });

  it('should set and get a cookie with "=" in the value', function it(t) {
    cookie('three', '3=3');

    t.equal(cookie('three', '3=3'));
    t.end();
  });

  it('should set a cookie with a domain', function it(t) {
    cookie('four', 4, {
      domain: 'test.com'
    });

    t.equal(document.cookie.indexOf('four=4'), -1);
    t.end();
  });

  it('should set a cookie with a path', function it(t) {
    cookie('five', 5, {
      path: '/test'
    });

    t.equal(document.cookie.indexOf('five=5'), -1);
    t.end();
  });

  it('should set a secure cookie', function it(t) {
    cookie('six', 6, {
      secure: true
    });

    t.equal(document.cookie.indexOf('six=6'), -1);
    t.end();
  });

  it('should remove a cookie with null as the second argument', function it(t) {
    cookie('one', null);

    t.equal(document.cookie.indexOf('one=1'), -1);
    t.end();
  });
});
