'use strict';
var test = require('ava');
var execFile = require('exec-file');
var pkg

test('should return version', function (t) {
  t.plan(2);

  execFile('cli.js', ['--version'], {cwd: __dirname}, function (err, stdout) {
    t.ifError(err);
    t.true(stdout.trim().length > 0);
  });
});

test('should return value', function (t) {
  t.plan(2);

  execFile('cli.js', {cwd: __dirname}, function (err, stdout) {
    t.ifError(err);
    t.true(stdout.trim().length > 0);
  });
});
