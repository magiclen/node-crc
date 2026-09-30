import assert from "node:assert/strict";
import { Buffer } from "node:buffer";
import { describe, it } from "node:test";

import {
    CRC,
    crc,
    crc3gsm,
    crc4interlaken,
    crc4itu,
    crc5epc,
    crc5itu,
    crc5usb,
    crc6cdma2000_a,
    crc6cdma2000_b,
    crc6darc,
    crc6gsm,
    crc6itu,
    crc7,
    crc7umts,
    crc8,
    crc8cdma2000,
    crc8darc,
    crc8dvb_s2,
    crc8ebu,
    crc8icode,
    crc8itu,
    crc8maxim,
    crc8rohc,
    crc8wcdma,
    crc10,
    crc10cdma2000,
    crc10gsm,
    crc11,
    crc12,
    crc12cdma2000,
    crc12gsm,
    crc13bbc,
    crc14darc,
    crc14gsm,
    crc15can,
    crc15mpt1327,
    crc16,
    crc16_x25,
    crc16aug_ccitt,
    crc16buypass,
    crc16ccitt_false,
    crc16cdma2000,
    crc16dds_110,
    crc16dect_r,
    crc16dect_x,
    crc16dnp,
    crc16en_13757,
    crc16genibus,
    crc16kermit,
    crc16maxim,
    crc16mcrf4cc,
    crc16modbus,
    crc16riello,
    crc16t10_dif,
    crc16teledisk,
    crc16tms13157,
    crc16tms37157,
    crc16usb,
    crc16xmodem,
    crc17can,
    crc21can,
    crc24,
    crc24ble,
    crc24flexray_a,
    crc24flexray_b,
    crc24lte_a,
    crc24lte_b,
    crc24os9,
    crc30cdma,
    crc32,
    crc32bzip2,
    crc32c,
    crc32d,
    crc32jamcrc,
    crc32mhash,
    crc32mpeg2,
    crc32posix,
    crc32q,
    crc32xfer,
    crc40gsm,
    crc64,
    crc64iso,
    crc64jones,
    crc64we,
    crc_a,
} from "../src/index.ts";

describe("CRC-8 Family", () => {
    it("should calculate CRC-8(CRC-8-ATM)", () => {
        assert.equal(crc8(Buffer.from("hello", "utf8")).toString("hex"), "92");
    });

    it("should calculate CRC-8-CDMA", () => {
        assert.equal(crc8cdma2000(Buffer.from("hello", "utf8")).toString("hex"), "4c");
    });
});

describe("CRC-16 Family", () => {
    it("should calculate CRC-16(CRC-16-IBM)", () => {
        assert.equal(crc16(Buffer.from("hello", "utf8")).toString("hex"), "34d2");
    });

    it("should calculate CRC-16-CCITT(CRC-CCITT)", () => {
        assert.equal(crc16ccitt_false(Buffer.from("hello", "utf8")).toString("hex"), "d26e");
    });
});

describe("CRC-24 Family", () => {
    it("should calculate CRC-24", () => {
        assert.equal(crc24(Buffer.from("hello", "utf8")).toString("hex"), "47f58a");
    });

    it("should calculate CRC-24 (using poly)", () => {
        const result = crc(
            { bits: 24, poly: 0x864cfb, initial: 0xb704ce },
            Buffer.from("hello", "utf8"),
        );
        assert.equal(result.toString("hex"), "47f58a");
    });
});

describe("CRC-32 Family", () => {
    it("should calculate CRC-32(CRC-32-IEEE) which is also called crc32b in mhash library", () => {
        assert.equal(crc32(Buffer.from("hello", "utf8")).toString("hex"), "3610a686");
    });

    it("should calculate crc32 according to the mhash library", () => {
        assert.equal(crc32mhash(Buffer.from("hello", "utf8")).toString("hex"), "3d653119");
    });

    it("should calculate CRC-32-C", () => {
        assert.equal(crc32c(Buffer.from("hello", "utf8")).toString("hex"), "9a71bb4c");
    });
});

describe("CRC-64 Family", () => {
    it("should calculate CRC-64(CRC-64-ECMA)", () => {
        assert.equal(crc64(Buffer.from("hello", "utf8")).toString("hex"), "40544a306137b6ec");
    });

    it("should calculate CRC-64-ISO", () => {
        assert.equal(crc64iso(Buffer.from("hello", "utf8")).toString("hex"), "3c3eeee2d8100000");
    });

    it("should calculate CRC-64-WE", () => {
        assert.equal(crc64we(Buffer.from("hello", "utf8")).toString("hex"), "ec5388479a7c913f");
    });

    it("should calculate CRC-64-JONES", () => {
        assert.equal(
            crc64jones(Buffer.from("123456789", "utf8")).toString("hex"),
            "e9c6d914c4b8d9ca",
        );
    });
});

