// package: Anoma.Protobuf.Announce
// file: announcement.proto

import * as jspb from "google-protobuf";
import * as node_info_pb from "./node_info_pb";

export class Announcement extends jspb.Message {
  hasNodeInfo(): boolean;
  clearNodeInfo(): void;
  getNodeInfo(): node_info_pb.NodeInfo | undefined;
  setNodeInfo(value?: node_info_pb.NodeInfo): void;

  clearEnginesList(): void;
  getEnginesList(): Array<string>;
  setEnginesList(value: Array<string>): void;
  addEngines(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Announcement.AsObject;
  static toObject(includeInstance: boolean, msg: Announcement): Announcement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Announcement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Announcement;
  static deserializeBinaryFromReader(message: Announcement, reader: jspb.BinaryReader): Announcement;
}

export namespace Announcement {
  export type AsObject = {
    nodeInfo?: node_info_pb.NodeInfo.AsObject,
    enginesList: Array<string>,
  }
}

