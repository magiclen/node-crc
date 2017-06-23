'use strict';

const expect = require('chai').expect;
const mlog = require('mocha-logger');
const crc = require('crc');

const _crc = require('../index');

var a = '';
for (let i = 0; i < 10000000; ++i) {
  a += 'COO';
}
var buffer = Buffer.from(a, 'utf8');

describe('CRC-8', function() {

  var startTime, endTime;

  it('another crc module', function() {
    var result;
    startTime = Date.now();
    result = crc.crc8(buffer).toString(16);
    endTime = Date.now();
    mlog.log(endTime - startTime, 'milliseconds');
    mlog.log('Result HEX:', result);
  });

  it('this module', function() {
    var result;
    startTime = Date.now();
    result = _crc.crc8(buffer).toString('hex');
    endTime = Date.now();
    mlog.log(endTime - startTime, 'milliseconds');
    mlog.log('Result HEX:', result);
  });
});

describe('CRC-16', function() {

  var startTime, endTime;

  it('another crc module', function() {
    var result;
    startTime = Date.now();
    result = crc.crc16(buffer).toString(16);
    endTime = Date.now();
    mlog.log(endTime - startTime, 'milliseconds');
    mlog.log('Result HEX:', result);
  });

  it('this module', function() {
    var result;
    startTime = Date.now();
    result = _crc.crc16(buffer).toString('hex');
    endTime = Date.now();
    mlog.log(endTime - startTime, 'milliseconds');
    mlog.log('Result HEX:', result);
  });
});

describe('CRC-32', function() {

  var startTime, endTime;

  it('another crc module', function() {
    var result;
    startTime = Date.now();
    result = crc.crc32(buffer).toString(16);
    endTime = Date.now();
    mlog.log(endTime - startTime, 'milliseconds');
    mlog.log('Result HEX:', result);
  });

  it('this module', function() {
    var result;
    startTime = Date.now();
    result = _crc.crc32(buffer).toString('hex');
    endTime = Date.now();
    mlog.log(endTime - startTime, 'milliseconds');
    mlog.log('Result HEX:', result);
  });
});

describe('CRC-64', function() {

  var startTime, endTime;

  it('another crc module', function() {
    mlog.log('I cannot compute CRC-64!');
  });

  it('this module', function() {
    var result;
    startTime = Date.now();
    result = _crc.crc64(buffer).toString('hex');
    endTime = Date.now();
    mlog.log(endTime - startTime, 'milliseconds');
    mlog.log('Result HEX:', result);
  });
});
