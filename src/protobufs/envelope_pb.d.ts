// package: Anoma.Protobuf
// file: envelope.proto

import * as jspb from "google-protobuf";
import * as node_info_pb from "./node_info_pb";
import * as announcement_pb from "./announcement_pb";
import * as intents_list_intents_pb from "./intents/list_intents_pb";
import * as intents_add_intent_pb from "./intents/add_intent_pb";
import * as indexer_nullifiers_pb from "./indexer/nullifiers_pb";
import * as indexer_unrevealed_commits_pb from "./indexer/unrevealed_commits_pb";
import * as indexer_unspent_resources_pb from "./indexer/unspent_resources_pb";
import * as mempool_dump_pb from "./mempool/dump_pb";

export class Envelope extends jspb.Message {
  hasSenderInfo(): boolean;
  clearSenderInfo(): void;
  getSenderInfo(): node_info_pb.NodeInfo | undefined;
  setSenderInfo(value?: node_info_pb.NodeInfo): void;

  getMessageId(): Uint8Array | string;
  getMessageId_asU8(): Uint8Array;
  getMessageId_asB64(): string;
  setMessageId(value: Uint8Array | string): void;

  hasAnnouncement(): boolean;
  clearAnnouncement(): void;
  getAnnouncement(): announcement_pb.Announcement | undefined;
  setAnnouncement(value?: announcement_pb.Announcement): void;

  hasListIntentsRequest(): boolean;
  clearListIntentsRequest(): void;
  getListIntentsRequest(): intents_list_intents_pb.Request | undefined;
  setListIntentsRequest(value?: intents_list_intents_pb.Request): void;

  hasListIntentsResponse(): boolean;
  clearListIntentsResponse(): void;
  getListIntentsResponse(): intents_list_intents_pb.Response | undefined;
  setListIntentsResponse(value?: intents_list_intents_pb.Response): void;

  hasAddIntentRequest(): boolean;
  clearAddIntentRequest(): void;
  getAddIntentRequest(): intents_add_intent_pb.Request | undefined;
  setAddIntentRequest(value?: intents_add_intent_pb.Request): void;

  hasAddIntentResponse(): boolean;
  clearAddIntentResponse(): void;
  getAddIntentResponse(): intents_add_intent_pb.Response | undefined;
  setAddIntentResponse(value?: intents_add_intent_pb.Response): void;

  hasNullifiersRequest(): boolean;
  clearNullifiersRequest(): void;
  getNullifiersRequest(): indexer_nullifiers_pb.Request | undefined;
  setNullifiersRequest(value?: indexer_nullifiers_pb.Request): void;

  hasNullifiersResponse(): boolean;
  clearNullifiersResponse(): void;
  getNullifiersResponse(): indexer_nullifiers_pb.Response | undefined;
  setNullifiersResponse(value?: indexer_nullifiers_pb.Response): void;

  hasUnrevealedCommitsRequest(): boolean;
  clearUnrevealedCommitsRequest(): void;
  getUnrevealedCommitsRequest(): indexer_unrevealed_commits_pb.Request | undefined;
  setUnrevealedCommitsRequest(value?: indexer_unrevealed_commits_pb.Request): void;

  hasUnrevealedCommitsResponse(): boolean;
  clearUnrevealedCommitsResponse(): void;
  getUnrevealedCommitsResponse(): indexer_unrevealed_commits_pb.Response | undefined;
  setUnrevealedCommitsResponse(value?: indexer_unrevealed_commits_pb.Response): void;

  hasUnspentResourcesRequest(): boolean;
  clearUnspentResourcesRequest(): void;
  getUnspentResourcesRequest(): indexer_unspent_resources_pb.Request | undefined;
  setUnspentResourcesRequest(value?: indexer_unspent_resources_pb.Request): void;

  hasUnspentResourcesResponse(): boolean;
  clearUnspentResourcesResponse(): void;
  getUnspentResourcesResponse(): indexer_unspent_resources_pb.Response | undefined;
  setUnspentResourcesResponse(value?: indexer_unspent_resources_pb.Response): void;

  hasMempoolDumpRequest(): boolean;
  clearMempoolDumpRequest(): void;
  getMempoolDumpRequest(): mempool_dump_pb.Request | undefined;
  setMempoolDumpRequest(value?: mempool_dump_pb.Request): void;

  hasMempoolDumpResponse(): boolean;
  clearMempoolDumpResponse(): void;
  getMempoolDumpResponse(): mempool_dump_pb.Response | undefined;
  setMempoolDumpResponse(value?: mempool_dump_pb.Response): void;

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
    senderInfo?: node_info_pb.NodeInfo.AsObject,
    messageId: Uint8Array | string,
    announcement?: announcement_pb.Announcement.AsObject,
    listIntentsRequest?: intents_list_intents_pb.Request.AsObject,
    listIntentsResponse?: intents_list_intents_pb.Response.AsObject,
    addIntentRequest?: intents_add_intent_pb.Request.AsObject,
    addIntentResponse?: intents_add_intent_pb.Response.AsObject,
    nullifiersRequest?: indexer_nullifiers_pb.Request.AsObject,
    nullifiersResponse?: indexer_nullifiers_pb.Response.AsObject,
    unrevealedCommitsRequest?: indexer_unrevealed_commits_pb.Request.AsObject,
    unrevealedCommitsResponse?: indexer_unrevealed_commits_pb.Response.AsObject,
    unspentResourcesRequest?: indexer_unspent_resources_pb.Request.AsObject,
    unspentResourcesResponse?: indexer_unspent_resources_pb.Response.AsObject,
    mempoolDumpRequest?: mempool_dump_pb.Request.AsObject,
    mempoolDumpResponse?: mempool_dump_pb.Response.AsObject,
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

