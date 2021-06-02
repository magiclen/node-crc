extern crate crc_any;

use neon::handle::Managed;
use neon::prelude::*;

use crc_any::*;

fn js_number_to_u8<'a, T: Managed>(
    cx: &mut FunctionContext<'a>,
    value: Handle<JsNumber>,
) -> Result<u8, JsResult<'a, T>> {
    let value = value.value(cx);

    if value.is_infinite() || value.is_nan() || value.fract() > f64::EPSILON {
        return Err(cx.throw_type_error(format!("{} is not an integer", value)));
    }

    let value = value as i64;

    // use `u8` here to check because the input may be in **0b**, **0o** or **0x** formats, which may be bigger than **2^7 - 1** but smaller than **2^8 - 1** and therefore is negative in i8
    if value > u8::MAX as i64 {
        Err(cx.throw_range_error(format!("{} is bigger than {}", value, u8::MAX)))
    } else if value < i8::MIN as i64 {
        Err(cx.throw_range_error(format!("{} is smaller than {}", value, u8::MIN)))
    } else {
        Ok(value as u8)
    }
}

fn js_number_to_u32<'a, T: Managed>(
    cx: &mut FunctionContext<'a>,
    value: Handle<JsNumber>,
) -> Result<u32, JsResult<'a, T>> {
    let value = value.value(cx);

    if value.is_infinite() || value.is_nan() || value.fract() > f64::EPSILON {
        return Err(cx.throw_type_error(format!("{} is not an integer", value)));
    }

    let value = value as i64;

    // use `u32` here to check because the input may be in **0b**, **0o** or **0x** formats, which may be bigger than **2^31 - 1** but smaller than **2^32 - 1** and therefore is negative in i32
    if value > u32::MAX as i64 {
        Err(cx.throw_range_error(format!("{} is bigger than {}", value, u32::MAX)))
    } else if value < i32::MIN as i64 {
        Err(cx.throw_range_error(format!("{} is smaller than {}", value, i32::MIN)))
    } else {
        Ok(value as u32)
    }
}

fn to_js_buffer_1<'a>(cx: &mut FunctionContext<'a>, u: u8) -> JsResult<'a, JsBuffer> {
    let mut buffer = unsafe { JsBuffer::uninitialized(cx, 1)? };

    cx.borrow_mut(&mut buffer, |buffer| {
        buffer.as_mut_slice()[0] = u;
    });

    Ok(buffer)
}

fn to_js_buffer_2<'a>(cx: &mut FunctionContext<'a>, u: u16) -> JsResult<'a, JsBuffer> {
    let mut buffer = unsafe { JsBuffer::uninitialized(cx, 2)? };

    cx.borrow_mut(&mut buffer, |buffer| {
        buffer.as_mut_slice().copy_from_slice(&u.to_be_bytes());
    });

    Ok(buffer)
}

fn to_js_buffer_3<'a>(cx: &mut FunctionContext<'a>, u: u32) -> JsResult<'a, JsBuffer> {
    let mut buffer = unsafe { JsBuffer::uninitialized(cx, 3)? };

    cx.borrow_mut(&mut buffer, |buffer| {
        buffer.as_mut_slice().copy_from_slice(&u.to_be_bytes()[1..]);
    });

    Ok(buffer)
}

fn to_js_buffer_4<'a>(cx: &mut FunctionContext<'a>, u: u32) -> JsResult<'a, JsBuffer> {
    let mut buffer = unsafe { JsBuffer::uninitialized(cx, 4)? };

    cx.borrow_mut(&mut buffer, |buffer| {
        buffer.as_mut_slice().copy_from_slice(&u.to_be_bytes());
    });

    Ok(buffer)
}

fn to_js_buffer_5<'a>(cx: &mut FunctionContext<'a>, u: u64) -> JsResult<'a, JsBuffer> {
    let mut buffer = unsafe { JsBuffer::uninitialized(cx, 5)? };

    cx.borrow_mut(&mut buffer, |buffer| {
        buffer.as_mut_slice().copy_from_slice(&u.to_be_bytes()[3..]);
    });

    Ok(buffer)
}

