// GENERATED CODE -- DO NOT EDIT!

// package: Anoma.Protobuf
// file: anoma.proto

import * as anoma_pb from "./anoma_pb";
import * as nock_prove_pb from "./nock/prove_pb";
import * as nock_run_pb from "./nock/run_pb";
import * as intents_list_intents_pb from "./intents/list_intents_pb";
import * as intents_add_intent_pb from "./intents/add_intent_pb";
import * as intents_compose_pb from "./intents/compose_pb";
import * as intents_verify_pb from "./intents/verify_pb";
import * as indexer_nullifiers_pb from "./indexer/nullifiers_pb";
import * as indexer_unrevealed_commits_pb from "./indexer/unrevealed_commits_pb";
import * as indexer_unspent_resources_pb from "./indexer/unspent_resources_pb";
import * as mempool_add_transaction_pb from "./mempool/add_transaction_pb";
import * as mempool_dump_pb from "./mempool/dump_pb";
import * as indexer_blocks_get_pb from "./indexer/blocks/get_pb";
import * as indexer_blocks_latest_pb from "./indexer/blocks/latest_pb";
import * as indexer_blocks_root_pb from "./indexer/blocks/root_pb";
import * as indexer_blocks_filter_pb from "./indexer/blocks/filter_pb";
import * as grpc from "@grpc/grpc-js";

interface INockServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  prove: grpc.MethodDefinition<nock_prove_pb.Request, nock_prove_pb.Response>;
  run: grpc.MethodDefinition<nock_run_pb.Request, nock_run_pb.Response>;
}

export const NockServiceService: INockServiceService;

export interface INockServiceServer extends grpc.UntypedServiceImplementation {
  prove: grpc.handleUnaryCall<nock_prove_pb.Request, nock_prove_pb.Response>;
  run: grpc.handleUnaryCall<nock_run_pb.Request, nock_run_pb.Response>;
}

export class NockServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  prove(argument: nock_prove_pb.Request, callback: grpc.requestCallback<nock_prove_pb.Response>): grpc.ClientUnaryCall;
  prove(argument: nock_prove_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nock_prove_pb.Response>): grpc.ClientUnaryCall;
  prove(argument: nock_prove_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nock_prove_pb.Response>): grpc.ClientUnaryCall;
  run(argument: nock_run_pb.Request, callback: grpc.requestCallback<nock_run_pb.Response>): grpc.ClientUnaryCall;
  run(argument: nock_run_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<nock_run_pb.Response>): grpc.ClientUnaryCall;
  run(argument: nock_run_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<nock_run_pb.Response>): grpc.ClientUnaryCall;
}

interface IIntentsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listIntents: grpc.MethodDefinition<intents_list_intents_pb.Request, intents_list_intents_pb.Response>;
  addIntent: grpc.MethodDefinition<intents_add_intent_pb.Request, intents_add_intent_pb.Response>;
  compose: grpc.MethodDefinition<intents_compose_pb.Request, intents_compose_pb.Response>;
  verify: grpc.MethodDefinition<intents_verify_pb.Request, intents_verify_pb.Response>;
}

export const IntentsServiceService: IIntentsServiceService;

export interface IIntentsServiceServer extends grpc.UntypedServiceImplementation {
  listIntents: grpc.handleUnaryCall<intents_list_intents_pb.Request, intents_list_intents_pb.Response>;
  addIntent: grpc.handleUnaryCall<intents_add_intent_pb.Request, intents_add_intent_pb.Response>;
  compose: grpc.handleUnaryCall<intents_compose_pb.Request, intents_compose_pb.Response>;
  verify: grpc.handleUnaryCall<intents_verify_pb.Request, intents_verify_pb.Response>;
}

