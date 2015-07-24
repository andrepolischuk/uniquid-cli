#!/usr/bin/env node
'use strict';
var meow = require('meow');
var uniquid = require('uniquid');

var cli = meow({
  help: [
    'Usage',
    '  uniquid [prefix]',
    '',
    'Examples',
    '  uniquid',
    '  uniquid hello'
  ]
});

console.log(uniquid(cli.input[0]));
