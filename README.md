CRC For Node.js
=================================

## Introduction

This module can compute different types of CRC checksum by using N-API.

## Installation

Run `npm i` or `npm install` to install.

```bash
npm install node-crc
```

If you want to save this module to package.json, please add `--save` option.

```bash
npm install node-crc --save
```

## Initialization

Import this module by using `require` function.

```javascript
const crc = require('node-crc');
```

## Usage

You can use `crc` function to compute a CRC value by providing the length of bits, expression, reflection, an initial value and a final xor value. For example, if you want to compute a CRC-24 value.

```javascript
var result = crc.crc(24, false, 0x00864cfb, 0x00000000, 0x00b704ce, 0x00000000, 0x00000000, 0x00000000, Buffer.from('hello', 'utf8')).toString('hex');
// Arguments: the length of bits, reflection, low bits of expression, high bits of expression, low bits of the initial value, high bits of the initial value, low bits of the final xor value, high bits of the final xor value, the source data buffer
```

To simplify the usage, there are several common versions of CRC whose computing functions are already built-in.

  * crc8(crc8atm)
  * crc8cdma
  * crc16(crc16ibm)
  * crc16ccitt(crcccitt)
  * crc32(crc32ieee, also called crc32b in `mhash`)
  * crc32mhash
    * `mhash` is a common library which has two weird versions of CRC32 called `crc32` and `crc32b`. `crc32` and `crc32mhash` in this module are `crc32b` and `crc32` in mhash respectively.
  * crc32c
  * crc64(crc64ecma)
  * crc64iso
  * crc64jones

Input data and output data are buffers.

For instance,

```javascript
var result = crc.crc32(Buffer.from('hello', 'utf8')).toString('hex');
var result2 = crc.crc64(Buffer.from('world', 'utf8')).toString('hex');
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
npm install
npm test
```

## Benchmark

To run the benchmark suite, first install the dependencies, then run `npm run benchmark`:

```bash
npm install
npm run benchmark
```

Here is my result,

```bash
CRC-8
  - 76 milliseconds
  - Result HEX: 60
  ✓ another crc module (77ms)
  - 67 milliseconds
  - Result HEX: 60
  ✓ this module (67ms)

CRC-16
  - 84 milliseconds
  - Result HEX: 94bc
  ✓ another crc module (84ms)
  - 70 milliseconds
  - Result HEX: 94bc
  ✓ this module (70ms)

CRC-32
  - 122 milliseconds
  - Result HEX: ab526987
  ✓ another crc module (122ms)
  - 68 milliseconds
  - Result HEX: ab526987
  ✓ this module (68ms)

CRC-64
  - I cannot compute CRC-64!
  ✓ another crc module
  - 74 milliseconds
  - Result HEX: aa9d25ffe7f7c6fd
  ✓ this module (74ms)
```

## License

[MIT](LICENSE)
