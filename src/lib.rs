use crc_any::{CRCu16, CRCu32, CRCu64, CRCu8, CRC};
use napi::bindgen_prelude::*;
use napi_derive::napi;

#[inline]
fn to_buffer_1(u: u8) -> Buffer {
    Buffer::from(vec![u])
}

#[inline]
fn to_buffer_2(u: u16) -> Buffer {
    Buffer::from(u.to_be_bytes().to_vec())
}

#[inline]
fn to_buffer_3(u: u32) -> Buffer {
    Buffer::from(u.to_be_bytes()[1..].to_vec())
}

#[inline]
fn to_buffer_4(u: u32) -> Buffer {
    Buffer::from(u.to_be_bytes().to_vec())
}

#[inline]
fn to_buffer_5(u: u64) -> Buffer {
    Buffer::from(u.to_be_bytes()[3..].to_vec())
}

#[inline]
fn to_buffer_8(u: u64) -> Buffer {
    Buffer::from(u.to_be_bytes().to_vec())
}

macro_rules! crc_functions_1 {
    (@inner $(#[$attr:meta])* $f:ident) => {
        $(#[$attr])*
        #[napi(js_name = $f)]
        pub fn $f(data: Buffer) -> Buffer {
                let crc = {
                    let mut crc = CRCu8::$f();

                    crc.digest(data.as_ref());

                    crc.get_crc()
                };

                to_buffer_1(crc)
        }
    };
    ($($(#[$attr:meta])* $f:ident),+ $(,)* ) => {
        $(
            crc_functions_1!(@inner $(#[$attr])* $f);
        )+
    };
}

macro_rules! crc_functions_2 {
    (@inner $(#[$attr:meta])* $f:ident) => {
        $(#[$attr])*
        #[napi(js_name = $f)]
        pub fn $f(data: Buffer) -> Buffer {
                let crc = {
                    let mut crc = CRCu16::$f();

                    crc.digest(data.as_ref());

                    crc.get_crc()
                };

                to_buffer_2(crc)
        }
    };
    ($($(#[$attr:meta])* $f:ident),+ $(,)* ) => {
        $(
            crc_functions_2!(@inner $(#[$attr])* $f);
        )+
    };
}

macro_rules! crc_functions_3 {
    (@inner $(#[$attr:meta])* $f:ident) => {
        $(#[$attr])*
        #[napi(js_name = $f)]
        pub fn $f(data: Buffer) -> Buffer {
                let crc = {
                    let mut crc = CRCu32::$f();

                    crc.digest(data.as_ref());

                    crc.get_crc()
                };

                to_buffer_3(crc)
        }
    };
    ($($(#[$attr:meta])* $f:ident),+ $(,)* ) => {
        $(
            crc_functions_3!(@inner $(#[$attr])* $f);
        )+
    };
}

macro_rules! crc_functions_4 {
    (@inner $(#[$attr:meta])* $f:ident) => {
        $(#[$attr])*
        #[napi(js_name = $f)]
        pub fn $f(data: Buffer) -> Buffer {
                let crc = {
                    let mut crc = CRCu32::$f();

                    crc.digest(data.as_ref());

                    crc.get_crc()
                };

                to_buffer_4(crc)
        }
    };
    ($($(#[$attr:meta])* $f:ident),+ $(,)* ) => {
        $(
            crc_functions_4!(@inner $(#[$attr])* $f);
        )+
    };
}

macro_rules! crc_functions_5 {
    (@inner $(#[$attr:meta])* $f:ident) => {
        $(#[$attr])*
        #[napi(js_name = $f)]
        pub fn $f(data: Buffer) -> Buffer {
                let crc = {
                    let mut crc = CRCu64::$f();

                    crc.digest(data.as_ref());

                    crc.get_crc()
                };

                to_buffer_5(crc)
        }
    };
    ($($(#[$attr:meta])* $f:ident),+ $(,)* ) => {
        $(
            crc_functions_5!(@inner $(#[$attr])* $f);
        )+
    };
}

macro_rules! crc_functions_8 {
    (@inner $(#[$attr:meta])* $f:ident) => {
        $(#[$attr])*
        #[napi(js_name = $f)]
        pub fn $f(data: Buffer) -> Buffer {
                let crc = {
                    let mut crc = CRCu64::$f();

                    crc.digest(data.as_ref());

                    crc.get_crc()
                };

                to_buffer_8(crc)
        }
    };
    ($($(#[$attr:meta])* $f:ident),+ $(,)* ) => {
        $(
            crc_functions_8!(@inner $(#[$attr])* $f);
        )+
    };
}

crc_functions_1!(
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x4|0x3|0x0|false|0x7|
    crc3gsm,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x7|0x3 (rev: 0xC)|0x0|true|0x0|
    crc4itu,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xB|0x3|0xF|false|0xF|
    crc4interlaken,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x00|0x09|0x09|false|0x00|
    crc5epc,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x07|0x15 (rev: 0x15)|0x00|true|0x00|
    crc5itu,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x19|0x05 (rev: 0x14)|0x1F|true|0x1F|
    crc5usb,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x0D|0x27|0x3F|false|0x00|
    crc6cdma2000_a,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x3B|0x07|0x3F|false|0x00|
    crc6cdma2000_b,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x26|0x19 (rev: 0x26)|0x00|true|0x00|
    crc6darc,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x13|0x2F|0x00|false|0x3F|
    crc6gsm,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x06|0x03 (rev: 0x30)|0x00|true|0x00|
    crc6itu,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x75|0x09|0x00|false|0x00|
    crc7,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x61|0x45|0x00|false|0x00|
    crc7umts,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xF4|0x07|0x00|false|0x00|
    crc8,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xDA|0x9B|0xFF|false|0x00|
    crc8cdma2000,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x15|0x39 (rev: 0x9C)|0x00|true|0x00|
    crc8darc,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xBC|0xD5|0x00|false|0x00|
    crc8dvb_s2,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x97|0x1D (rev: 0xB8)|0xFF|true|0x00|
    crc8ebu,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x7E|0x1D|0xFD|false|0x00|
    crc8icode,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xA1|0x07|0x00|false|0x55|
    crc8itu,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xA1|0x31 (rev: 0x8C)|0x00|true|0x00|
    crc8maxim,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xD0|0x07 (rev: 0xE0)|0xFF|true|0x00|
    crc8rohc,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x25|0x9B (rev: 0xD9)|0x00|true|0x00|
    crc8wcdma,
);

crc_functions_2!(
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x199|0x233|0x000|false|0x000|
    crc10,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x233|0x3D9|0x3FF|false|0x000|
    crc10cdma2000,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x12A|0x175|0x000|false|0x3FF|
    crc10gsm,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x5A3|0x385|0x01a|false|0x000|
    crc11,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xF5B|0x80F|0x000|false|0x000|
    crc12,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xD4D|0xF13|0xFFF|false|0x000|
    crc12cdma2000,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xB34|0xD31|0x000|false|0xFFF|
    crc12gsm,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x04FA|0x1CF5|0x0000|false|0x0000|
    crc13bbc,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x082D|0x0805 (rev: 0x2804)|0x0000|true|0x0000|
    crc14darc,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x30AE|0x202D|0x0000|false|0x3FFF|
    crc14gsm,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x059E|0x4599|0x0000|false|0x0000|
    crc15can,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x2566|0x6815|0x0000|false|0x0001|
    crc15mpt1327,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xBB3D|0x8005 (rev: 0xA001)|0x0000|true|0x0000|
    crc16,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x29B1|0x1021|0xFFFF|false|0x0000|
    crc16ccitt_false,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xE5CC|0x1021|0x1D0F|false|0x0000|
    crc16aug_ccitt,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xFEE8|0x8005|0x0000|false|0x0000|
    crc16buypass,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x4C06|0xC867|0xFFFF|false|0x0000|
    crc16cdma2000,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x9ECF|0x8005|0x800D|false|0x0000|
    crc16dds_110,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x007E|0x0589|0x0000|false|0x0001|
    crc16dect_r,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x007F|0x0589|0x0000|false|0x0000|
    crc16dect_x,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xEA82|0x3D65 (rev: 0xA6BC)|0x0000|true|0xFFFF|
    crc16dnp,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xC2B7|0x3D65|0x0000|false|0xFFFF|
    crc16en_13757,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xD64E|0x1021|0xFFFF|false|0xFFFF|
    crc16genibus,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x44C2|0x8005 (rev: 0xA001)|0xFFFF|true|0xFFFF|
    crc16maxim,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x6F91|0x1021 (rev: 0x8408)|0xFFFF|true|0x0000|
    crc16mcrf4cc,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x63D0|0x1021 (rev: 0x8408)|0xB2AA|true|0x0000|
    crc16riello,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xD0DB|0x8BB7|0x0000|false|0x0000|
    crc16t10_dif,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x0FB3|0xA097|0x0000|false|0x0000|
    crc16teledisk,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x26B1|0x1021 (rev: 0x8408)|0x89EC|true|0x0000|
    crc16tms13157,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xB4C8|0x8005 (rev: 0xA001)|0xFFFF|true|0xFFFF|
    crc16usb,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xBF05|0x1021 (rev: 0x8408)|0xC6C6|true|0x0000|
    crc_a,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x2189|0x1021 (rev: 0x8408)|0x0000|true|0x0000|
    crc16kermit,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x4B37|0x8005 (rev: 0xA001)|0xFFFF|true|0x0000|
    crc16modbus,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x906E|0x8005 (rev: 0xA001)|0xFFFF|true|0xFFFF|
    crc16_x25,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x31C3|0x1021|0x0000|false|0x0000|
    crc16xmodem,
);

crc_functions_3!(
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x04F03|0x1685B|0x00000|false|0x00000|
    crc17can,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x0ED841|0x102899|0x000000|false|0x000000|
    crc21can,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x21CF02|0x864CFB|0xB704CE|false|0x000000|
    crc24,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xC25A56|0x00065B (rev: 0xDA6000)|0x555555|true|0x000000|
    crc24ble,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x7979BD|0x5D6DCB|0xFEDCBA|false|0x000000|
    crc24flexray_a,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x1F23B8|0x5D6DCB|0xABCDEF|false|0x000000|
    crc24flexray_b,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xCDE703|0x864CFB|0x000000|false|0x000000|
    crc24lte_a,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x23EF52|0x800063|0x000000|false|0x000000|
    crc24lte_b,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x200FA5|0x800063|0xFFFFFF|false|0xFFFFFF|
    crc24os9,
);

crc_functions_4!(
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x04C34ABF|0x2030B9C7|0x3FFFFFFF|false|0x3FFFFFFF|
    crc30cdma,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xCBF43926|0x04C11DB7 (rev: 0xEDB88320)|0xFFFFFFFF|true|0xFFFFFFFF|
    crc32,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x181989FC|0x04C11DB7|0xFFFFFFFF|false|0xFFFFFFFF|
    crc32mhash,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xFC891918|0x04C11DB7|0xFFFFFFFF|false|0xFFFFFFFF|
    crc32bzip2,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xE3069283|0x1EDC6F41 (rev: 0x82F63B78)|0xFFFFFFFF|true|0xFFFFFFFF|
    crc32c,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x87315576|0xA833982B (rev: 0xD419CC15)|0xFFFFFFFF|true|0xFFFFFFFF|
    crc32d,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x0376E6E7|0x04C11DB7|0xFFFFFFFF|false|0x00000000|
    crc32mpeg2,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x765E7680|0x04C11DB7|0x00000000|false|0xFFFFFFFF|
    crc32posix,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x3010BF7F|0x814141AB|0x00000000|false|0x00000000|
    crc32q,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x340BC6D9|0x04C11DB7 (rev: 0xEDB88320)|0xFFFFFFFF|true|0x00000000|
    crc32jamcrc,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xBD0BE338|0x000000AF|0x00000000|false|0x00000000|
    crc32xfer,
);

crc_functions_5!(
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xD4164FC646|0x0004820009|0x0000000000|false|0xFFFFFFFFFF|
    crc40gsm,
);

crc_functions_8!(
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x6C40DF5F0B497347|0x42F0E1EBA9EA3693|0x0000000000000000|false|0x0000000000000000|
    crc64,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xB90956C775A41001|0x000000000000001B (rev: 0xD800000000000000)|0xFFFFFFFFFFFFFFFF|true|0xFFFFFFFFFFFFFFFF|
    crc64iso,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0x62EC59E3F1A4F00A|0x42F0E1EBA9EA3693|0xFFFFFFFFFFFFFFFF|false|0xFFFFFFFFFFFFFFFF|
    crc64we,
    /// |Check|Poly|Init|Ref|XorOut|
    /// |---|---|---|---|---|
    /// |0xE9C6D914C4B8D9CA|0xAD93D23594C935A9 (rev: 0x95AC9329AC4BC9B5)|0x0000000000000000|true|0x0000000000000000|
    crc64jones,
);

#[inline]
fn u32_2_u64(low: u32, high: u32) -> u64 {
    ((high as u64) << 32) | (low as u64)
}

/// Create a CRC instance by providing the length of bits, expression, reflection, an initial value and a final xor value.
#[napi]
pub fn crc(
    poly_low: u32,
    poly_high: u32,
    bit: u8,
    initial_low: u32,
    initial_high: u32,
    final_xor_low: u32,
    final_xor_high: u32,
    reflect: bool,
    data: Buffer,
) -> Buffer {
    let poly = u32_2_u64(poly_low, poly_high);
    let initial = u32_2_u64(initial_low, initial_high);
    let final_xor = u32_2_u64(final_xor_low, final_xor_high);

    let crc = {
        let mut crc = CRC::create_crc(poly, bit, initial, final_xor, reflect);

        crc.digest(data.as_ref());

        crc.get_crc_heapless_vec_be()
    };

    Buffer::from(crc.to_vec())
}
