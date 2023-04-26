/* eslint-disable camelcase */

import {
    crc8,
    crc8cdma2000,
    crc16,
    crc16ccitt_false,
    crc24,
    crc,
    crc32,
    crc32mhash,
    crc32c,
    crc64,
    crc64iso,
    crc64we,
    crc64jones,
} from "../src/lib";

describe("CRC-8 Family", function () {
    it("should calculate CRC-8(CRC-8-ATM)", function () {
        const result = crc8(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("92");
    });

    it("should calculate CRC-8-CDMA", function () {
        const result = crc8cdma2000(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("4c");
    });
});

describe("CRC-16 Family", function () {
    it("should calculate CRC-16(CRC-16-IBM)", function () {
        const result = crc16(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("34d2");
    });

    it("should calculate CRC-16-CCITT(CRC-CCITT)", function () {
        const result = crc16ccitt_false(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("d26e");
    });
});

describe("CRC-24 Family", function () {
    it("should calculate CRC-24", function () {
        const result = crc24(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("47f58a");
    });

    it("should calculate CRC-24 (using poly)", function () {
        const result = crc(0x00864cfb, 0x00000000, 24, 0x00b704ce, 0x00000000, 0x00000000, 0x00000000, false, Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("47f58a");
    });
});

describe("CRC-32 Family", function () {
    it("should calculate CRC-32(CRC-32-IEEE) which is also called crc32b in mhash library", function () {
        const result = crc32(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("3610a686");
    });

    it("should calculate crc32 according to the mhash library", function () {
        const result = crc32mhash(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("3d653119");
    });

    it("should calculate CRC-32-C", function () {
        const result = crc32c(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("9a71bb4c");
    });
});

describe("CRC-64 Family", function () {
    it("should calculate CRC-64(CRC-64-ECMA)", function () {
        const result = crc64(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("40544a306137b6ec");
    });
    it("should calculate CRC-64-ISO", function () {
        const result = crc64iso(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("3c3eeee2d8100000");
    });
    it("should calculate CRC-64-WE", function () {
        const result = crc64we(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("ec5388479a7c913f");
    });
    it("should calculate CRC-64-JONES", function () {
        const result = crc64jones(Buffer.from("123456789", "utf8")).toString("hex");
        expect(result).toBe("e9c6d914c4b8d9ca");
    });
});
