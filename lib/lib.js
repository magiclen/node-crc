"use strict";
/* eslint-disable camelcase */
Object.defineProperty(exports, "__esModule", { value: true });
exports.crc16riello = exports.crc16mcrf4cc = exports.crc16maxim = exports.crc16genibus = exports.crc16en_13757 = exports.crc16dnp = exports.crc16dect_x = exports.crc16dect_r = exports.crc16dds_110 = exports.crc16cdma2000 = exports.crc16buypass = exports.crc16aug_ccitt = exports.crc16ccitt_false = exports.crc16 = exports.crc15mpt1327 = exports.crc15can = exports.crc14gsm = exports.crc14darc = exports.crc13bbc = exports.crc12gsm = exports.crc12cdma2000 = exports.crc12 = exports.crc11 = exports.crc10gsm = exports.crc10cdma2000 = exports.crc10 = exports.crc8wcdma = exports.crc8rohc = exports.crc8maxim = exports.crc8itu = exports.crc8icode = exports.crc8ebu = exports.crc8dvb_s2 = exports.crc8darc = exports.crc8cdma2000 = exports.crc8 = exports.crc7umts = exports.crc7 = exports.crc6itu = exports.crc6gsm = exports.crc6darc = exports.crc6cdma2000_b = exports.crc6cdma2000_a = exports.crc5usb = exports.crc5itu = exports.crc5epc = exports.crc4interlaken = exports.crc4itu = exports.crc3gsm = exports.crc = void 0;
exports.crc64jones = exports.crc64we = exports.crc64iso = exports.crc64 = exports.crc40gsm = exports.crc32xfer = exports.crc32jamcrc = exports.crc32q = exports.crc32posix = exports.crc32mpeg2 = exports.crc32d = exports.crc32c = exports.crc32bzip2 = exports.crc32mhash = exports.crc32 = exports.crc30cdma = exports.crc24os9 = exports.crc24lte_b = exports.crc24lte_a = exports.crc24flexray_b = exports.crc24flexray_a = exports.crc24ble = exports.crc24 = exports.crc21can = exports.crc17can = exports.crc16xmodem = exports.crc16_x25 = exports.crc16modbus = exports.crc16kermit = exports.crc_a = exports.crc16usb = exports.crc16tms13157 = exports.crc16teledisk = exports.crc16t10_dif = void 0;
const _crc = require("../index.node");
/**
 * Create a CRC instance by providing the length of bits, expression, reflection, an initial value and a final xor value.
 */
const crc = (polyLow, polyHigh, bit, initialLow, initialHigh, finalXorLow, finalXorHigh, reflect, data) => {
    return _crc.crc(polyLow, polyHigh, bit, initialLow, initialHigh, finalXorLow, finalXorHigh, reflect, data);
};
exports.crc = crc;
/**
 * Check = 0x4, Poly = 0x3, Init = 0x0, Ref = false, XorOut = 0x7
 */
const crc3gsm = (data) => {
    return _crc.crc3gsm(data);
};
exports.crc3gsm = crc3gsm;
/**
 * Check = 0x7, Poly = 0x3 (rev: 0xC), Init = 0x0, Ref = true, XorOut = 0x0
 */
const crc4itu = (data) => {
    return _crc.crc4itu(data);
};
exports.crc4itu = crc4itu;
/**
 * Check = 0xB, Poly = 0x3, Init = 0xF, Ref = false, XorOut = 0xF
 */
const crc4interlaken = (data) => {
    return _crc.crc4interlaken(data);
};
exports.crc4interlaken = crc4interlaken;
/**
 * Check = 0x00, Poly = 0x09, Init = 0x09, Ref = false, XorOut = 0x00
 */
const crc5epc = (data) => {
    return _crc.crc5epc(data);
};
exports.crc5epc = crc5epc;
/**
 * Check = 0x07, Poly = 0x15 (rev: 0x15), Init = 0x00, Ref = true, XorOut = 0x00
 */
const crc5itu = (data) => {
    return _crc.crc5itu(data);
};
exports.crc5itu = crc5itu;
/**
 * Check = 0x19, Poly = 0x05 (rev: 0x14), Init = 0x1F, Ref = true, XorOut = 0x1F
 */
const crc5usb = (data) => {
    return _crc.crc5usb(data);
};
exports.crc5usb = crc5usb;
/**
 * Check = 0x0D, Poly = 0x27, Init = 0x3F, Ref = false, XorOut = 0x00
 */
