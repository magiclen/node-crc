/* eslint-disable camelcase */

/**
 * Check platform and arch to load correct prebuild binary
 */
const arch = process.arch;
const platform = process.platform;
const binary = `../bin/${platform}-${arch}.node`;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const _crc = require(binary);

/**
 * Create a CRC instance by providing the length of bits, expression, reflection, an initial value and a final xor value.
 */
export const crc = (
    polyLow: number, polyHigh: number, bit: number, initialLow: number, initialHigh: number, finalXorLow: number, finalXorHigh: number, reflect: boolean, data: Buffer
): Buffer => {
    return _crc.crc(
        polyLow, polyHigh, bit, initialLow, initialHigh, finalXorLow, finalXorHigh, reflect, data
    );
};

/**
 * Check = 0x4, Poly = 0x3, Init = 0x0, Ref = false, XorOut = 0x7
 */
export const crc3gsm = (data: Buffer): Buffer => {
    return _crc.crc3gsm(data);
};

/**
 * Check = 0x7, Poly = 0x3 (rev: 0xC), Init = 0x0, Ref = true, XorOut = 0x0
 */
export const crc4itu = (data: Buffer): Buffer => {
    return _crc.crc4itu(data);
};

/**
 * Check = 0xB, Poly = 0x3, Init = 0xF, Ref = false, XorOut = 0xF
 */
export const crc4interlaken = (data: Buffer): Buffer => {
    return _crc.crc4interlaken(data);
};

/**
 * Check = 0x00, Poly = 0x09, Init = 0x09, Ref = false, XorOut = 0x00
 */
export const crc5epc = (data: Buffer): Buffer => {
    return _crc.crc5epc(data);
};

/**
 * Check = 0x07, Poly = 0x15 (rev: 0x15), Init = 0x00, Ref = true, XorOut = 0x00
 */
export const crc5itu = (data: Buffer): Buffer => {
    return _crc.crc5itu(data);
};

/**
 * Check = 0x19, Poly = 0x05 (rev: 0x14), Init = 0x1F, Ref = true, XorOut = 0x1F
 */
export const crc5usb = (data: Buffer): Buffer => {
    return _crc.crc5usb(data);
};

/**
 * Check = 0x0D, Poly = 0x27, Init = 0x3F, Ref = false, XorOut = 0x00
 */
export const crc6cdma2000_a = (data: Buffer): Buffer => {
    return _crc.crc6cdma2000_a(data);
};

/**
 * Check = 0x3B, Poly = 0x07, Init = 0x3F, Ref = false, XorOut = 0x00
 */
export const crc6cdma2000_b = (data: Buffer): Buffer => {
    return _crc.crc6cdma2000_b(data);
};

/**
 * Check = 0x26, Poly = 0x19 (rev: 0x26), Init = 0x00, Ref = true, XorOut = 0x00
 */
export const crc6darc = (data: Buffer): Buffer => {
    return _crc.crc6darc(data);
};

/**
 * Check = 0x13, Poly = 0x2F, Init = 0x00, Ref = false, XorOut = 0x3F
 */
export const crc6gsm = (data: Buffer): Buffer => {
    return _crc.crc6gsm(data);
};

/**
 * Check = 0x06, Poly = 0x03 (rev: 0x30), Init = 0x00, Ref = true, XorOut = 0x00
 */
export const crc6itu = (data: Buffer): Buffer => {
    return _crc.crc6itu(data);
};

/**
 * Check = 0x75, Poly = 0x09, Init = 0x00, Ref = false, XorOut = 0x00
 */
export const crc7 = (data: Buffer): Buffer => {
    return _crc.crc7(data);
};

/**
 * Check = 0x61, Poly = 0x45, Init = 0x00, Ref = false, XorOut = 0x00
 */
export const crc7umts = (data: Buffer): Buffer => {
    return _crc.crc7umts(data);
};

/**
 * Check = 0xF4, Poly = 0x07, Init = 0x00, Ref = false, XorOut = 0x00
 */
export const crc8 = (data: Buffer): Buffer => {
    return _crc.crc8(data);
};

/**
 * Check = 0xDA, Poly = 0x9B, Init = 0xFF, Ref = false, XorOut = 0x00
 */
export const crc8cdma2000 = (data: Buffer): Buffer => {
    return _crc.crc8cdma2000(data);
};

/**
 * Check = 0x15, Poly = 0x39 (rev: 0x9C), Init = 0x00, Ref = true, XorOut = 0x00
 */
