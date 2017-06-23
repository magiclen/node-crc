const crc = require('bindings')('crc');

console.log(crc.crc8cdma(Buffer.from('test', 'utf8')).toString('hex'));

module.exports = crc;
