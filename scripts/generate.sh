#!/bin/bash
# I generate the protobuf files in Typescript based on the protobuf files.

SRC="./protobuf"
DST="./src/protobufs"

# remove the generated files and create the directory to put them in.
rm -rf "${DST}"
mkdir "${DST}"


# paths to the plugins. These are installed using npm.
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"
PROTOC_GEN_GRPC_TOOLS="./node_modules/.bin/grpc_tools_node_protoc"

# generate the files.
"${PROTOC_GEN_GRPC_TOOLS}"                           \
    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
    --js_out="import_style=commonjs,binary:${DST}"   \
    --grpc_out=grpc_js:"${DST}"                      \
    -I="${SRC}" protobuf/*.proto protobuf/**/*.proto protobuf/**/**/*.proto

protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:"${DST}" \
    -I="${SRC}" protobuf/*.proto protobuf/**/*.proto protobuf/**/**/*.proto
