/* eslint-disable camelcase */

import {
    crc,
    crc16,
    crc16ccitt_false,
    crc24,
    crc32,
    crc32c,
    crc32mhash,
    crc64,
    crc64iso,
    crc64jones,
    crc64we,
    crc8,
    crc8cdma2000,
} from "../src/lib.js";

describe("CRC-8 Family", () => {
    it("should calculate CRC-8(CRC-8-ATM)", () => {
        const result = crc8(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("92");
    });

    it("should calculate CRC-8-CDMA", () => {
        const result = crc8cdma2000(Buffer.from("hello", "utf8")).toString(
            "hex",
        );
        expect(result).toBe("4c");
    });
});

describe("CRC-16 Family", () => {
    it("should calculate CRC-16(CRC-16-IBM)", () => {
        const result = crc16(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("34d2");
    });

    it("should calculate CRC-16-CCITT(CRC-CCITT)", () => {
        const result = crc16ccitt_false(Buffer.from("hello", "utf8")).toString(
            "hex",
        );
        expect(result).toBe("d26e");
    });
});

describe("CRC-24 Family", () => {
    it("should calculate CRC-24", () => {
        const result = crc24(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("47f58a");
    });

    it("should calculate CRC-24 (using poly)", () => {
        const result = crc(
            0x00864cfb,
            0x00000000,
            24,
            0x00b704ce,
            0x00000000,
            0x00000000,
            0x00000000,
            false,
            Buffer.from("hello", "utf8"),
        ).toString("hex");
        expect(result).toBe("47f58a");
    });
});

describe("CRC-32 Family", () => {
    it("should calculate CRC-32(CRC-32-IEEE) which is also called crc32b in mhash library", () => {
        const result = crc32(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("3610a686");
    });

    it("should calculate crc32 according to the mhash library", () => {
        const result = crc32mhash(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("3d653119");
    });

    it("should calculate CRC-32-C", () => {
        const result = crc32c(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("9a71bb4c");
    });
});

describe("CRC-64 Family", () => {
    it("should calculate CRC-64(CRC-64-ECMA)", () => {
        const result = crc64(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("40544a306137b6ec");
    });
    it("should calculate CRC-64-ISO", () => {
        const result = crc64iso(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("3c3eeee2d8100000");
    });
    it("should calculate CRC-64-WE", () => {
        const result = crc64we(Buffer.from("hello", "utf8")).toString("hex");
        expect(result).toBe("ec5388479a7c913f");
    });
    it("should calculate CRC-64-JONES", () => {
        const result = crc64jones(Buffer.from("123456789", "utf8")).toString(
            "hex",
        );
        expect(result).toBe("e9c6d914c4b8d9ca");
    });
});