export class IntentsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listIntents(argument: intents_list_intents_pb.Request, callback: grpc.requestCallback<intents_list_intents_pb.Response>): grpc.ClientUnaryCall;
  listIntents(argument: intents_list_intents_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<intents_list_intents_pb.Response>): grpc.ClientUnaryCall;
  listIntents(argument: intents_list_intents_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<intents_list_intents_pb.Response>): grpc.ClientUnaryCall;
  addIntent(argument: intents_add_intent_pb.Request, callback: grpc.requestCallback<intents_add_intent_pb.Response>): grpc.ClientUnaryCall;
  addIntent(argument: intents_add_intent_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<intents_add_intent_pb.Response>): grpc.ClientUnaryCall;
  addIntent(argument: intents_add_intent_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<intents_add_intent_pb.Response>): grpc.ClientUnaryCall;
  compose(argument: intents_compose_pb.Request, callback: grpc.requestCallback<intents_compose_pb.Response>): grpc.ClientUnaryCall;
  compose(argument: intents_compose_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<intents_compose_pb.Response>): grpc.ClientUnaryCall;
  compose(argument: intents_compose_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<intents_compose_pb.Response>): grpc.ClientUnaryCall;
  verify(argument: intents_verify_pb.Request, callback: grpc.requestCallback<intents_verify_pb.Response>): grpc.ClientUnaryCall;
  verify(argument: intents_verify_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<intents_verify_pb.Response>): grpc.ClientUnaryCall;
  verify(argument: intents_verify_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<intents_verify_pb.Response>): grpc.ClientUnaryCall;
}

interface IIndexerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listNullifiers: grpc.MethodDefinition<indexer_nullifiers_pb.Request, indexer_nullifiers_pb.Response>;
  listUnrevealedCommits: grpc.MethodDefinition<indexer_unrevealed_commits_pb.Request, indexer_unrevealed_commits_pb.Response>;
  listUnspentResources: grpc.MethodDefinition<indexer_unspent_resources_pb.Request, indexer_unspent_resources_pb.Response>;
}

export const IndexerServiceService: IIndexerServiceService;

export interface IIndexerServiceServer extends grpc.UntypedServiceImplementation {
  listNullifiers: grpc.handleUnaryCall<indexer_nullifiers_pb.Request, indexer_nullifiers_pb.Response>;
  listUnrevealedCommits: grpc.handleUnaryCall<indexer_unrevealed_commits_pb.Request, indexer_unrevealed_commits_pb.Response>;
  listUnspentResources: grpc.handleUnaryCall<indexer_unspent_resources_pb.Request, indexer_unspent_resources_pb.Response>;
}

export class IndexerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listNullifiers(argument: indexer_nullifiers_pb.Request, callback: grpc.requestCallback<indexer_nullifiers_pb.Response>): grpc.ClientUnaryCall;
  listNullifiers(argument: indexer_nullifiers_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<indexer_nullifiers_pb.Response>): grpc.ClientUnaryCall;
  listNullifiers(argument: indexer_nullifiers_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<indexer_nullifiers_pb.Response>): grpc.ClientUnaryCall;
  listUnrevealedCommits(argument: indexer_unrevealed_commits_pb.Request, callback: grpc.requestCallback<indexer_unrevealed_commits_pb.Response>): grpc.ClientUnaryCall;
  listUnrevealedCommits(argument: indexer_unrevealed_commits_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<indexer_unrevealed_commits_pb.Response>): grpc.ClientUnaryCall;
  listUnrevealedCommits(argument: indexer_unrevealed_commits_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<indexer_unrevealed_commits_pb.Response>): grpc.ClientUnaryCall;
  listUnspentResources(argument: indexer_unspent_resources_pb.Request, callback: grpc.requestCallback<indexer_unspent_resources_pb.Response>): grpc.ClientUnaryCall;
  listUnspentResources(argument: indexer_unspent_resources_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<indexer_unspent_resources_pb.Response>): grpc.ClientUnaryCall;
  listUnspentResources(argument: indexer_unspent_resources_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<indexer_unspent_resources_pb.Response>): grpc.ClientUnaryCall;
}

interface IMempoolServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  add: grpc.MethodDefinition<mempool_add_transaction_pb.Request, mempool_add_transaction_pb.Response>;
  dump: grpc.MethodDefinition<mempool_dump_pb.Request, mempool_dump_pb.Response>;
}

export const MempoolServiceService: IMempoolServiceService;