export const crc8darc = (data: Buffer): Buffer => {
    return _crc.crc8darc(data);
};

/**
 * Check = 0xBC, Poly = 0xD5, Init = 0x00, Ref = false, XorOut = 0x00
 */
export const crc8dvb_s2 = (data: Buffer): Buffer => {
    return _crc.crc8dvb_s2(data);
};

/**
 * Check = 0x97, Poly = 0x1D (rev: 0xB8), Init = 0xFF, Ref = true, XorOut = 0x00
 */
export const crc8ebu = (data: Buffer): Buffer => {
    return _crc.crc8ebu(data);
};

/**
 * Check = 0x7E, Poly = 0x1D, Init = 0xFD, Ref = false, XorOut = 0x00
 */
export const crc8icode = (data: Buffer): Buffer => {
    return _crc.crc8icode(data);
};

/**
 * Check = 0xA1, Poly = 0x07, Init = 0x00, Ref = false, XorOut = 0x55
 */
export const crc8itu = (data: Buffer): Buffer => {
    return _crc.crc8itu(data);
};

/**
 * Check = 0xA1, Poly = 0x31 (rev: 0x8C), Init = 0x00, Ref = true, XorOut = 0x00
 */
export const crc8maxim = (data: Buffer): Buffer => {
    return _crc.crc8maxim(data);
};

/**
 * Check = 0xD0, Poly = 0x07 (rev: 0xE0), Init = 0xFF, Ref = true, XorOut = 0x00
 */
export const crc8rohc = (data: Buffer): Buffer => {
    return _crc.crc8rohc(data);
};

/**
 * Check = 0x25, Poly = 0x9B (rev: 0xD9), Init = 0x00, Ref = true, XorOut = 0x00
 */
export const crc8wcdma = (data: Buffer): Buffer => {
    return _crc.crc8wcdma(data);
};

/**
 * Check = 0x199, Poly = 0x233, Init = 0x000, Ref = false, XorOut = 0x000
 */
export const crc10 = (data: Buffer): Buffer => {
    return _crc.crc10(data);
};

/**
 * Check = 0x233, Poly = 0x3D9, Init = 0x3FF, Ref = false, XorOut = 0x000
 */
export const crc10cdma2000 = (data: Buffer): Buffer => {
    return _crc.crc10cdma2000(data);
};

/**
 * Check = 0x12A, Poly = 0x175, Init = 0x000, Ref = false, XorOut = 0x3FF
 */
export const crc10gsm = (data: Buffer): Buffer => {
    return _crc.crc10gsm(data);
};

/**
 * Check = 0x5A3, Poly = 0x385, Init = 0x01a, Ref = false, XorOut = 0x000
 */
export const crc11 = (data: Buffer): Buffer => {
    return _crc.crc11(data);
};

/**
 * Check = 0xF5B, Poly = 0x80F, Init = 0x000, Ref = false, XorOut = 0x000
 */
export const crc12 = (data: Buffer): Buffer => {
    return _crc.crc12(data);
};

/**
 * Check = 0xD4D, Poly = 0xF13, Init = 0xFFF, Ref = false, XorOut = 0x000
 */
export const crc12cdma2000 = (data: Buffer): Buffer => {
    return _crc.crc12cdma2000(data);
};

/**
 * Check = 0xB34, Poly = 0xD31, Init = 0x000, Ref = false, XorOut = 0xFFF
 */
export const crc12gsm = (data: Buffer): Buffer => {
    return _crc.crc12gsm(data);
};

/**
 * Check = 0x04FA, Poly = 0x1CF5, Init = 0x0000, Ref = false, XorOut = 0x0000
 */
export const crc13bbc = (data: Buffer): Buffer => {
    return _crc.crc13bbc(data);
};

/**
 * Check = 0x082D, Poly = 0x0805 (rev: 0x2804), Init = 0x0000, Ref = true, XorOut = 0x0000
 */
export const crc14darc = (data: Buffer): Buffer => {
    return _crc.crc14darc(data);
};

/**
 * Check = 0x30AE, Poly = 0x202D, Init = 0x0000, Ref = false, XorOut = 0x3FFF
 */
export const crc14gsm = (data: Buffer): Buffer => {
    return _crc.crc14gsm(data);
};

/**
 * Check = 0x059E, Poly = 0x4599, Init = 0x0000, Ref = false, XorOut = 0x0000
 */
export const crc15can = (data: Buffer): Buffer => {
    return _crc.crc15can(data);
};