const crc6cdma2000_a = (data) => {
    return _crc.crc6cdma2000_a(data);
};
exports.crc6cdma2000_a = crc6cdma2000_a;
/**
 * Check = 0x3B, Poly = 0x07, Init = 0x3F, Ref = false, XorOut = 0x00
 */
const crc6cdma2000_b = (data) => {
    return _crc.crc6cdma2000_b(data);
};
exports.crc6cdma2000_b = crc6cdma2000_b;
/**
 * Check = 0x26, Poly = 0x19 (rev: 0x26), Init = 0x00, Ref = true, XorOut = 0x00
 */
const crc6darc = (data) => {
    return _crc.crc6darc(data);
};
exports.crc6darc = crc6darc;
/**
 * Check = 0x13, Poly = 0x2F, Init = 0x00, Ref = false, XorOut = 0x3F
 */
const crc6gsm = (data) => {
    return _crc.crc6gsm(data);
};
exports.crc6gsm = crc6gsm;
/**
 * Check = 0x06, Poly = 0x03 (rev: 0x30), Init = 0x00, Ref = true, XorOut = 0x00
 */
const crc6itu = (data) => {
    return _crc.crc6itu(data);
};
exports.crc6itu = crc6itu;
/**
 * Check = 0x75, Poly = 0x09, Init = 0x00, Ref = false, XorOut = 0x00
 */
const crc7 = (data) => {
    return _crc.crc7(data);
};
exports.crc7 = crc7;
/**
 * Check = 0x61, Poly = 0x45, Init = 0x00, Ref = false, XorOut = 0x00
 */
const crc7umts = (data) => {
    return _crc.crc7umts(data);
};
exports.crc7umts = crc7umts;
/**
 * Check = 0xF4, Poly = 0x07, Init = 0x00, Ref = false, XorOut = 0x00
 */
const crc8 = (data) => {
    return _crc.crc8(data);
};
exports.crc8 = crc8;
/**
 * Check = 0xDA, Poly = 0x9B, Init = 0xFF, Ref = false, XorOut = 0x00
 */
const crc8cdma2000 = (data) => {
    return _crc.crc8cdma2000(data);
};
exports.crc8cdma2000 = crc8cdma2000;
/**
 * Check = 0x15, Poly = 0x39 (rev: 0x9C), Init = 0x00, Ref = true, XorOut = 0x00
 */
const crc8darc = (data) => {
    return _crc.crc8darc(data);
};
exports.crc8darc = crc8darc;
/**
 * Check = 0xBC, Poly = 0xD5, Init = 0x00, Ref = false, XorOut = 0x00
 */
const crc8dvb_s2 = (data) => {
    return _crc.crc8dvb_s2(data);
};
exports.crc8dvb_s2 = crc8dvb_s2;
/**
 * Check = 0x97, Poly = 0x1D (rev: 0xB8), Init = 0xFF, Ref = true, XorOut = 0x00
 */
const crc8ebu = (data) => {
    return _crc.crc8ebu(data);
};
exports.crc8ebu = crc8ebu;
/**
 * Check = 0x7E, Poly = 0x1D, Init = 0xFD, Ref = false, XorOut = 0x00
 */
const crc8icode = (data) => {
    return _crc.crc8icode(data);
};
exports.crc8icode = crc8icode;
/**
 * Check = 0xA1, Poly = 0x07, Init = 0x00, Ref = false, XorOut = 0x55
 */
const crc8itu = (data) => {
    return _crc.crc8itu(data);
};
exports.crc8itu = crc8itu;
/**
 * Check = 0xA1, Poly = 0x31 (rev: 0x8C), Init = 0x00, Ref = true, XorOut = 0x00
 */
const crc8maxim = (data) => {
    return _crc.crc8maxim(data);
};
exports.crc8maxim = crc8maxim;
/**
 * Check = 0xD0, Poly = 0x07 (rev: 0xE0), Init = 0xFF, Ref = true, XorOut = 0x00
 */
const crc8rohc = (data) => {
    return _crc.crc8rohc(data);
};
exports.crc8rohc = crc8rohc;
/**
 * Check = 0x25, Poly = 0x9B (rev: 0xD9), Init = 0x00, Ref = true, XorOut = 0x00
 */