export interface IMempoolServiceServer extends grpc.UntypedServiceImplementation {
  add: grpc.handleUnaryCall<mempool_add_transaction_pb.Request, mempool_add_transaction_pb.Response>;
  dump: grpc.handleUnaryCall<mempool_dump_pb.Request, mempool_dump_pb.Response>;
}

export class MempoolServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  add(argument: mempool_add_transaction_pb.Request, callback: grpc.requestCallback<mempool_add_transaction_pb.Response>): grpc.ClientUnaryCall;
  add(argument: mempool_add_transaction_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<mempool_add_transaction_pb.Response>): grpc.ClientUnaryCall;
  add(argument: mempool_add_transaction_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<mempool_add_transaction_pb.Response>): grpc.ClientUnaryCall;
  dump(argument: mempool_dump_pb.Request, callback: grpc.requestCallback<mempool_dump_pb.Response>): grpc.ClientUnaryCall;
  dump(argument: mempool_dump_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<mempool_dump_pb.Response>): grpc.ClientUnaryCall;
  dump(argument: mempool_dump_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<mempool_dump_pb.Response>): grpc.ClientUnaryCall;
}

interface IBlockServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  get: grpc.MethodDefinition<indexer_blocks_get_pb.Request, indexer_blocks_get_pb.Response>;
  latest: grpc.MethodDefinition<indexer_blocks_latest_pb.Request, indexer_blocks_latest_pb.Response>;
  root: grpc.MethodDefinition<indexer_blocks_root_pb.Request, indexer_blocks_root_pb.Response>;
  filter: grpc.MethodDefinition<indexer_blocks_filter_pb.Request, indexer_blocks_filter_pb.Response>;
}

export const BlockServiceService: IBlockServiceService;

export interface IBlockServiceServer extends grpc.UntypedServiceImplementation {
  get: grpc.handleUnaryCall<indexer_blocks_get_pb.Request, indexer_blocks_get_pb.Response>;
  latest: grpc.handleUnaryCall<indexer_blocks_latest_pb.Request, indexer_blocks_latest_pb.Response>;
  root: grpc.handleUnaryCall<indexer_blocks_root_pb.Request, indexer_blocks_root_pb.Response>;
  filter: grpc.handleUnaryCall<indexer_blocks_filter_pb.Request, indexer_blocks_filter_pb.Response>;
}

export class BlockServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  get(argument: indexer_blocks_get_pb.Request, callback: grpc.requestCallback<indexer_blocks_get_pb.Response>): grpc.ClientUnaryCall;
  get(argument: indexer_blocks_get_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<indexer_blocks_get_pb.Response>): grpc.ClientUnaryCall;
  get(argument: indexer_blocks_get_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<indexer_blocks_get_pb.Response>): grpc.ClientUnaryCall;
  latest(argument: indexer_blocks_latest_pb.Request, callback: grpc.requestCallback<indexer_blocks_latest_pb.Response>): grpc.ClientUnaryCall;
  latest(argument: indexer_blocks_latest_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<indexer_blocks_latest_pb.Response>): grpc.ClientUnaryCall;
  latest(argument: indexer_blocks_latest_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<indexer_blocks_latest_pb.Response>): grpc.ClientUnaryCall;
  root(argument: indexer_blocks_root_pb.Request, callback: grpc.requestCallback<indexer_blocks_root_pb.Response>): grpc.ClientUnaryCall;
  root(argument: indexer_blocks_root_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<indexer_blocks_root_pb.Response>): grpc.ClientUnaryCall;
  root(argument: indexer_blocks_root_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<indexer_blocks_root_pb.Response>): grpc.ClientUnaryCall;
  filter(argument: indexer_blocks_filter_pb.Request, callback: grpc.requestCallback<indexer_blocks_filter_pb.Response>): grpc.ClientUnaryCall;
  filter(argument: indexer_blocks_filter_pb.Request, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<indexer_blocks_filter_pb.Response>): grpc.ClientUnaryCall;
  filter(argument: indexer_blocks_filter_pb.Request, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<indexer_blocks_filter_pb.Response>): grpc.ClientUnaryCall;
}
