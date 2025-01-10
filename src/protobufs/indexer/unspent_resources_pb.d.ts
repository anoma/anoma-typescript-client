// package: Anoma.Protobuf.Indexer.UnspentResources
// file: indexer/unspent_resources.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as node_info_pb from "../node_info_pb";

export class Request extends jspb.Message { 

    hasNodeInfo(): boolean;
    clearNodeInfo(): void;
    getNodeInfo(): node_info_pb.NodeInfo | undefined;
    setNodeInfo(value?: node_info_pb.NodeInfo): Request;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
    export type AsObject = {
        nodeInfo?: node_info_pb.NodeInfo.AsObject,
    }
}

export class Response extends jspb.Message { 
    clearUnspentResourcesList(): void;
    getUnspentResourcesList(): Array<Uint8Array | string>;
    getUnspentResourcesList_asU8(): Array<Uint8Array>;
    getUnspentResourcesList_asB64(): Array<string>;
    setUnspentResourcesList(value: Array<Uint8Array | string>): Response;
    addUnspentResources(value: Uint8Array | string, index?: number): Uint8Array | string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
    export type AsObject = {
        unspentResourcesList: Array<Uint8Array | string>,
    }
}
