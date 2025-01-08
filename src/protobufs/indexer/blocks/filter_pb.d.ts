// package: Anoma.Protobuf.Indexer.Blocks.Filtered
// file: indexer/blocks/filter.proto

import * as jspb from "google-protobuf";
import * as node_info_pb from "../../node_info_pb";

export class Request extends jspb.Message {
  hasNodeInfo(): boolean;
  clearNodeInfo(): void;
  getNodeInfo(): node_info_pb.NodeInfo | undefined;
  setNodeInfo(value?: node_info_pb.NodeInfo): void;

  clearFiltersList(): void;
  getFiltersList(): Array<Filter>;
  setFiltersList(value: Array<Filter>): void;
  addFilters(value?: Filter, index?: number): Filter;

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
    filtersList: Array<Filter.AsObject>,
  }
}

export class Response extends jspb.Message {
  clearResourcesList(): void;
  getResourcesList(): Array<Uint8Array | string>;
  getResourcesList_asU8(): Array<Uint8Array>;
  getResourcesList_asB64(): Array<string>;
  setResourcesList(value: Array<Uint8Array | string>): void;
  addResources(value: Uint8Array | string, index?: number): Uint8Array | string;

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
    resourcesList: Array<Uint8Array | string>,
  }
}

export class Filter extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): Uint8Array | string;
  getOwner_asU8(): Uint8Array;
  getOwner_asB64(): string;
  setOwner(value: Uint8Array | string): void;

  hasKind(): boolean;
  clearKind(): void;
  getKind(): Uint8Array | string;
  getKind_asU8(): Uint8Array;
  getKind_asB64(): string;
  setKind(value: Uint8Array | string): void;

  getFilterCase(): Filter.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    owner: Uint8Array | string,
    kind: Uint8Array | string,
  }

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    OWNER = 1,
    KIND = 2,
  }
}

