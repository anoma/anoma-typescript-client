// package: Anoma.Protobuf.Indexer.Blocks.Get
// file: indexer/blocks/get.proto

import * as jspb from "google-protobuf";
import * as node_info_pb from "../../node_info_pb";
import * as indexer_blocks_block_pb from "../../indexer/blocks/block_pb";

export class Request extends jspb.Message {
  hasNodeInfo(): boolean;
  clearNodeInfo(): void;
  getNodeInfo(): node_info_pb.NodeInfo | undefined;
  setNodeInfo(value?: node_info_pb.NodeInfo): void;

  hasAfter(): boolean;
  clearAfter(): void;
  getAfter(): number;
  setAfter(value: number): void;

  hasBefore(): boolean;
  clearBefore(): void;
  getBefore(): number;
  setBefore(value: number): void;

  getIndexCase(): Request.IndexCase;
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
    after: number,
    before: number,
  }

  export enum IndexCase {
    INDEX_NOT_SET = 0,
    AFTER = 2,
    BEFORE = 3,
  }
}

export class Response extends jspb.Message {
  clearBlocksList(): void;
  getBlocksList(): Array<indexer_blocks_block_pb.Block>;
  setBlocksList(value: Array<indexer_blocks_block_pb.Block>): void;
  addBlocks(value?: indexer_blocks_block_pb.Block, index?: number): indexer_blocks_block_pb.Block;

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
    blocksList: Array<indexer_blocks_block_pb.Block.AsObject>,
  }
}

