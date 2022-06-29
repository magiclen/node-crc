#!/usr/bin/env bash

# Exit when any command fails
set -e

# Define archs [0], libs [1] and targets [2]

# WINDOWS
declare -a win32=(i686-pc-windows-gnu node_crc.dll win32-ia32.node)
declare -a win64=(x86_64-pc-windows-gnu node_crc.dll win32-x64.node)

# LINUX GNU
declare -a linux32gnu=(i686-unknown-linux-gnu libnode_crc.so linux-ia32-gnu.node)
declare -a linux64gnu=(x86_64-unknown-linux-gnu libnode_crc.so linux-x64-gnu.node)
declare -a linuxArm64gnu=(aarch64-unknown-linux-gnu libnode_crc.so linux-arm64-gnu.node)

# LINUX MUSL
declare -a linux32musl=(i686-unknown-linux-musl libnode_crc.so linux-ia32-musl.node)
declare -a linux64musl=(x86_64-unknown-linux-musl libnode_crc.so linux-x64-musl.node)
declare -a linuxArm64musl=(aarch64-unknown-linux-musl libnode_crc.so linux-arm64-musl.node)

# MACOS
declare -a darwin64=(x86_64-apple-darwin libnode_crc.dylib darwin-x64.node)
declare -a darwinArm64=(aarch64-apple-darwin libnode_crc.dylib darwin-arm64.node)

# Sum archs, libs and targets in arrays
declare -a archs=("${win32[0]}" "${win64[0]}" "${linux32gnu[0]}" "${linux32musl[0]}" "${linux64gnu[0]}" "${linux64musl[0]}" "${linuxArm64gnu[0]}" "${linuxArm64musl[0]}" "${darwin64[0]}" "${darwinArm64[0]}")
declare -a libs=("${win32[1]}" "${win64[1]}" "${linux32gnu[1]}" "${linux32musl[1]}" "${linux64gnu[1]}" "${linux64musl[1]}" "${linuxArm64gnu[1]}" "${linuxArm64musl[1]}" "${darwin64[1]}" "${darwinArm64[1]}")
declare -a targets=("${win32[2]}" "${win64[2]}" "${linux32gnu[2]}" "${linux32musl[2]}" "${linux64gnu[2]}" "${linux64musl[2]}" "${linuxArm64gnu[2]}" "${linuxArm64musl[2]}" "${darwin64[2]}" "${darwinArm64[2]}")

# Set debug or release flavor
flavor=release

# Loop over archs and build each target
for (( i=0; i<${#archs[@]}; i++ )); do
   temp=target/"$flavor"
   export="target/${archs[i]}/$flavor/${libs[i]}"
   destination="bin/${targets[i]}"

   # Check if binary file already exists
   if [[ -f "$destination" ]]; then
      echo
      echo "Skipping ${archs[i]} (binary exists)"
      echo "==========================================="
   else
      # Install toolchain and use cargo for darwin
      if [[ "${archs[i]}" = *"darwin"* ]]; then
         echo
         echo "Install toolchain for ${archs[i]}"
         echo "========================================"
         rustup target add "${archs[i]}"

         echo
         echo "Building binary for ${archs[i]}"
         cargo build --"$flavor" --target="${archs[i]}"
      else
         echo
         echo "Building binary for ${archs[i]}"
         echo "========================================"
         # Add build flags for linux musl variant
         if [[ "${archs[i]}" = *"musl"* ]]; then
            RUSTFLAGS="-C target-feature=-crt-static" cross build --"$flavor" --target="${archs[i]}"
         else
            cross build --"$flavor" --target="${archs[i]}"
         fi
      fi

      echo
      echo "Copy binary ${libs[i]} to bin/${targets[i]}"
      cp "$export" "$destination"

      echo
      echo "Clean build folder: targets/$flavor"
      echo
      rimraf "$temp"

      echo "Done"
   fi
done