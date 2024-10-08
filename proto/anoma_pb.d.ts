// package: Anoma.Protobuf
// file: proto/anoma.proto

import * as jspb from 'google-protobuf';

export class Announcement extends jspb.Message {
  hasNodeInfo(): boolean;
  clearNodeInfo(): void;
  getNodeInfo(): NodeInfo | undefined;
  setNodeInfo(value?: NodeInfo): void;

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
    nodeInfo?: NodeInfo.AsObject,
    enginesList: Array<string>,
  }
}

export class NodeInfo extends jspb.Message {
  getNodeId(): Uint8Array | string;
  getNodeId_asU8(): Uint8Array;
  getNodeId_asB64(): string;
  setNodeId(value: Uint8Array | string): void;

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

export class Prove extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Prove.AsObject;
  static toObject(includeInstance: boolean, msg: Prove): Prove.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Prove, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Prove;
  static deserializeBinaryFromReader(message: Prove, reader: jspb.BinaryReader): Prove;
}

export namespace Prove {
  export type AsObject = {
  }

  export class Request extends jspb.Message {
    getIntent(): string;
    setIntent(value: string): void;

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
      intent: string,
    }
  }

  export class Response extends jspb.Message {
    getResult(): string;
    setResult(value: string): void;

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
      result: string,
    }
  }
}

export class Intent extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

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
    value: number,
  }
}

export class IntentPool extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntentPool.AsObject;
  static toObject(includeInstance: boolean, msg: IntentPool): IntentPool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntentPool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntentPool;
  static deserializeBinaryFromReader(message: IntentPool, reader: jspb.BinaryReader): IntentPool;
}

export namespace IntentPool {
  export type AsObject = {
  }

  export class AddIntent extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddIntent.AsObject;
    static toObject(includeInstance: boolean, msg: AddIntent): AddIntent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddIntent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddIntent;
    static deserializeBinaryFromReader(message: AddIntent, reader: jspb.BinaryReader): AddIntent;
  }

  export namespace AddIntent {
    export type AsObject = {
    }

    export class Request extends jspb.Message {
      hasIntent(): boolean;
      clearIntent(): void;
      getIntent(): Intent | undefined;
      setIntent(value?: Intent): void;

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
        intent?: Intent.AsObject,
      }
    }

    export class Response extends jspb.Message {
      getResult(): string;
      setResult(value: string): void;

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
        result: string,
      }
    }
  }

  export class ListIntents extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListIntents.AsObject;
    static toObject(includeInstance: boolean, msg: ListIntents): ListIntents.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListIntents, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListIntents;
    static deserializeBinaryFromReader(message: ListIntents, reader: jspb.BinaryReader): ListIntents;
  }

  export namespace ListIntents {
    export type AsObject = {
    }

    export class Request extends jspb.Message {
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
      }
    }

    export class Response extends jspb.Message {
      clearIntentsList(): void;
      getIntentsList(): Array<string>;
      setIntentsList(value: Array<string>): void;
      addIntents(value: string, index?: number): string;

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
        intentsList: Array<string>,
      }
    }
  }
}

export class Indexer extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Indexer.AsObject;
  static toObject(includeInstance: boolean, msg: Indexer): Indexer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Indexer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Indexer;
  static deserializeBinaryFromReader(message: Indexer, reader: jspb.BinaryReader): Indexer;
}

export namespace Indexer {
  export type AsObject = {
  }

