// package: Anoma.Protobuf
// file: node_info.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NodeInfo extends jspb.Message { 
    getNodeId(): Uint8Array | string;
    getNodeId_asU8(): Uint8Array;
    getNodeId_asB64(): string;
    setNodeId(value: Uint8Array | string): NodeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: NodeInfo): NodeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeInfo;
    static deserializeBinaryFromReader(message: NodeInfo, reader: jspb.BinaryReader): NodeInfo;
}

export namespace NodeInfo {
    export type AsObject = {
        nodeId: Uint8Array | string,
    }
}