fn to_js_buffer_8<'a>(cx: &mut FunctionContext<'a>, u: u64) -> JsResult<'a, JsBuffer> {
    let mut buffer = unsafe { JsBuffer::uninitialized(cx, 8)? };

    cx.borrow_mut(&mut buffer, |buffer| {
        buffer.as_mut_slice().copy_from_slice(&u.to_be_bytes());
    });

    Ok(buffer)
}

fn crc(mut cx: FunctionContext) -> JsResult<JsBuffer> {
    let poly = {
        let low = cx.argument::<JsNumber>(0)?;
        let high = cx.argument::<JsNumber>(1)?;

        let low = match js_number_to_u32(&mut cx, low) {
            Ok(v) => v,
            Err(err) => return err,
        };

        let high = match js_number_to_u32(&mut cx, high) {
            Ok(v) => v,
            Err(err) => return err,
        };

        ((high as u64) << 32) | (low as u64)
    };

    let bit = {
        let bit = cx.argument::<JsNumber>(2)?;

        match js_number_to_u8(&mut cx, bit) {
            Ok(v) => v,
            Err(err) => return err,
        }
    };

    let initial = {
        let low = cx.argument::<JsNumber>(3)?;
        let high = cx.argument::<JsNumber>(4)?;

        let low = match js_number_to_u32(&mut cx, low) {
            Ok(v) => v,
            Err(err) => return err,
        };

        let high = match js_number_to_u32(&mut cx, high) {
            Ok(v) => v,
            Err(err) => return err,
        };

        ((high as u64) << 32) | (low as u64)
    };

    let final_xor = {
        let low = cx.argument::<JsNumber>(5)?;
        let high = cx.argument::<JsNumber>(6)?;

        let low = match js_number_to_u32(&mut cx, low) {
            Ok(v) => v,
            Err(err) => return err,
        };

        let high = match js_number_to_u32(&mut cx, high) {
            Ok(v) => v,
            Err(err) => return err,
        };

        ((high as u64) << 32) | (low as u64)
    };

    let reflect = cx.argument::<JsBoolean>(7)?.value(&mut cx);

    let buffer = cx.argument::<JsBuffer>(8)?;

    let crc = cx.borrow(&buffer, |buffer| {
        let data = buffer.as_slice();

        let mut crc = CRC::create_crc(poly, bit, initial, final_xor, reflect);

        crc.digest(data);

        crc.get_crc_heapless_vec_be()
    });

    let mut buffer = unsafe { JsBuffer::uninitialized(&mut cx, crc.len() as u32)? };

    cx.borrow_mut(&mut buffer, |buffer| {
        buffer.as_mut_slice().copy_from_slice(&crc);
    });

    Ok(buffer)
}

macro_rules! crc_functions_1 {
    (@inner $cx:expr, $f:ident) => {
        fn $f(mut cx: FunctionContext) -> JsResult<JsBuffer> {
            let buffer = cx.argument::<JsBuffer>(0)?;

            let crc = cx.borrow(&buffer, |buffer| {
                let data = buffer.as_slice();

                let mut crc = CRCu8::$f();

                crc.digest(data);

                crc.get_crc()
            });

            to_js_buffer_1(&mut cx, crc)
        }

        $cx.export_function(stringify!($f), $f)?;
    };
    ($cx:expr; $($f:ident),+ $(,)* ) => {
        $(
            crc_functions_1!(@inner $cx, $f);
        )+
    };
}

macro_rules! crc_functions_2 {
    (@inner $cx:expr, $f:ident) => {
        fn $f(mut cx: FunctionContext) -> JsResult<JsBuffer> {
            let buffer = cx.argument::<JsBuffer>(0)?;

            let crc = cx.borrow(&buffer, |buffer| {
                let data = buffer.as_slice();

                let mut crc = CRCu16::$f();

                crc.digest(data);

                crc.get_crc()
            });

            to_js_buffer_2(&mut cx, crc)
        }

        $cx.export_function(stringify!($f), $f)?;
    };
    ($cx:expr; $($f:ident),+ $(,)* ) => {
        $(
            crc_functions_2!(@inner $cx, $f);
        )+
    };
}