/**
 * Check = 0x2566, Poly = 0x6815, Init = 0x0000, Ref = false, XorOut = 0x0001
 */
export const crc15mpt1327 = (data: Buffer): Buffer => {
    return _crc.crc15mpt1327(data);
};

/**
 * Check = 0xBB3D, Poly = 0x8005 (rev: 0xA001), Init = 0x0000, Ref = true, XorOut = 0x0000
 */
export const crc16 = (data: Buffer): Buffer => {
    return _crc.crc16(data);
};

/**
 * Check = 0x29B1, Poly = 0x1021, Init = 0xFFFF, Ref = false, XorOut = 0x0000
 */
export const crc16ccitt_false = (data: Buffer): Buffer => {
    return _crc.crc16ccitt_false(data);
};

/**
 * Check = 0xE5CC, Poly = 0x1021, Init = 0x1D0F, Ref = false, XorOut = 0x0000
 */
export const crc16aug_ccitt = (data: Buffer): Buffer => {
    return _crc.crc16aug_ccitt(data);
};

/**
 * Check = 0xFEE8, Poly = 0x8005, Init = 0x0000, Ref = false, XorOut = 0x0000
 */
export const crc16buypass = (data: Buffer): Buffer => {
    return _crc.crc16buypass(data);
};

/**
 * Check = 0x4C06, Poly = 0xC867, Init = 0xFFFF, Ref = false, XorOut = 0x0000
 */
export const crc16cdma2000 = (data: Buffer): Buffer => {
    return _crc.crc16cdma2000(data);
};

/**
 * Check = 0x9ECF, Poly = 0x8005, Init = 0x800D, Ref = false, XorOut = 0x0000
 */
export const crc16dds_110 = (data: Buffer): Buffer => {
    return _crc.crc16dds_110(data);
};

/**
 * Check = 0x007E, Poly = 0x0589, Init = 0x800D, Ref = false, XorOut = 0x0001
 */
export const crc16dect_r = (data: Buffer): Buffer => {
    return _crc.crc16dect_r(data);
};

/**
 * Check = 0x007E, Poly = 0x0589, Init = 0x0000, Ref = false, XorOut = 0x0000
 */
export const crc16dect_x = (data: Buffer): Buffer => {
    return _crc.crc16dect_x(data);
};

/**
 * Check = 0xEA82, Poly = 0x3D65 (rev: 0xA6BC), Init = 0x0000, Ref = true, XorOut = 0xFFFF
 */
export const crc16dnp = (data: Buffer): Buffer => {
    return _crc.crc16dnp(data);
};

/**
 * Check = 0xC2B7, Poly = 0x3D65, Init = 0x0000, Ref = false, XorOut = 0xFFFF
 */
export const crc16en_13757 = (data: Buffer): Buffer => {
    return _crc.crc16en_13757(data);
};

/**
 * Check = 0xD64E, Poly = 0x1021, Init = 0xFFFF, Ref = false, XorOut = 0xFFFF
 */
export const crc16genibus = (data: Buffer): Buffer => {
    return _crc.crc16genibus(data);
};

/**
 * Check = 0x44C2, Poly = 0x8005 (rev: 0xA001), Init = 0xFFFF, Ref = true, XorOut = 0xFFFF
 */
export const crc16maxim = (data: Buffer): Buffer => {
    return _crc.crc16maxim(data);
};

/**
 * Check = 0x6F91, Poly = 0x1021 (rev: 0x8408), Init = 0xFFFF, Ref = true, XorOut = 0x0000
 */
export const crc16mcrf4cc = (data: Buffer): Buffer => {
    return _crc.crc16mcrf4cc(data);
};

/**
 * Check = 0x63D0, Poly = 0x1021 (rev: 0x8408), Init = 0xB2AA, Ref = true, XorOut = 0x0000
 */
export const crc16riello = (data: Buffer): Buffer => {
    return _crc.crc16riello(data);
};

/**
 * Check = 0xD0DB, Poly = 0x8BB7, Init = 0x0000, Ref = false, XorOut = 0x0000
 */
export const crc16t10_dif = (data: Buffer): Buffer => {
    return _crc.crc16t10_dif(data);
};

/**
 * Check = 0x0FB3, Poly = 0xA097, Init = 0x0000, Ref = false, XorOut = 0x0000
 */
export const crc16teledisk = (data: Buffer): Buffer => {
    return _crc.crc16teledisk(data);
};