  export class Nullifiers extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Nullifiers.AsObject;
    static toObject(includeInstance: boolean, msg: Nullifiers): Nullifiers.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Nullifiers, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Nullifiers;
    static deserializeBinaryFromReader(message: Nullifiers, reader: jspb.BinaryReader): Nullifiers;
  }

  export namespace Nullifiers {
    export type AsObject = {
    }

    export class Request extends jspb.Message {
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
      }
    }

    export class Response extends jspb.Message {
      clearNullifiersList(): void;
      getNullifiersList(): Array<string>;
      setNullifiersList(value: Array<string>): void;
      addNullifiers(value: string, index?: number): string;

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
        nullifiersList: Array<string>,
      }
    }
  }

  export class UnrevealedCommits extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnrevealedCommits.AsObject;
    static toObject(includeInstance: boolean, msg: UnrevealedCommits): UnrevealedCommits.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnrevealedCommits, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnrevealedCommits;
    static deserializeBinaryFromReader(message: UnrevealedCommits, reader: jspb.BinaryReader): UnrevealedCommits;
  }

  export namespace UnrevealedCommits {
    export type AsObject = {
    }

    export class Request extends jspb.Message {
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
      }
    }

    export class Response extends jspb.Message {
      clearCommitsList(): void;
      getCommitsList(): Array<string>;
      setCommitsList(value: Array<string>): void;
      addCommits(value: string, index?: number): string;

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
        commitsList: Array<string>,
      }
    }
  }

  export class UnspentResources extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnspentResources.AsObject;
    static toObject(includeInstance: boolean, msg: UnspentResources): UnspentResources.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnspentResources, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnspentResources;
    static deserializeBinaryFromReader(message: UnspentResources, reader: jspb.BinaryReader): UnspentResources;
  }

  export namespace UnspentResources {
    export type AsObject = {
    }

    export class Request extends jspb.Message {
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
      }
    }

    export class Response extends jspb.Message {
      clearUnspentResourcesList(): void;
      getUnspentResourcesList(): Array<string>;
      setUnspentResourcesList(value: Array<string>): void;
      addUnspentResources(value: string, index?: number): string;

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
        unspentResourcesList: Array<string>,
      }
    }
  }
}

export class MemPool extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemPool.AsObject;
  static toObject(includeInstance: boolean, msg: MemPool): MemPool.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemPool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemPool;
  static deserializeBinaryFromReader(message: MemPool, reader: jspb.BinaryReader): MemPool;
}

export namespace MemPool {
  export type AsObject = {
  }

  export class Dump extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dump.AsObject;
    static toObject(includeInstance: boolean, msg: Dump): Dump.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dump, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dump;
    static deserializeBinaryFromReader(message: Dump, reader: jspb.BinaryReader): Dump;
  }

  export namespace Dump {
    export type AsObject = {
    }

    export class Request extends jspb.Message {
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
      }
    }

    export class Response extends jspb.Message {
      clearDumpsList(): void;
      getDumpsList(): Array<string>;
      setDumpsList(value: Array<string>): void;
      addDumps(value: string, index?: number): string;

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
        dumpsList: Array<string>,
      }
    }
  }
}

export class Envelope extends jspb.Message {
  hasSenderInfo(): boolean;
  clearSenderInfo(): void;
  getSenderInfo(): NodeInfo | undefined;
  setSenderInfo(value?: NodeInfo): void;

  getMessageId(): Uint8Array | string;
  getMessageId_asU8(): Uint8Array;
  getMessageId_asB64(): string;
  setMessageId(value: Uint8Array | string): void;

  hasAnnouncement(): boolean;
  clearAnnouncement(): void;
  getAnnouncement(): Announcement | undefined;
  setAnnouncement(value?: Announcement): void;

  hasListIntentsRequest(): boolean;
  clearListIntentsRequest(): void;
  getListIntentsRequest(): IntentPool.ListIntents.Request | undefined;
  setListIntentsRequest(value?: IntentPool.ListIntents.Request): void;

  hasListIntentsResponse(): boolean;
  clearListIntentsResponse(): void;
  getListIntentsResponse(): IntentPool.ListIntents.Response | undefined;
  setListIntentsResponse(value?: IntentPool.ListIntents.Response): void;

  hasAddIntentRequest(): boolean;
  clearAddIntentRequest(): void;
  getAddIntentRequest(): IntentPool.AddIntent.Request | undefined;
  setAddIntentRequest(value?: IntentPool.AddIntent.Request): void;

  hasAddIntentResponse(): boolean;
  clearAddIntentResponse(): void;
  getAddIntentResponse(): IntentPool.AddIntent.Response | undefined;
  setAddIntentResponse(value?: IntentPool.AddIntent.Response): void;

  hasNullifiersRequest(): boolean;
  clearNullifiersRequest(): void;
  getNullifiersRequest(): Indexer.Nullifiers.Request | undefined;
  setNullifiersRequest(value?: Indexer.Nullifiers.Request): void;

