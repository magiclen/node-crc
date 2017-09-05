/// <reference types="node" />
declare module "node-crc" {
    export function crc64iso(data: Buffer): Buffer | null;
    export function crc64ecma(data: Buffer): Buffer | null;
    export function crc64(data: Buffer): Buffer | null;
    export function crc32ieee(data: Buffer): Buffer | null;
    export function crc32b(data: Buffer): Buffer | null;
    export function crc32(data: Buffer): Buffer | null;
    export function crc32c(data: Buffer): Buffer | null;
    export function crc32mhash(data: Buffer): Buffer | null;
    export function crc16ibm(data: Buffer): Buffer | null;
    export function crc16(data: Buffer): Buffer | null;
    export function crc16ccitt(data: Buffer): Buffer | null;
    export function crcccitt(data: Buffer): Buffer | null;
    export function crc8atm(data: Buffer): Buffer | null;
    export function crc8(data: Buffer): Buffer | null;
    export function crc8cdma(data: Buffer): Buffer | null;
    export function crc(bits: number, reflection: number, expL: number, expH: number, iniL: number, iniH: number, fixL: number, fixH: number, data: Buffer): Buffer | null;
}