/**
 * Check = 0x26B1, Poly = 0x1021 (rev: 0x8408), Init = 0x89EC, Ref = true, XorOut = 0x0000
 */
export const crc16tms13157 = (data: Buffer): Buffer => {
    return _crc.crc16tms13157(data);
};

/**
 * Check = 0xB4C8, Poly = 0x8005 (rev: 0xA001), Init = 0xFFFF, Ref = true, XorOut = 0xFFFF
 */
export const crc16usb = (data: Buffer): Buffer => {
    return _crc.crc16usb(data);
};

/**
 * Check = 0xBF05, Poly = 0x1021 (rev: 0x8408), Init = 0xC6C6, Ref = true, XorOut = 0x0000
 */
export const crc_a = (data: Buffer): Buffer => {
    return _crc.crc_a(data);
};

/**
 * Check = 0x2189, Poly = 0x1021 (rev: 0x8408), Init = 0x0000, Ref = true, XorOut = 0x0000
 */
export const crc16kermit = (data: Buffer): Buffer => {
    return _crc.crc16kermit(data);
};

/**
 * Check = 0x4B37, Poly = 0x8005 (rev: 0xA001), Init = 0xFFFF, Ref = true, XorOut = 0x0000
 */
export const crc16modbus = (data: Buffer): Buffer => {
    return _crc.crc16modbus(data);
};

/**
 * Check = 0x906E, Poly = 0x8005 (rev: 0xA001), Init = 0xFFFF, Ref = true, XorOut = 0xFFFF
 */
export const crc16_x25 = (data: Buffer): Buffer => {
    return _crc.crc16_x25(data);
};

/**
 * Check = 0x31C3, Poly = 0x1021, Init = 0x0000, Ref = false, XorOut = 0x0000
 */
export const crc16xmodem = (data: Buffer): Buffer => {
    return _crc.crc16xmodem(data);
};

/**
 * Check = 0x04F03, Poly = 0x1685B, Init = 0x00000, Ref = false, XorOut = 0x00000
 */
export const crc17can = (data: Buffer): Buffer => {
    return _crc.crc17can(data);
};

/**
 * Check = 0x0ED841, Poly = 0x102899, Init = 0x000000, Ref = false, XorOut = 0x000000
 */
export const crc21can = (data: Buffer): Buffer => {
    return _crc.crc21can(data);
};

/**
 * Check = 0x21CF02, Poly = 0x864CFB, Init = 0xB704CE, Ref = false, XorOut = 0x000000
 */
export const crc24 = (data: Buffer): Buffer => {
    return _crc.crc24(data);
};

/**
 * Check = 0xC25A56, Poly = 0x00065B (rev: 0xDA6000), Init = 0x555555, Ref = true, XorOut = 0x000000
 */
export const crc24ble = (data: Buffer): Buffer => {
    return _crc.crc24ble(data);
};

/**
 * Check = 0x7979BD, Poly = 0x5D6DCB, Init = 0xFEDCBA, Ref = false, XorOut = 0x000000
 */
export const crc24flexray_a = (data: Buffer): Buffer => {
    return _crc.crc24flexray_a(data);
};

/**
 * Check = 0x1F23B8, Poly = 0x5D6DCB, Init = 0xABCDEF, Ref = false, XorOut = 0x000000
 */
export const crc24flexray_b = (data: Buffer): Buffer => {
    return _crc.crc24flexray_b(data);
};

/**
 * Check = 0xCDE703, Poly = 0x864CFB, Init = 0x000000, Ref = false, XorOut = 0x000000
 */
export const crc24lte_a = (data: Buffer): Buffer => {
    return _crc.crc24lte_a(data);
};

/**
 * Check = 0x23EF52, Poly = 0x800063, Init = 0x000000, Ref = false, XorOut = 0x000000
 */
export const crc24lte_b = (data: Buffer): Buffer => {
    return _crc.crc24lte_b(data);
};

/**
 * Check = 0x200FA5, Poly = 0x800063, Init = 0xFFFFFF, Ref = false, XorOut = 0xFFFFFF
 */
export const crc24os9 = (data: Buffer): Buffer => {
    return _crc.crc24os9(data);
};

/**
 * Check = 0x04C34ABF, Poly = 0x2030B9C7, Init = 0x3FFFFFFF, Ref = false, XorOut = 0x3FFFFFFF
 */
export const crc30cdma = (data: Buffer): Buffer => {
    return _crc.crc30cdma(data);
};