const crc8wcdma = (data) => {
    return _crc.crc8wcdma(data);
};
exports.crc8wcdma = crc8wcdma;
/**
 * Check = 0x199, Poly = 0x233, Init = 0x000, Ref = false, XorOut = 0x000
 */
const crc10 = (data) => {
    return _crc.crc10(data);
};
exports.crc10 = crc10;
/**
 * Check = 0x233, Poly = 0x3D9, Init = 0x3FF, Ref = false, XorOut = 0x000
 */
const crc10cdma2000 = (data) => {
    return _crc.crc10cdma2000(data);
};
exports.crc10cdma2000 = crc10cdma2000;
/**
 * Check = 0x12A, Poly = 0x175, Init = 0x000, Ref = false, XorOut = 0x3FF
 */
const crc10gsm = (data) => {
    return _crc.crc10gsm(data);
};
exports.crc10gsm = crc10gsm;
/**
 * Check = 0x5A3, Poly = 0x385, Init = 0x01a, Ref = false, XorOut = 0x000
 */
const crc11 = (data) => {
    return _crc.crc11(data);
};
exports.crc11 = crc11;
/**
 * Check = 0xF5B, Poly = 0x80F, Init = 0x000, Ref = false, XorOut = 0x000
 */
const crc12 = (data) => {
    return _crc.crc12(data);
};
exports.crc12 = crc12;
/**
 * Check = 0xD4D, Poly = 0xF13, Init = 0xFFF, Ref = false, XorOut = 0x000
 */
const crc12cdma2000 = (data) => {
    return _crc.crc12cdma2000(data);
};
exports.crc12cdma2000 = crc12cdma2000;
/**
 * Check = 0xB34, Poly = 0xD31, Init = 0x000, Ref = false, XorOut = 0xFFF
 */
const crc12gsm = (data) => {
    return _crc.crc12gsm(data);
};
exports.crc12gsm = crc12gsm;
/**
 * Check = 0x04FA, Poly = 0x1CF5, Init = 0x0000, Ref = false, XorOut = 0x0000
 */
const crc13bbc = (data) => {
    return _crc.crc13bbc(data);
};
exports.crc13bbc = crc13bbc;
/**
 * Check = 0x082D, Poly = 0x0805 (rev: 0x2804), Init = 0x0000, Ref = true, XorOut = 0x0000
 */
const crc14darc = (data) => {
    return _crc.crc14darc(data);
};
exports.crc14darc = crc14darc;
/**
 * Check = 0x30AE, Poly = 0x202D, Init = 0x0000, Ref = false, XorOut = 0x3FFF
 */
const crc14gsm = (data) => {
    return _crc.crc14gsm(data);
};
exports.crc14gsm = crc14gsm;
/**
 * Check = 0x059E, Poly = 0x4599, Init = 0x0000, Ref = false, XorOut = 0x0000
 */
const crc15can = (data) => {
    return _crc.crc15can(data);
};
exports.crc15can = crc15can;
/**
 * Check = 0x2566, Poly = 0x6815, Init = 0x0000, Ref = false, XorOut = 0x0001
 */
const crc15mpt1327 = (data) => {
    return _crc.crc15mpt1327(data);
};
exports.crc15mpt1327 = crc15mpt1327;
/**
 * Check = 0xBB3D, Poly = 0x8005 (rev: 0xA001), Init = 0x0000, Ref = true, XorOut = 0x0000
 */
const crc16 = (data) => {
    return _crc.crc16(data);
};
exports.crc16 = crc16;
/**
 * Check = 0x29B1, Poly = 0x1021, Init = 0xFFFF, Ref = false, XorOut = 0x0000
 */
const crc16ccitt_false = (data) => {
    return _crc.crc16ccitt_false(data);
};
exports.crc16ccitt_false = crc16ccitt_false;
/**
 * Check = 0xE5CC, Poly = 0x1021, Init = 0x1D0F, Ref = false, XorOut = 0x0000
 */
const crc16aug_ccitt = (data) => {
    return _crc.crc16aug_ccitt(data);
};
exports.crc16aug_ccitt = crc16aug_ccitt;
/**
 * Check = 0xFEE8, Poly = 0x8005, Init = 0x0000, Ref = false, XorOut = 0x0000
 */
