CRC For Node.js
=================================

[![CI](https://github.com/magiclen/node-crc/actions/workflows/ci.yml/badge.svg)](https://github.com/magiclen/node-crc/actions/workflows/ci.yml)

## Usage

You can use `crc` function to compute a CRC value by providing the length of bits, expression, reflection, an initial value and a final xor value. For example, if you want to compute a CRC-24 value.

```javascript
const result = crc.crc(0x00864cfb, 0x00000000, 24, 0x00b704ce, 0x00000000, 0x00000000, 0x00000000, false, Buffer.from('hello', 'utf8')).toString('hex');
// Arguments: low bits of expression, high bits of expression, the length of bits, low bits of the initial value, high bits of the initial value, low bits of the final xor value, high bits of the final xor value, reflection, the source data buffer
```

To simplify the usage, there are several common versions of CRC whose computing functions are already built-in.

* crc3gsm
* crc4itu
* crc4interlaken
* crc5epc
* crc5itu
* crc5usb
* crc6cdma2000_a
* crc6cdma2000_b
* crc6darc
* crc6gsm
* crc6itu
* crc7
* crc7umts
* crc8
* crc8cdma2000
* crc8darc
* crc8dvb_s2
* crc8ebu
* crc8icode
* crc8itu
* crc8maxim
* crc8rohc
* crc8wcdma
* crc10
* crc10cdma2000
* crc10gsm
* crc11
* crc12
* crc12cdma2000
* crc12gsm
* crc13bbc
* crc14darc
* crc14gsm
* crc15can
* crc15mpt1327
* crc16
* crc16ccitt_false
* crc16aug_ccitt
* crc16buypass
* crc16cdma2000
* crc16dds_110
* crc16dect_r
* crc16dect_x
* crc16dnp
* crc16en_13757
* crc16genibus
* crc16maxim
* crc16mcrf4cc
* crc16riello
* crc16t10_dif
* crc16teledisk
* crc16tms13157
* crc16usb
* crc_a
* crc16kermit
* crc16modbus
* crc16_x25
* crc16xmodem
* crc17can
* crc21can
* crc24
* crc24ble
* crc24flexray_a
* crc24flexray_b
* crc24lte_a
* crc24lte_b
* crc24os9
* crc30cdma
* crc32
* It also called `crc32b` in `mhash`.
* crc32mhash
* `mhash` is a common library which has two weird versions of CRC32 called `crc32` and `crc32b`. `crc32` and `crc32mhash` in this module are `crc32b` and `crc32` in mhash respectively.
* crc32bzip2
* crc32c
* crc32d
* crc32mpeg2
* crc32posix
* crc32q
* crc32jamcrc
* crc32xfer
* crc40gsm
* crc64
* crc64iso
* crc64we
* crc64jones

Input data and output data are buffers.

For instance,

```javascript
const result = crc.crc32(Buffer.from('hello', 'utf8')).toString('hex');
const result2 = crc.crc64(Buffer.from('world', 'utf8')).toString('hex');
```

## License

[MIT](LICENSE)