/**
 * Check = 0xCBF43926, Poly = 0x04C11DB7 (rev: 0xEDB88320), Init = 0xFFFFFFFF, Ref = true, XorOut = 0xFFFFFFFF
 */
export const crc32 = (data: Buffer): Buffer => {
    return _crc.crc32(data);
};

/**
 * Check = 0x181989FC, Poly = 0x04C11DB7, Init = 0xFFFFFFFF, Ref = false, XorOut = 0xFFFFFFFF
 */
export const crc32mhash = (data: Buffer): Buffer => {
    return _crc.crc32mhash(data);
};

/**
 * Check = 0xFC891918, Poly = 0x04C11DB7, Init = 0xFFFFFFFF, Ref = false, XorOut = 0xFFFFFFFF
 */
export const crc32bzip2 = (data: Buffer): Buffer => {
    return _crc.crc32bzip2(data);
};

/**
 * Check = 0xE3069283, Poly = 0x1EDC6F41 (rev: 0x82F63B78), Init = 0xFFFFFFFF, Ref = true, XorOut = 0xFFFFFFFF
 */
export const crc32c = (data: Buffer): Buffer => {
    return _crc.crc32c(data);
};

/**
 * Check = 0x87315576, Poly = 0xA833982B (rev: 0xD419CC15), Init = 0xFFFFFFFF, Ref = true, XorOut = 0xFFFFFFFF
 */
export const crc32d = (data: Buffer): Buffer => {
    return _crc.crc32d(data);
};

/**
 * Check = 0x0376E6E7, Poly = 0x04C11DB7, Init = 0xFFFFFFFF, Ref = false, XorOut = 0x00000000
 */
export const crc32mpeg2 = (data: Buffer): Buffer => {
    return _crc.crc32mpeg2(data);
};

/**
 * Check = 0x765E7680, Poly = 0x04C11DB7, Init = 0x00000000, Ref = false, XorOut = 0xFFFFFFFF
 */
export const crc32posix = (data: Buffer): Buffer => {
    return _crc.crc32posix(data);
};

/**
 * Check = 0x3010BF7F, Poly = 0x814141AB, Init = 0x00000000, Ref = false, XorOut = 0x00000000
 */
export const crc32q = (data: Buffer): Buffer => {
    return _crc.crc32q(data);
};

/**
 * Check = 0x340BC6D9, Poly = 0x04C11DB7 (rev: 0xEDB88320), Init = 0xFFFFFFFF, Ref = true, XorOut = 0x00000000
 */
export const crc32jamcrc = (data: Buffer): Buffer => {
    return _crc.crc32jamcrc(data);
};

/**
 * Check = 0xBD0BE338, Poly = 0x000000AF, Init = 0x00000000, Ref = false, XorOut = 0x00000000
 */
export const crc32xfer = (data: Buffer): Buffer => {
    return _crc.crc32xfer(data);
};

/**
 * Check = 0xD4164FC646, Poly = 0x0004820009, Init = 0x0000000000, Ref = false, XorOut = 0xFFFFFFFFFF
 */
export const crc40gsm = (data: Buffer): Buffer => {
    return _crc.crc40gsm(data);
};

/**
 * Check = 0x6C40DF5F0B497347, Poly = 0x42F0E1EBA9EA3693, Init = 0x0000000000000000, Ref = false, XorOut = 0x0000000000000000
 */
export const crc64 = (data: Buffer): Buffer => {
    return _crc.crc64(data);
};

/**
 * Check = 0xB90956C775A41001, Poly = 0x000000000000001B (rev: 0xD800000000000000), Init = 0xFFFFFFFFFFFFFFFF, Ref = true, XorOut = 0xFFFFFFFFFFFFFFFF
 */
export const crc64iso = (data: Buffer): Buffer => {
    return _crc.crc64iso(data);
};

/**
 * Check = 0x62EC59E3F1A4F00A, Poly = 0x42F0E1EBA9EA3693, Init = 0xFFFFFFFFFFFFFFFF, Ref = false, XorOut = 0xFFFFFFFFFFFFFFFF
 */
export const crc64we = (data: Buffer): Buffer => {
    return _crc.crc64we(data);
};

/**
 * Check = 0xE9C6D914C4B8D9CA, Poly = 0xAD93D23594C935A9 (rev: 0x95AC9329AC4BC9B5), Init = 0x0000000000000000, Ref = true, XorOut = 0x0000000000000000
 */
export const crc64jones = (data: Buffer): Buffer => {
    return _crc.crc64jones(data);
};
