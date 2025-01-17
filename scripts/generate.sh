#!/bin/bash
# I generate the protobuf files in Typescript based on the protobuf files.

SRC="./protobuf"
DST="./src/protobufs"

# remove the generated files and create the directory to put them in.
rm -rf "${DST}"
mkdir "${DST}"


# paths to the plugins. These are installed using npm.
export PATH="./node_modules/.bin:$PATH"
export PROTOC_GEN_TS_PATH="./node_modules/ts-protoc-gen/bin/protoc-gen-ts"
export PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"

# generate the files.
protoc                                               \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}"   \
    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
    --js_out="import_style=commonjs,binary:${DST}"   \
    --ts_out="service=grpc-node,mode=grpc-js:${DST}" \
    --grpc_out="grpc_js:${DST}"                      \
    -I="${SRC}" protobuf/*.proto protobuf/**/*.proto protobuf/**/**/*.proto
