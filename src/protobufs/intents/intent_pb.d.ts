// package: Anoma.Protobuf.Intents
// file: intents/intent.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Intent extends jspb.Message { 
    getIntent(): Uint8Array | string;
    getIntent_asU8(): Uint8Array;
    getIntent_asB64(): string;
    setIntent(value: Uint8Array | string): Intent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Intent.AsObject;
    static toObject(includeInstance: boolean, msg: Intent): Intent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Intent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Intent;
    static deserializeBinaryFromReader(message: Intent, reader: jspb.BinaryReader): Intent;
}

export namespace Intent {
    export type AsObject = {
        intent: Uint8Array | string,
    }
}
