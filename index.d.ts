declare module "node-crc" {
    /**
     * bits = 64, reflection = true, exp = 0xD800000000000000, ini = 0xFFFFFFFFFFFFFFFF, fix = 0xFFFFFFFFFFFFFFFF
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc64iso(data: Buffer): Buffer | boolean;

    /**
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc64jones(data: Buffer): Buffer | boolean;

    /**
     * bits = 64, reflection = false, exp = 0x42F0E1EBA9EA3693, ini = 0xFFFFFFFFFFFFFFFF, fix = 0xFFFFFFFFFFFFFFFF
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc64ecma(data: Buffer): Buffer | boolean;

    /**
     * bits = 64, reflection = false, exp = 0x42F0E1EBA9EA3693, ini = 0xFFFFFFFFFFFFFFFF, fix = 0xFFFFFFFFFFFFFFFF
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc64(data: Buffer): Buffer | boolean;

    /**
     * bits = 32, reflection = true, exp = 0xEDB88320, ini = 0xFFFFFFFF, fix = 0xFFFFFFFF
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc32ieee(data: Buffer): Buffer | boolean;

    /**
     * bits = 32, reflection = true, exp = 0xEDB88320, ini = 0xFFFFFFFF, fix = 0xFFFFFFFF
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc32b(data: Buffer): Buffer | boolean;

    /**
     * bits = 32, reflection = true, exp = 0xEDB88320, ini = 0xFFFFFFFF, fix = 0xFFFFFFFF
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc32(data: Buffer): Buffer | boolean;

    /**
     * bits = 32, reflection = true, exp = 0x82F63B78, ini = 0xFFFFFFFF, fix = 0xFFFFFFFF
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc32c(data: Buffer): Buffer | boolean;

    /**
     * bits = 32, reflection = false, exp = 0x04C11DB7, ini = 0xFFFFFFFF, fix = 0xFFFFFFFF, reversed
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc32mhash(data: Buffer): Buffer | boolean;

    /**
     * bits = 16, reflection = true, exp = 0xA001, ini = 0x0000, fix = 0x0000
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc16ibm(data: Buffer): Buffer | boolean;

    /**
     * bits = 16, reflection = true, exp = 0xA001, ini = 0x0000, fix = 0x0000
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc16(data: Buffer): Buffer | boolean;

    /**
     * bits = 16, reflection = false, exp = 0x1021, ini = 0xFFFF, fix = 0x0000
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc16ccitt(data: Buffer): Buffer | boolean;

    /**
     * bits = 16, reflection = false, exp = 0x1021, ini = 0xFFFF, fix = 0x0000
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crcccitt(data: Buffer): Buffer | boolean;

    /**
     * bits = 8, reflection = false, exp = 0x07, ini = 0x00, fix = 0x00
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc8atm(data: Buffer): Buffer | boolean;

    /**
     * bits = 8, reflection = false, exp = 0x07, ini = 0x00, fix = 0x00
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc8(data: Buffer): Buffer | boolean;

    /**
     * bits = 8, reflection = false, exp = 0x9B, ini = 0xFF, fix = 0x00
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc8cdma(data: Buffer): Buffer | boolean;

    /**
     * Compute a n-bit CRC value. You can change the length of bits, reflection, expression, the initial value, the final xor value by yourself.
     * @param {number!} bits
     * @param {boolean!} reflection
     * @param {number!} expL
     * @param {number!} expH
     * @param {number!} iniL
     * @param {number!} iniH
     * @param {number!} fixL
     * @param {number!} fixH
     * @param {Buffer!} data
     * @returns {Buffer | boolean} If there is any error in the computation, it will return false.
     */
    export function crc(bits: number, reflection: boolean, expL: number, expH: number, iniL: number, iniH: number, fixL: number, fixH: number, data: Buffer): Buffer | boolean;
}
