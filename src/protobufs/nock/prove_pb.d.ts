// package: Anoma.Protobuf.Nock.Prove
// file: nock/prove.proto

import * as jspb from "google-protobuf";
import * as nock_input_pb from "../nock/input_pb";
import * as node_info_pb from "../node_info_pb";
import * as nock_result_pb from "../nock/result_pb";

export class Request extends jspb.Message {
  hasNodeInfo(): boolean;
  clearNodeInfo(): void;
  getNodeInfo(): node_info_pb.NodeInfo | undefined;
  setNodeInfo(value?: node_info_pb.NodeInfo): void;

  hasJammedProgram(): boolean;
  clearJammedProgram(): void;
  getJammedProgram(): Uint8Array | string;
  getJammedProgram_asU8(): Uint8Array;
  getJammedProgram_asB64(): string;
  setJammedProgram(value: Uint8Array | string): void;

  hasTextProgram(): boolean;
  clearTextProgram(): void;
  getTextProgram(): string;
  setTextProgram(value: string): void;

  clearPublicInputsList(): void;
  getPublicInputsList(): Array<nock_input_pb.Input>;
  setPublicInputsList(value: Array<nock_input_pb.Input>): void;
  addPublicInputs(value?: nock_input_pb.Input, index?: number): nock_input_pb.Input;

  clearPrivateInputsList(): void;
  getPrivateInputsList(): Array<nock_input_pb.Input>;
  setPrivateInputsList(value: Array<nock_input_pb.Input>): void;
  addPrivateInputs(value?: nock_input_pb.Input, index?: number): nock_input_pb.Input;

  getProgramCase(): Request.ProgramCase;
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
    jammedProgram: Uint8Array | string,
    textProgram: string,
    publicInputsList: Array<nock_input_pb.Input.AsObject>,
    privateInputsList: Array<nock_input_pb.Input.AsObject>,
  }

  export enum ProgramCase {
    PROGRAM_NOT_SET = 0,
    JAMMED_PROGRAM = 2,
    TEXT_PROGRAM = 3,
  }
}

export class Response extends jspb.Message {
  hasSuccess(): boolean;
  clearSuccess(): void;
  getSuccess(): nock_result_pb.Success | undefined;
  setSuccess(value?: nock_result_pb.Success): void;

  hasError(): boolean;
  clearError(): void;
  getError(): nock_result_pb.Error | undefined;
  setError(value?: nock_result_pb.Error): void;

  getResultCase(): Response.ResultCase;
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
    success?: nock_result_pb.Success.AsObject,
    error?: nock_result_pb.Error.AsObject,
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    SUCCESS = 1,
    ERROR = 2,
  }
}

