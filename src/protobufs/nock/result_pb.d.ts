// package: Anoma.Protobuf.Nock
// file: nock/result.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Success extends jspb.Message { 
    getResult(): Uint8Array | string;
    getResult_asU8(): Uint8Array;
    getResult_asB64(): string;
    setResult(value: Uint8Array | string): Success;
    clearOutputList(): void;
    getOutputList(): Array<Uint8Array | string>;
    getOutputList_asU8(): Array<Uint8Array>;
    getOutputList_asB64(): Array<string>;
    setOutputList(value: Array<Uint8Array | string>): Success;
    addOutput(value: Uint8Array | string, index?: number): Uint8Array | string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Success.AsObject;
    static toObject(includeInstance: boolean, msg: Success): Success.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Success, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Success;
    static deserializeBinaryFromReader(message: Success, reader: jspb.BinaryReader): Success;
}

export namespace Success {
    export type AsObject = {
        result: Uint8Array | string,
        outputList: Array<Uint8Array | string>,
    }
}

export class Error extends jspb.Message { 
    getError(): string;
    setError(value: string): Error;
    clearOutputList(): void;
    getOutputList(): Array<Uint8Array | string>;
    getOutputList_asU8(): Array<Uint8Array>;
    getOutputList_asB64(): Array<string>;
    setOutputList(value: Array<Uint8Array | string>): Error;
    addOutput(value: Uint8Array | string, index?: number): Uint8Array | string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
    export type AsObject = {
        error: string,
        outputList: Array<Uint8Array | string>,
    }
}