const crc16buypass = (data) => {
    return _crc.crc16buypass(data);
};
exports.crc16buypass = crc16buypass;
/**
 * Check = 0x4C06, Poly = 0xC867, Init = 0xFFFF, Ref = false, XorOut = 0x0000
 */
const crc16cdma2000 = (data) => {
    return _crc.crc16cdma2000(data);
};
exports.crc16cdma2000 = crc16cdma2000;
/**
 * Check = 0x9ECF, Poly = 0x8005, Init = 0x800D, Ref = false, XorOut = 0x0000
 */
const crc16dds_110 = (data) => {
    return _crc.crc16dds_110(data);
};
exports.crc16dds_110 = crc16dds_110;
/**
 * Check = 0x007E, Poly = 0x0589, Init = 0x800D, Ref = false, XorOut = 0x0001
 */
const crc16dect_r = (data) => {
    return _crc.crc16dect_r(data);
};
exports.crc16dect_r = crc16dect_r;
/**
 * Check = 0x007E, Poly = 0x0589, Init = 0x0000, Ref = false, XorOut = 0x0000
 */
const crc16dect_x = (data) => {
    return _crc.crc16dect_x(data);
};
exports.crc16dect_x = crc16dect_x;
/**
 * Check = 0xEA82, Poly = 0x3D65 (rev: 0xA6BC), Init = 0x0000, Ref = true, XorOut = 0xFFFF
 */
const crc16dnp = (data) => {
    return _crc.crc16dnp(data);
};
exports.crc16dnp = crc16dnp;
/**
 * Check = 0xC2B7, Poly = 0x3D65, Init = 0x0000, Ref = false, XorOut = 0xFFFF
 */
const crc16en_13757 = (data) => {
    return _crc.crc16en_13757(data);
};
exports.crc16en_13757 = crc16en_13757;
/**
 * Check = 0xD64E, Poly = 0x1021, Init = 0xFFFF, Ref = false, XorOut = 0xFFFF
 */
const crc16genibus = (data) => {
    return _crc.crc16genibus(data);
};
exports.crc16genibus = crc16genibus;
/**
 * Check = 0x44C2, Poly = 0x8005 (rev: 0xA001), Init = 0xFFFF, Ref = true, XorOut = 0xFFFF
 */
const crc16maxim = (data) => {
    return _crc.crc16maxim(data);
};
exports.crc16maxim = crc16maxim;
/**
 * Check = 0x6F91, Poly = 0x1021 (rev: 0x8408), Init = 0xFFFF, Ref = true, XorOut = 0x0000
 */
const crc16mcrf4cc = (data) => {
    return _crc.crc16mcrf4cc(data);
};
exports.crc16mcrf4cc = crc16mcrf4cc;
/**
 * Check = 0x63D0, Poly = 0x1021 (rev: 0x8408), Init = 0xB2AA, Ref = true, XorOut = 0x0000
 */
const crc16riello = (data) => {
    return _crc.crc16riello(data);
};
exports.crc16riello = crc16riello;
/**
 * Check = 0xD0DB, Poly = 0x8BB7, Init = 0x0000, Ref = false, XorOut = 0x0000
 */
const crc16t10_dif = (data) => {
    return _crc.crc16t10_dif(data);
};
exports.crc16t10_dif = crc16t10_dif;
/**
 * Check = 0x0FB3, Poly = 0xA097, Init = 0x0000, Ref = false, XorOut = 0x0000
 */
const crc16teledisk = (data) => {
    return _crc.crc16teledisk(data);
};
exports.crc16teledisk = crc16teledisk;
/**
 * Check = 0x26B1, Poly = 0x1021 (rev: 0x8408), Init = 0x89EC, Ref = true, XorOut = 0x0000
 */
const crc16tms13157 = (data) => {
    return _crc.crc16tms13157(data);
};
exports.crc16tms13157 = crc16tms13157;
/**
 * Check = 0xB4C8, Poly = 0x8005 (rev: 0xA001), Init = 0xFFFF, Ref = true, XorOut = 0xFFFF
 */
const crc16usb = (data) => {
    return _crc.crc16usb(data);
};
exports.crc16usb = crc16usb;
/**
 * Check = 0xBF05, Poly = 0x1021 (rev: 0x8408), Init = 0xC6C6, Ref = true, XorOut = 0x0000
 */
