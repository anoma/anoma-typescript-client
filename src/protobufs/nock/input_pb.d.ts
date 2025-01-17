// package: Anoma.Protobuf.Nock
// file: nock/input.proto

import * as jspb from "google-protobuf";

export class Input extends jspb.Message {
  hasJammed(): boolean;
  clearJammed(): void;
  getJammed(): Uint8Array | string;
  getJammed_asU8(): Uint8Array;
  getJammed_asB64(): string;
  setJammed(value: Uint8Array | string): void;

  hasText(): boolean;
  clearText(): void;
  getText(): string;
  setText(value: string): void;

  getInputCase(): Input.InputCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Input.AsObject;
  static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Input;
  static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
}

export namespace Input {
  export type AsObject = {
    jammed: Uint8Array | string,
    text: string,
  }

  export enum InputCase {
    INPUT_NOT_SET = 0,
    JAMMED = 1,
    TEXT = 2,
  }
}