macro_rules! crc_functions_3 {
    (@inner $cx:expr, $f:ident) => {
        fn $f(mut cx: FunctionContext) -> JsResult<JsBuffer> {
            let buffer = cx.argument::<JsBuffer>(0)?;

            let crc = cx.borrow(&buffer, |buffer| {
                let data = buffer.as_slice();

                let mut crc = CRCu32::$f();

                crc.digest(data);

                crc.get_crc()
            });

            to_js_buffer_3(&mut cx, crc)
        }

        $cx.export_function(stringify!($f), $f)?;
    };
    ($cx:expr; $($f:ident),+ $(,)* ) => {
        $(
            crc_functions_3!(@inner $cx, $f);
        )+
    };
}

macro_rules! crc_functions_4 {
    (@inner $cx:expr, $f:ident) => {
        fn $f(mut cx: FunctionContext) -> JsResult<JsBuffer> {
            let buffer = cx.argument::<JsBuffer>(0)?;

            let crc = cx.borrow(&buffer, |buffer| {
                let data = buffer.as_slice();

                let mut crc = CRCu32::$f();

                crc.digest(data);

                crc.get_crc()
            });

            to_js_buffer_4(&mut cx, crc)
        }

        $cx.export_function(stringify!($f), $f)?;
    };
    ($cx:expr; $($f:ident),+ $(,)* ) => {
        $(
            crc_functions_4!(@inner $cx, $f);
        )+
    };
}

macro_rules! crc_functions_5 {
    (@inner $cx:expr, $f:ident) => {
        fn $f(mut cx: FunctionContext) -> JsResult<JsBuffer> {
            let buffer = cx.argument::<JsBuffer>(0)?;

            let crc = cx.borrow(&buffer, |buffer| {
                let data = buffer.as_slice();

                let mut crc = CRCu64::$f();

                crc.digest(data);

                crc.get_crc()
            });

            to_js_buffer_5(&mut cx, crc)
        }

        $cx.export_function(stringify!($f), $f)?;
    };
    ($cx:expr; $($f:ident),+ $(,)* ) => {
        $(
            crc_functions_5!(@inner $cx, $f);
        )+
    };
}

macro_rules! crc_functions_8 {
    (@inner $cx:expr, $f:ident) => {
        fn $f(mut cx: FunctionContext) -> JsResult<JsBuffer> {
            let buffer = cx.argument::<JsBuffer>(0)?;

            let crc = cx.borrow(&buffer, |buffer| {
                let data = buffer.as_slice();

                let mut crc = CRCu64::$f();

                crc.digest(data);

                crc.get_crc()
            });

            to_js_buffer_8(&mut cx, crc)
        }

        $cx.export_function(stringify!($f), $f)?;
    };
    ($cx:expr; $($f:ident),+ $(,)* ) => {
        $(
            crc_functions_8!(@inner $cx, $f);
        )+
    };
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("crc", crc)?;

    crc_functions_1!(cx;
        crc3gsm,
        crc4itu,
        crc4interlaken,
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
    );

    crc_functions_2!(cx;
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
        crc16ccitt_false,
        crc16aug_ccitt,
        crc16buypass,
        crc16cdma2000,
        crc16dds_110,
        crc16dect_r,
        crc16dect_x,
        crc16dnp,
        crc16en_13757,
        crc16genibus,
        crc16maxim,
        crc16mcrf4cc,
        crc16riello,
        crc16t10_dif,
        crc16teledisk,
        crc16tms13157,
        crc16usb,
        crc_a,
        crc16kermit,
        crc16modbus,
        crc16_x25,
        crc16xmodem,
    );

    crc_functions_3!(cx;
        crc17can,
        crc21can,
        crc24,
        crc24ble,
        crc24flexray_a,
        crc24flexray_b,
        crc24lte_a,
        crc24lte_b,
        crc24os9,
    );

    crc_functions_4!(cx;
        crc30cdma,
        crc32,
        crc32mhash,
        crc32bzip2,
        crc32c,
        crc32d,
        crc32mpeg2,
        crc32posix,
        crc32q,
        crc32jamcrc,
        crc32xfer,
    );

    crc_functions_5!(cx;
        crc40gsm,
    );

    crc_functions_8!(cx;
        crc64,
        crc64iso,
        crc64we,
        crc64jones,
    );

    Ok(())
}