const crc_a = (data) => {
    return _crc.crc_a(data);
};
exports.crc_a = crc_a;
/**
 * Check = 0x2189, Poly = 0x1021 (rev: 0x8408), Init = 0x0000, Ref = true, XorOut = 0x0000
 */
const crc16kermit = (data) => {
    return _crc.crc16kermit(data);
};
exports.crc16kermit = crc16kermit;
/**
 * Check = 0x4B37, Poly = 0x8005 (rev: 0xA001), Init = 0xFFFF, Ref = true, XorOut = 0x0000
 */
const crc16modbus = (data) => {
    return _crc.crc16modbus(data);
};
exports.crc16modbus = crc16modbus;
/**
 * Check = 0x906E, Poly = 0x8005 (rev: 0xA001), Init = 0xFFFF, Ref = true, XorOut = 0xFFFF
 */
const crc16_x25 = (data) => {
    return _crc.crc16_x25(data);
};
exports.crc16_x25 = crc16_x25;
/**
 * Check = 0x31C3, Poly = 0x1021, Init = 0x0000, Ref = false, XorOut = 0x0000
 */
const crc16xmodem = (data) => {
    return _crc.crc16xmodem(data);
};
exports.crc16xmodem = crc16xmodem;
/**
 * Check = 0x04F03, Poly = 0x1685B, Init = 0x00000, Ref = false, XorOut = 0x00000
 */
const crc17can = (data) => {
    return _crc.crc17can(data);
};
exports.crc17can = crc17can;
/**
 * Check = 0x0ED841, Poly = 0x102899, Init = 0x000000, Ref = false, XorOut = 0x000000
 */
const crc21can = (data) => {
    return _crc.crc21can(data);
};
exports.crc21can = crc21can;
/**
 * Check = 0x21CF02, Poly = 0x864CFB, Init = 0xB704CE, Ref = false, XorOut = 0x000000
 */
const crc24 = (data) => {
    return _crc.crc24(data);
};
exports.crc24 = crc24;
/**
 * Check = 0xC25A56, Poly = 0x00065B (rev: 0xDA6000), Init = 0x555555, Ref = true, XorOut = 0x000000
 */
const crc24ble = (data) => {
    return _crc.crc24ble(data);
};
exports.crc24ble = crc24ble;
/**
 * Check = 0x7979BD, Poly = 0x5D6DCB, Init = 0xFEDCBA, Ref = false, XorOut = 0x000000
 */
const crc24flexray_a = (data) => {
    return _crc.crc24flexray_a(data);
};
exports.crc24flexray_a = crc24flexray_a;
/**
 * Check = 0x1F23B8, Poly = 0x5D6DCB, Init = 0xABCDEF, Ref = false, XorOut = 0x000000
 */
const crc24flexray_b = (data) => {
    return _crc.crc24flexray_b(data);
};
exports.crc24flexray_b = crc24flexray_b;
/**
 * Check = 0xCDE703, Poly = 0x864CFB, Init = 0x000000, Ref = false, XorOut = 0x000000
 */
const crc24lte_a = (data) => {
    return _crc.crc24lte_a(data);
};
exports.crc24lte_a = crc24lte_a;
/**
 * Check = 0x23EF52, Poly = 0x800063, Init = 0x000000, Ref = false, XorOut = 0x000000
 */
const crc24lte_b = (data) => {
    return _crc.crc24lte_b(data);
};
exports.crc24lte_b = crc24lte_b;
/**
 * Check = 0x200FA5, Poly = 0x800063, Init = 0xFFFFFF, Ref = false, XorOut = 0xFFFFFF
 */
const crc24os9 = (data) => {
    return _crc.crc24os9(data);
};
exports.crc24os9 = crc24os9;
/**
 * Check = 0x04C34ABF, Poly = 0x2030B9C7, Init = 0x3FFFFFFF, Ref = false, XorOut = 0x3FFFFFFF
 */
const crc30cdma = (data) => {
    return _crc.crc30cdma(data);
};
exports.crc30cdma = crc30cdma;
/**
 * Check = 0xCBF43926, Poly = 0x04C11DB7 (rev: 0xEDB88320), Init = 0xFFFFFFFF, Ref = true, XorOut = 0xFFFFFFFF
 */
const crc32 = (data) => {
    return _crc.crc32(data);
};
exports.crc32 = crc32;
/**
 * Check = 0x181989FC, Poly = 0x04C11DB7, Init = 0xFFFFFFFF, Ref = false, XorOut = 0xFFFFFFFF
 */
