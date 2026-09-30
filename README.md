CRC For Node.js
=================================

[![CI](https://github.com/magiclen/node-crc/actions/workflows/ci.yml/badge.svg)](https://github.com/magiclen/node-crc/actions/workflows/ci.yml)

To compute CRC values by providing the length of bits, expression, reflection, an initial value and a final xor value. It has many built-in CRC functions.

## Requirements and Installation

Node.js 24 or later and Rust 1.88 or later are required. Install Rust with [rustup](https://rustup.rs/) and the native linker for your platform (a C compiler on Linux/macOS or the MSVC build tools on Windows).

```sh
npm install node-crc
```

Installation compiles the native module from source using the included `Cargo.lock`. There are no prebuilt platform packages. Package managers that block dependency build scripts must allow the `node-crc` install script; for pnpm, approve `node-crc` with `pnpm approve-builds` and rebuild it with `pnpm rebuild node-crc`. If npm requires script approval, use `npm install-scripts approve node-crc` followed by `npm rebuild node-crc`.

## Usage

### Built-in CRC Functions

To simplify the usage, there are several common versions of CRC whose computing functions are already built-in.

- crc3gsm
- crc4itu
- crc4interlaken
- crc5epc
- crc5itu
- crc5usb
- crc6cdma2000_a
- crc6cdma2000_b
- crc6darc
- crc6gsm
- crc6itu
- crc7
- crc7umts
- crc8
- crc8cdma2000
- crc8darc
- crc8dvb_s2
- crc8ebu
- crc8icode
- crc8itu
- crc8maxim
- crc8rohc
- crc8wcdma
- crc10
- crc10cdma2000
- crc10gsm
- crc11
- crc12
- crc12cdma2000
- crc12gsm
- crc13bbc
- crc14darc
- crc14gsm
- crc15can
- crc15mpt1327
- crc16
- crc16ccitt_false
- crc16aug_ccitt
- crc16buypass
- crc16cdma2000
- crc16dds_110
- crc16dect_r
- crc16dect_x
- crc16dnp
- crc16en_13757
- crc16genibus
- crc16maxim
- crc16mcrf4cc
- crc16riello
- crc16t10_dif
- crc16teledisk
- crc16tms37157
    - `crc16tms13157` is still available but deprecated, because the old name has a typo.
- crc16usb
- crc_a
- crc16kermit
- crc16modbus
- crc16_x25
- crc16xmodem
- crc17can
- crc21can
- crc24
- crc24ble
- crc24flexray_a
- crc24flexray_b
- crc24lte_a
- crc24lte_b
- crc24os9
- crc30cdma
- crc32
    - It is also called `crc32b` in `mhash`.
- crc32mhash
    - `mhash` is a common library which has two weird versions of CRC32 called `crc32` and `crc32b`. `crc32` and `crc32mhash` in this module are `crc32b` and `crc32` in mhash respectively.
- crc32bzip2
- crc32c
- crc32d
- crc32mpeg2
- crc32posix
- crc32q
- crc32jamcrc
- crc32xfer
- crc40gsm
- crc64
- crc64iso
- crc64we
- crc64jones
    - This is CRC-64/REDIS, which uses the Jones polynomial with an initial value of zero.

The input data can be a `Buffer` or a `Uint8Array`. The output is a `Buffer` which contains the CRC value in big-endian byte order. Its length is the number of bits of the CRC divided by 8, rounded up.

For instance,

```typescript
import { crc32, crc64 } from "node-crc";

const result = crc32(Buffer.from("hello", "utf8")).toString("hex");
const result2 = crc64(new TextEncoder().encode("world")).toString("hex");
```

### Custom CRC

You can use the `crc` function to compute a CRC value by providing the length of bits, expression, reflection, an initial value and a final xor value. For example, if you want to compute a CRC-24 value,

```typescript
import { crc } from "node-crc";

const result = crc(
    { bits: 24, poly: 0x864cfb, initial: 0xb704ce },
    Buffer.from("hello", "utf8"),
).toString("hex");
```

The options are,

- `bits`: The width of the CRC in bits. It must be between `1` and `64`.
- `poly`: The polynomial. When `reflect` is `true`, pass the reversed polynomial (for example, `0xEDB88320` for CRC-32).
- `initial`: The initial value. Pass it as it is listed in CRC catalogs, even when `reflect` is `true`. The default value is `0`.
- `finalXor`: The value to XOR with the final result. The default value is `0`.
- `reflect`: Whether to reflect both the input bytes and the final result. The default value is `false`.

The values of `poly`, `initial` and `finalXor` can be numbers or bigints. Use bigints if they are larger than `Number.MAX_SAFE_INTEGER`, such as the values of a 64-bit CRC. Invalid options throw an error.

### Compute Large Data

The `CRC` class can compute a CRC value chunk by chunk, so you do not need to load all the data into memory. Every built-in CRC has a static method of the same name to create a `CRC` instance, and the constructor takes the same options as the `crc` function.

```typescript
import { createReadStream } from "node:fs";

import { CRC } from "node-crc";

const crc32 = CRC.crc32();

for await (const chunk of createReadStream("/path/to/file")) {
    crc32.update(chunk);
}

const result = crc32.digest().toString("hex");
```

The `update` and `reset` methods return the instance itself, so calls can be chained. You can call `digest` many times, and call `update` again after calling `digest`. Call `reset` to compute another CRC value with the same instance.

## License

[MIT](LICENSE)
