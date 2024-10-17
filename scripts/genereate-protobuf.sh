npx protoc-gen-grpc \
    --js_out=import_style=commonjs,binary:./ \
    --grpc_out=grpc_js:./ \
    ./proto/anoma.proto
npx protoc-gen-grpc-ts \
    --ts_out=grpc_js:./ \
    ./proto/anoma.proto