const crc32mhash = (data) => {
    return _crc.crc32mhash(data);
};
exports.crc32mhash = crc32mhash;
/**
 * Check = 0xFC891918, Poly = 0x04C11DB7, Init = 0xFFFFFFFF, Ref = false, XorOut = 0xFFFFFFFF
 */
const crc32bzip2 = (data) => {
    return _crc.crc32bzip2(data);
};
exports.crc32bzip2 = crc32bzip2;
/**
 * Check = 0xE3069283, Poly = 0x1EDC6F41 (rev: 0x82F63B78), Init = 0xFFFFFFFF, Ref = true, XorOut = 0xFFFFFFFF
 */
const crc32c = (data) => {
    return _crc.crc32c(data);
};
exports.crc32c = crc32c;
/**
 * Check = 0x87315576, Poly = 0xA833982B (rev: 0xD419CC15), Init = 0xFFFFFFFF, Ref = true, XorOut = 0xFFFFFFFF
 */
const crc32d = (data) => {
    return _crc.crc32d(data);
};
exports.crc32d = crc32d;
/**
 * Check = 0x0376E6E7, Poly = 0x04C11DB7, Init = 0xFFFFFFFF, Ref = false, XorOut = 0x00000000
 */
const crc32mpeg2 = (data) => {
    return _crc.crc32mpeg2(data);
};
exports.crc32mpeg2 = crc32mpeg2;
/**
 * Check = 0x765E7680, Poly = 0x04C11DB7, Init = 0x00000000, Ref = false, XorOut = 0xFFFFFFFF
 */
const crc32posix = (data) => {
    return _crc.crc32posix(data);
};
exports.crc32posix = crc32posix;
/**
 * Check = 0x3010BF7F, Poly = 0x814141AB, Init = 0x00000000, Ref = false, XorOut = 0x00000000
 */
const crc32q = (data) => {
    return _crc.crc32q(data);
};
exports.crc32q = crc32q;
/**
 * Check = 0x340BC6D9, Poly = 0x04C11DB7 (rev: 0xEDB88320), Init = 0xFFFFFFFF, Ref = true, XorOut = 0x00000000
 */
const crc32jamcrc = (data) => {
    return _crc.crc32jamcrc(data);
};
exports.crc32jamcrc = crc32jamcrc;
/**
 * Check = 0xBD0BE338, Poly = 0x000000AF, Init = 0x00000000, Ref = false, XorOut = 0x00000000
 */
const crc32xfer = (data) => {
    return _crc.crc32xfer(data);
};
exports.crc32xfer = crc32xfer;
/**
 * Check = 0xD4164FC646, Poly = 0x0004820009, Init = 0x0000000000, Ref = false, XorOut = 0xFFFFFFFFFF
 */
const crc40gsm = (data) => {
    return _crc.crc40gsm(data);
};
exports.crc40gsm = crc40gsm;
/**
 * Check = 0x6C40DF5F0B497347, Poly = 0x42F0E1EBA9EA3693, Init = 0x0000000000000000, Ref = false, XorOut = 0x0000000000000000
 */
const crc64 = (data) => {
    return _crc.crc64(data);
};
exports.crc64 = crc64;
/**
 * Check = 0xB90956C775A41001, Poly = 0x000000000000001B (rev: 0xD800000000000000), Init = 0xFFFFFFFFFFFFFFFF, Ref = true, XorOut = 0xFFFFFFFFFFFFFFFF
 */
const crc64iso = (data) => {
    return _crc.crc64iso(data);
};
exports.crc64iso = crc64iso;
/**
 * Check = 0x62EC59E3F1A4F00A, Poly = 0x42F0E1EBA9EA3693, Init = 0xFFFFFFFFFFFFFFFF, Ref = false, XorOut = 0xFFFFFFFFFFFFFFFF
 */
const crc64we = (data) => {
    return _crc.crc64we(data);
};
exports.crc64we = crc64we;
/**
 * Check = 0xE9C6D914C4B8D9CA, Poly = 0xAD93D23594C935A9 (rev: 0x95AC9329AC4BC9B5), Init = 0x0000000000000000, Ref = true, XorOut = 0x0000000000000000
 */
const crc64jones = (data) => {
    return _crc.crc64jones(data);
};
exports.crc64jones = crc64jones;
