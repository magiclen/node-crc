#!/usr/bin/env bash

# Exit when any command fails
set -e

# Define archs [0], libs [1] and targets [2]
declare -a win32=(i686-pc-windows-gnu node_crc.dll win32-ia32.node)
declare -a win64=(x86_64-pc-windows-gnu node_crc.dll win32-x64.node)
declare -a linux32=(i686-unknown-linux-gnu libnode_crc.so linux-ia32.node)
declare -a linux64=(x86_64-unknown-linux-gnu libnode_crc.so linux-x64.node)
declare -a linuxArm64=(aarch64-unknown-linux-gnu libnode_crc.so linux-arm64.node)
declare -a darwin64=(x86_64-apple-darwin libnode_crc.dylib darwin-x64.node)
declare -a darwinArm64=(aarch64-apple-darwin libnode_crc.dylib darwin-arm64.node)

# Sum archs, libs and targets in arrays
declare -a archs=("${win32[0]}" "${win64[0]}" "${linux32[0]}" "${linux64[0]}" "${linuxArm64[0]}" "${darwin64[0]}" "${darwinArm64[0]}")
declare -a libs=("${win32[1]}" "${win64[1]}" "${linux32[1]}" "${linux64[1]}" "${linuxArm64[1]}" "${darwin64[1]}" "${darwinArm64[1]}")
declare -a targets=("${win32[2]}" "${win64[2]}" "${linux32[2]}" "${linux64[2]}" "${linuxArm64[2]}" "${darwin64[2]}" "${darwinArm64[2]}")

# Set debug or release flavor
flavor=release

# Loop over archs and build each target
for (( i=0; i<${#archs[@]}; i++ )); do

   # Install toolchain and use cargo for darwin
   if [[ $string == *"${archs[i]}"* ]]; then
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
      cross build --"$flavor" --target="${archs[i]}"
   fi

   echo
   echo "Copy binary ${libs[i]} to bin/${targets[i]}"
   echo
   cp "target/${archs[i]}/$flavor/${libs[i]}" "bin/${targets[i]}"

   echo
   echo "Clean build folder: targets/$flavor"
   echo
   rimraf target/"$flavor"

   echo "Done"
done