  hasNullifiersResponse(): boolean;
  clearNullifiersResponse(): void;
  getNullifiersResponse(): Indexer.Nullifiers.Response | undefined;
  setNullifiersResponse(value?: Indexer.Nullifiers.Response): void;

  hasUnrevealedCommitsRequest(): boolean;
  clearUnrevealedCommitsRequest(): void;
  getUnrevealedCommitsRequest(): Indexer.UnrevealedCommits.Request | undefined;
  setUnrevealedCommitsRequest(value?: Indexer.UnrevealedCommits.Request): void;

  hasUnrevealedCommitsResponse(): boolean;
  clearUnrevealedCommitsResponse(): void;
  getUnrevealedCommitsResponse(): Indexer.UnrevealedCommits.Response | undefined;
  setUnrevealedCommitsResponse(value?: Indexer.UnrevealedCommits.Response): void;

  hasUnspentResourcesRequest(): boolean;
  clearUnspentResourcesRequest(): void;
  getUnspentResourcesRequest(): Indexer.UnspentResources.Request | undefined;
  setUnspentResourcesRequest(value?: Indexer.UnspentResources.Request): void;

  hasUnspentResourcesResponse(): boolean;
  clearUnspentResourcesResponse(): void;
  getUnspentResourcesResponse(): Indexer.UnspentResources.Response | undefined;
  setUnspentResourcesResponse(value?: Indexer.UnspentResources.Response): void;

  hasMempoolDumpRequest(): boolean;
  clearMempoolDumpRequest(): void;
  getMempoolDumpRequest(): MemPool.Dump.Request | undefined;
  setMempoolDumpRequest(value?: MemPool.Dump.Request): void;

  hasMempoolDumpResponse(): boolean;
  clearMempoolDumpResponse(): void;
  getMempoolDumpResponse(): MemPool.Dump.Response | undefined;
  setMempoolDumpResponse(value?: MemPool.Dump.Response): void;

  getInnerMessageCase(): Envelope.InnerMessageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Envelope.AsObject;
  static toObject(includeInstance: boolean, msg: Envelope): Envelope.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Envelope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Envelope;
  static deserializeBinaryFromReader(message: Envelope, reader: jspb.BinaryReader): Envelope;
}

export namespace Envelope {
  export type AsObject = {
    senderInfo?: NodeInfo.AsObject,
    messageId: Uint8Array | string,
    announcement?: Announcement.AsObject,
    listIntentsRequest?: IntentPool.ListIntents.Request.AsObject,
    listIntentsResponse?: IntentPool.ListIntents.Response.AsObject,
    addIntentRequest?: IntentPool.AddIntent.Request.AsObject,
    addIntentResponse?: IntentPool.AddIntent.Response.AsObject,
    nullifiersRequest?: Indexer.Nullifiers.Request.AsObject,
    nullifiersResponse?: Indexer.Nullifiers.Response.AsObject,
    unrevealedCommitsRequest?: Indexer.UnrevealedCommits.Request.AsObject,
    unrevealedCommitsResponse?: Indexer.UnrevealedCommits.Response.AsObject,
    unspentResourcesRequest?: Indexer.UnspentResources.Request.AsObject,
    unspentResourcesResponse?: Indexer.UnspentResources.Response.AsObject,
    mempoolDumpRequest?: MemPool.Dump.Request.AsObject,
    mempoolDumpResponse?: MemPool.Dump.Response.AsObject,
  }

  export enum InnerMessageCase {
    INNER_MESSAGE_NOT_SET = 0,
    ANNOUNCEMENT = 3,
    LIST_INTENTS_REQUEST = 4,
    LIST_INTENTS_RESPONSE = 5,
    ADD_INTENT_REQUEST = 6,
    ADD_INTENT_RESPONSE = 7,
    NULLIFIERS_REQUEST = 8,
    NULLIFIERS_RESPONSE = 9,
    UNREVEALED_COMMITS_REQUEST = 10,
    UNREVEALED_COMMITS_RESPONSE = 11,
    UNSPENT_RESOURCES_REQUEST = 12,
    UNSPENT_RESOURCES_RESPONSE = 13,
    MEMPOOL_DUMP_REQUEST = 14,
    MEMPOOL_DUMP_RESPONSE = 15,
  }
}

