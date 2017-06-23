'use strict';

const expect = require('chai').expect;
const ocrc = require('crc');

const crc = require('../index');

describe('CRC-8 Family', function() {
  it('should caculate CRC-8(CRC-8-ATM)', function() {
    var result = crc.crc8(Buffer.from('hello', 'utf8')).toString('hex');
    expect(result).to.equal('92');
  });
  it('should caculate CRC-8-CDMA', function() {
    var result = crc.crc8cdma(Buffer.from('hello', 'utf8')).toString('hex');
    expect(result).to.equal('4c');
  });
});

describe('CRC-16 Family', function() {
  it('should caculate CRC-16(CRC-16-IBM)', function() {
    var result = crc.crc16(Buffer.from('hello', 'utf8')).toString('hex');
    expect(result).to.equal('34d2');
  });
  it('should caculate CRC-16-CCITT(CRC-CCITT)', function() {
    var result = crc.crcccitt(Buffer.from('hello', 'utf8')).toString('hex');
    expect(result).to.equal('d26e');
  });
});

describe('CRC-32 Family', function() {
  it('should caculate CRC-32(CRC-32-IEEE) which is also called crc32b in mhash library', function() {
    var result = crc.crc32(Buffer.from('hello', 'utf8')).toString('hex');
    expect(result).to.equal('3610a686');
  });
  it('should caculate crc32 according to the mhash library', function() {
    var result = crc.crc32mhash(Buffer.from('hello', 'utf8')).toString('hex');
    expect(result).to.equal('3d653119');
  });
  it('should caculate CRC-32-C', function() {
    var result = crc.crc32c(Buffer.from('hello', 'utf8')).toString('hex');
    expect(result).to.equal('9a71bb4c');
  });
});

describe('CRC-64 Family', function() {
  it('should caculate CRC-64(CRC-64-ECMA)', function() {
    var result = crc.crc64(Buffer.from('hello', 'utf8')).toString('hex');
    expect(result).to.equal('ec5388479a7c913f');
  });
  it('should caculate CRC-64-ISO', function() {
    var result = crc.crc64iso(Buffer.from('hello', 'utf8')).toString('hex');
    expect(result).to.equal('3c3eeee2d8100000');
  });
});

describe('CRC-24 Family', function() {
  it('should caculate CRC-24', function() {
    var result = crc.crc(24, false, 0x00864cfb, 0x00000000, 0x00b704ce, 0x00000000, 0x00000000, 0x00000000, Buffer.from('hello', 'utf8')).toString('hex');
    expect(result).to.equal(ocrc.crc24('hello').toString(16));
  });
});