// The check value of a CRC is the CRC of the ASCII string "123456789".
const checks: [(data: Uint8Array) => Buffer, string][] = [
    [crc3gsm, "04"],
    [crc4itu, "07"],
    [crc4interlaken, "0b"],
    [crc5epc, "00"],
    [crc5itu, "07"],
    [crc5usb, "19"],
    [crc6cdma2000_a, "0d"],
    [crc6cdma2000_b, "3b"],
    [crc6darc, "26"],
    [crc6gsm, "13"],
    [crc6itu, "06"],
    [crc7, "75"],
    [crc7umts, "61"],
    [crc8, "f4"],
    [crc8cdma2000, "da"],
    [crc8darc, "15"],
    [crc8dvb_s2, "bc"],
    [crc8ebu, "97"],
    [crc8icode, "7e"],
    [crc8itu, "a1"],
    [crc8maxim, "a1"],
    [crc8rohc, "d0"],
    [crc8wcdma, "25"],
    [crc10, "0199"],
    [crc10cdma2000, "0233"],
    [crc10gsm, "012a"],
    [crc11, "05a3"],
    [crc12, "0f5b"],
    [crc12cdma2000, "0d4d"],
    [crc12gsm, "0b34"],
    [crc13bbc, "04fa"],
    [crc14darc, "082d"],
    [crc14gsm, "30ae"],
    [crc15can, "059e"],
    [crc15mpt1327, "2566"],
    [crc16, "bb3d"],
    [crc16ccitt_false, "29b1"],
    [crc16aug_ccitt, "e5cc"],
    [crc16buypass, "fee8"],
    [crc16cdma2000, "4c06"],
    [crc16dds_110, "9ecf"],
    [crc16dect_r, "007e"],
    [crc16dect_x, "007f"],
    [crc16dnp, "ea82"],
    [crc16en_13757, "c2b7"],
    [crc16genibus, "d64e"],
    [crc16maxim, "44c2"],
    [crc16mcrf4cc, "6f91"],
    [crc16riello, "63d0"],
    [crc16t10_dif, "d0db"],
    [crc16teledisk, "0fb3"],
    [crc16tms37157, "26b1"],
    [crc16usb, "b4c8"],
    [crc_a, "bf05"],
    [crc16kermit, "2189"],
    [crc16modbus, "4b37"],
    [crc16_x25, "906e"],
    [crc16xmodem, "31c3"],
    [crc17can, "004f03"],
    [crc21can, "0ed841"],
    [crc24, "21cf02"],
    [crc24ble, "c25a56"],
    [crc24flexray_a, "7979bd"],
    [crc24flexray_b, "1f23b8"],
    [crc24lte_a, "cde703"],
    [crc24lte_b, "23ef52"],
    [crc24os9, "200fa5"],
    [crc30cdma, "04c34abf"],
    [crc32, "cbf43926"],
    [crc32mhash, "181989fc"],
    [crc32bzip2, "fc891918"],
    [crc32c, "e3069283"],
    [crc32d, "87315576"],
    [crc32mpeg2, "0376e6e7"],
    [crc32posix, "765e7680"],
    [crc32q, "3010bf7f"],
    [crc32jamcrc, "340bc6d9"],
    [crc32xfer, "bd0be338"],
    [crc40gsm, "d4164fc646"],
    [crc64, "6c40df5f0b497347"],
    [crc64iso, "b90956c775a41001"],
    [crc64we, "62ec59e3f1a4f00a"],
    [crc64jones, "e9c6d914c4b8d9ca"],
    [crc16tms13157, "26b1"],
];

describe("Check values", () => {
    const data = Buffer.from("123456789", "utf8");

    for (const [f, check] of checks) {
        it(`should calculate the check value of ${f.name}`, () => {
            assert.equal(f(data).toString("hex"), check);
        });
    }
});

describe("Uint8Array input", () => {
    it("accepts a plain Uint8Array, not only a Buffer", () => {
        const data = new TextEncoder().encode("hello");
        assert.equal(crc32(data).toString("hex"), "3610a686");
        assert.equal(
            crc({ bits: 24, poly: 0x864cfb, initial: 0xb704ce }, data).toString("hex"),
            "47f58a",
        );
    });
});

describe("Custom CRC", () => {
    const data = Buffer.from("123456789", "utf8");

    it("matches the built-in CRC-32 when the polynomial is reflected", () => {
        const result = crc(
            {
                bits: 32,
                poly: 0xedb88320,
                initial: 0xffffffff,
                finalXor: 0xffffffff,
                reflect: true,
            },
            data,
        );
        assert.deepEqual(result, crc32(data));
    });

    it("matches the built-in CRC-64 when the values are bigints", () => {
        const result = crc(
            { bits: 64, poly: 0x42f0e1eba9ea3693n, initial: 0n, finalXor: 0n },
            data,
        );
        assert.deepEqual(result, crc64(data));
    });

    it("matches the built-in CRC-12 whose width is not a multiple of 8", () => {
        const result = crc({ bits: 12, poly: 0x80f }, data);
        assert.deepEqual(result, crc12(data));
    });

    it("rejects bits outside 1 to 64 instead of crashing the process", () => {
        assert.throws(() => crc({ bits: 0, poly: 0x7 }, data), /`bits` must be between 1 and 64/);
        assert.throws(() => crc({ bits: 65, poly: 0x7 }, data), /`bits` must be between 1 and 64/);
    });
});

describe("CRC class", () => {
    const data = Buffer.from("123456789", "utf8");

    it("computes the same value when data is updated chunk by chunk", () => {
        const c = CRC.crc32();
        c.update(data.subarray(0, 4)).update(data.subarray(4));
        assert.deepEqual(c.digest(), crc32(data));
    });

    it("can get the value many times and reset to the initial state", () => {
        const c = CRC.crc16();
        c.update(data);
        assert.deepEqual(c.digest(), c.digest());
        c.reset().update(data);
        assert.deepEqual(c.digest(), crc16(data));
    });

    it("computes a custom CRC", () => {
        const c = new CRC({ bits: 24, poly: 0x864cfb, initial: 0xb704ce });
        c.update(Buffer.from("he", "utf8")).update(Buffer.from("llo", "utf8"));
        assert.equal(c.digest().toString("hex"), "47f58a");
    });
});
