#!/usr/bin/env node

'use strict';

var uniquid = require('uniquid');
var program = require('commander');
var pkg = require('./package');

program
  .version(pkg.version)
  .usage('[prefix]');

program.on('--help', function() {
  console.log('  Examples:');
  console.log();
  console.log('    # Unique ID');
  console.log('    uniquid');
  console.log();
  console.log('    # Prefixed unique ID');
  console.log('    uniquid hello');
  console.log();
});

program.parse(process.argv);
console.log(uniquid(program.args[0]));
