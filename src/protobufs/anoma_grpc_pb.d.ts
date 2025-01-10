// package: Anoma.Protobuf
// file: anoma.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
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

interface INockServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    prove: INockServiceService_IProve;
    run: INockServiceService_IRun;
}

interface INockServiceService_IProve extends grpc.MethodDefinition<nock_prove_pb.Request, nock_prove_pb.Response> {
    path: "/Anoma.Protobuf.NockService/Prove";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<nock_prove_pb.Request>;
    requestDeserialize: grpc.deserialize<nock_prove_pb.Request>;
    responseSerialize: grpc.serialize<nock_prove_pb.Response>;
    responseDeserialize: grpc.deserialize<nock_prove_pb.Response>;
}
interface INockServiceService_IRun extends grpc.MethodDefinition<nock_run_pb.Request, nock_run_pb.Response> {
    path: "/Anoma.Protobuf.NockService/Run";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<nock_run_pb.Request>;
    requestDeserialize: grpc.deserialize<nock_run_pb.Request>;
    responseSerialize: grpc.serialize<nock_run_pb.Response>;
    responseDeserialize: grpc.deserialize<nock_run_pb.Response>;
}

export const NockServiceService: INockServiceService;

export interface INockServiceServer extends grpc.UntypedServiceImplementation {
    prove: grpc.handleUnaryCall<nock_prove_pb.Request, nock_prove_pb.Response>;
    run: grpc.handleUnaryCall<nock_run_pb.Request, nock_run_pb.Response>;
}

export interface INockServiceClient {
    prove(request: nock_prove_pb.Request, callback: (error: grpc.ServiceError | null, response: nock_prove_pb.Response) => void): grpc.ClientUnaryCall;
    prove(request: nock_prove_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nock_prove_pb.Response) => void): grpc.ClientUnaryCall;
    prove(request: nock_prove_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nock_prove_pb.Response) => void): grpc.ClientUnaryCall;
    run(request: nock_run_pb.Request, callback: (error: grpc.ServiceError | null, response: nock_run_pb.Response) => void): grpc.ClientUnaryCall;
    run(request: nock_run_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nock_run_pb.Response) => void): grpc.ClientUnaryCall;
    run(request: nock_run_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nock_run_pb.Response) => void): grpc.ClientUnaryCall;
}

export class NockServiceClient extends grpc.Client implements INockServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public prove(request: nock_prove_pb.Request, callback: (error: grpc.ServiceError | null, response: nock_prove_pb.Response) => void): grpc.ClientUnaryCall;
    public prove(request: nock_prove_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nock_prove_pb.Response) => void): grpc.ClientUnaryCall;
    public prove(request: nock_prove_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nock_prove_pb.Response) => void): grpc.ClientUnaryCall;
    public run(request: nock_run_pb.Request, callback: (error: grpc.ServiceError | null, response: nock_run_pb.Response) => void): grpc.ClientUnaryCall;
    public run(request: nock_run_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: nock_run_pb.Response) => void): grpc.ClientUnaryCall;
    public run(request: nock_run_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: nock_run_pb.Response) => void): grpc.ClientUnaryCall;
}

interface IIntentsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listIntents: IIntentsServiceService_IListIntents;
    addIntent: IIntentsServiceService_IAddIntent;
    compose: IIntentsServiceService_ICompose;
    verify: IIntentsServiceService_IVerify;
}

interface IIntentsServiceService_IListIntents extends grpc.MethodDefinition<intents_list_intents_pb.Request, intents_list_intents_pb.Response> {
    path: "/Anoma.Protobuf.IntentsService/ListIntents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<intents_list_intents_pb.Request>;
    requestDeserialize: grpc.deserialize<intents_list_intents_pb.Request>;
    responseSerialize: grpc.serialize<intents_list_intents_pb.Response>;
    responseDeserialize: grpc.deserialize<intents_list_intents_pb.Response>;
}
interface IIntentsServiceService_IAddIntent extends grpc.MethodDefinition<intents_add_intent_pb.Request, intents_add_intent_pb.Response> {
    path: "/Anoma.Protobuf.IntentsService/AddIntent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<intents_add_intent_pb.Request>;
    requestDeserialize: grpc.deserialize<intents_add_intent_pb.Request>;
    responseSerialize: grpc.serialize<intents_add_intent_pb.Response>;
    responseDeserialize: grpc.deserialize<intents_add_intent_pb.Response>;
}
interface IIntentsServiceService_ICompose extends grpc.MethodDefinition<intents_compose_pb.Request, intents_compose_pb.Response> {
    path: "/Anoma.Protobuf.IntentsService/Compose";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<intents_compose_pb.Request>;
    requestDeserialize: grpc.deserialize<intents_compose_pb.Request>;
    responseSerialize: grpc.serialize<intents_compose_pb.Response>;
    responseDeserialize: grpc.deserialize<intents_compose_pb.Response>;
}
interface IIntentsServiceService_IVerify extends grpc.MethodDefinition<intents_verify_pb.Request, intents_verify_pb.Response> {
    path: "/Anoma.Protobuf.IntentsService/Verify";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<intents_verify_pb.Request>;
    requestDeserialize: grpc.deserialize<intents_verify_pb.Request>;
    responseSerialize: grpc.serialize<intents_verify_pb.Response>;
    responseDeserialize: grpc.deserialize<intents_verify_pb.Response>;
}

export const IntentsServiceService: IIntentsServiceService;

export interface IIntentsServiceServer extends grpc.UntypedServiceImplementation {
    listIntents: grpc.handleUnaryCall<intents_list_intents_pb.Request, intents_list_intents_pb.Response>;
    addIntent: grpc.handleUnaryCall<intents_add_intent_pb.Request, intents_add_intent_pb.Response>;
    compose: grpc.handleUnaryCall<intents_compose_pb.Request, intents_compose_pb.Response>;
    verify: grpc.handleUnaryCall<intents_verify_pb.Request, intents_verify_pb.Response>;
}

export interface IIntentsServiceClient {
    listIntents(request: intents_list_intents_pb.Request, callback: (error: grpc.ServiceError | null, response: intents_list_intents_pb.Response) => void): grpc.ClientUnaryCall;
    listIntents(request: intents_list_intents_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: intents_list_intents_pb.Response) => void): grpc.ClientUnaryCall;
    listIntents(request: intents_list_intents_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: intents_list_intents_pb.Response) => void): grpc.ClientUnaryCall;
    addIntent(request: intents_add_intent_pb.Request, callback: (error: grpc.ServiceError | null, response: intents_add_intent_pb.Response) => void): grpc.ClientUnaryCall;
    addIntent(request: intents_add_intent_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: intents_add_intent_pb.Response) => void): grpc.ClientUnaryCall;
    addIntent(request: intents_add_intent_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: intents_add_intent_pb.Response) => void): grpc.ClientUnaryCall;
    compose(request: intents_compose_pb.Request, callback: (error: grpc.ServiceError | null, response: intents_compose_pb.Response) => void): grpc.ClientUnaryCall;
    compose(request: intents_compose_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: intents_compose_pb.Response) => void): grpc.ClientUnaryCall;
    compose(request: intents_compose_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: intents_compose_pb.Response) => void): grpc.ClientUnaryCall;
    verify(request: intents_verify_pb.Request, callback: (error: grpc.ServiceError | null, response: intents_verify_pb.Response) => void): grpc.ClientUnaryCall;
    verify(request: intents_verify_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: intents_verify_pb.Response) => void): grpc.ClientUnaryCall;
    verify(request: intents_verify_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: intents_verify_pb.Response) => void): grpc.ClientUnaryCall;
}

export class IntentsServiceClient extends grpc.Client implements IIntentsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listIntents(request: intents_list_intents_pb.Request, callback: (error: grpc.ServiceError | null, response: intents_list_intents_pb.Response) => void): grpc.ClientUnaryCall;
    public listIntents(request: intents_list_intents_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: intents_list_intents_pb.Response) => void): grpc.ClientUnaryCall;
    public listIntents(request: intents_list_intents_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: intents_list_intents_pb.Response) => void): grpc.ClientUnaryCall;
    public addIntent(request: intents_add_intent_pb.Request, callback: (error: grpc.ServiceError | null, response: intents_add_intent_pb.Response) => void): grpc.ClientUnaryCall;
    public addIntent(request: intents_add_intent_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: intents_add_intent_pb.Response) => void): grpc.ClientUnaryCall;
    public addIntent(request: intents_add_intent_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: intents_add_intent_pb.Response) => void): grpc.ClientUnaryCall;
    public compose(request: intents_compose_pb.Request, callback: (error: grpc.ServiceError | null, response: intents_compose_pb.Response) => void): grpc.ClientUnaryCall;
    public compose(request: intents_compose_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: intents_compose_pb.Response) => void): grpc.ClientUnaryCall;
    public compose(request: intents_compose_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: intents_compose_pb.Response) => void): grpc.ClientUnaryCall;
    public verify(request: intents_verify_pb.Request, callback: (error: grpc.ServiceError | null, response: intents_verify_pb.Response) => void): grpc.ClientUnaryCall;
    public verify(request: intents_verify_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: intents_verify_pb.Response) => void): grpc.ClientUnaryCall;
    public verify(request: intents_verify_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: intents_verify_pb.Response) => void): grpc.ClientUnaryCall;
}

interface IIndexerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listNullifiers: IIndexerServiceService_IListNullifiers;
    listUnrevealedCommits: IIndexerServiceService_IListUnrevealedCommits;
    listUnspentResources: IIndexerServiceService_IListUnspentResources;
}

interface IIndexerServiceService_IListNullifiers extends grpc.MethodDefinition<indexer_nullifiers_pb.Request, indexer_nullifiers_pb.Response> {
    path: "/Anoma.Protobuf.IndexerService/ListNullifiers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<indexer_nullifiers_pb.Request>;
    requestDeserialize: grpc.deserialize<indexer_nullifiers_pb.Request>;
    responseSerialize: grpc.serialize<indexer_nullifiers_pb.Response>;
    responseDeserialize: grpc.deserialize<indexer_nullifiers_pb.Response>;
}
interface IIndexerServiceService_IListUnrevealedCommits extends grpc.MethodDefinition<indexer_unrevealed_commits_pb.Request, indexer_unrevealed_commits_pb.Response> {
    path: "/Anoma.Protobuf.IndexerService/ListUnrevealedCommits";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<indexer_unrevealed_commits_pb.Request>;
    requestDeserialize: grpc.deserialize<indexer_unrevealed_commits_pb.Request>;
    responseSerialize: grpc.serialize<indexer_unrevealed_commits_pb.Response>;
    responseDeserialize: grpc.deserialize<indexer_unrevealed_commits_pb.Response>;
}
interface IIndexerServiceService_IListUnspentResources extends grpc.MethodDefinition<indexer_unspent_resources_pb.Request, indexer_unspent_resources_pb.Response> {
    path: "/Anoma.Protobuf.IndexerService/ListUnspentResources";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<indexer_unspent_resources_pb.Request>;
    requestDeserialize: grpc.deserialize<indexer_unspent_resources_pb.Request>;
    responseSerialize: grpc.serialize<indexer_unspent_resources_pb.Response>;
    responseDeserialize: grpc.deserialize<indexer_unspent_resources_pb.Response>;
}

export const IndexerServiceService: IIndexerServiceService;

export interface IIndexerServiceServer extends grpc.UntypedServiceImplementation {
    listNullifiers: grpc.handleUnaryCall<indexer_nullifiers_pb.Request, indexer_nullifiers_pb.Response>;
    listUnrevealedCommits: grpc.handleUnaryCall<indexer_unrevealed_commits_pb.Request, indexer_unrevealed_commits_pb.Response>;
    listUnspentResources: grpc.handleUnaryCall<indexer_unspent_resources_pb.Request, indexer_unspent_resources_pb.Response>;
}

export interface IIndexerServiceClient {
    listNullifiers(request: indexer_nullifiers_pb.Request, callback: (error: grpc.ServiceError | null, response: indexer_nullifiers_pb.Response) => void): grpc.ClientUnaryCall;
    listNullifiers(request: indexer_nullifiers_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: indexer_nullifiers_pb.Response) => void): grpc.ClientUnaryCall;
    listNullifiers(request: indexer_nullifiers_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: indexer_nullifiers_pb.Response) => void): grpc.ClientUnaryCall;
    listUnrevealedCommits(request: indexer_unrevealed_commits_pb.Request, callback: (error: grpc.ServiceError | null, response: indexer_unrevealed_commits_pb.Response) => void): grpc.ClientUnaryCall;
    listUnrevealedCommits(request: indexer_unrevealed_commits_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: indexer_unrevealed_commits_pb.Response) => void): grpc.ClientUnaryCall;
    listUnrevealedCommits(request: indexer_unrevealed_commits_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: indexer_unrevealed_commits_pb.Response) => void): grpc.ClientUnaryCall;
    listUnspentResources(request: indexer_unspent_resources_pb.Request, callback: (error: grpc.ServiceError | null, response: indexer_unspent_resources_pb.Response) => void): grpc.ClientUnaryCall;
    listUnspentResources(request: indexer_unspent_resources_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: indexer_unspent_resources_pb.Response) => void): grpc.ClientUnaryCall;
    listUnspentResources(request: indexer_unspent_resources_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: indexer_unspent_resources_pb.Response) => void): grpc.ClientUnaryCall;
}

export class IndexerServiceClient extends grpc.Client implements IIndexerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listNullifiers(request: indexer_nullifiers_pb.Request, callback: (error: grpc.ServiceError | null, response: indexer_nullifiers_pb.Response) => void): grpc.ClientUnaryCall;
    public listNullifiers(request: indexer_nullifiers_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: indexer_nullifiers_pb.Response) => void): grpc.ClientUnaryCall;
    public listNullifiers(request: indexer_nullifiers_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: indexer_nullifiers_pb.Response) => void): grpc.ClientUnaryCall;
    public listUnrevealedCommits(request: indexer_unrevealed_commits_pb.Request, callback: (error: grpc.ServiceError | null, response: indexer_unrevealed_commits_pb.Response) => void): grpc.ClientUnaryCall;
    public listUnrevealedCommits(request: indexer_unrevealed_commits_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: indexer_unrevealed_commits_pb.Response) => void): grpc.ClientUnaryCall;
    public listUnrevealedCommits(request: indexer_unrevealed_commits_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: indexer_unrevealed_commits_pb.Response) => void): grpc.ClientUnaryCall;
    public listUnspentResources(request: indexer_unspent_resources_pb.Request, callback: (error: grpc.ServiceError | null, response: indexer_unspent_resources_pb.Response) => void): grpc.ClientUnaryCall;
    public listUnspentResources(request: indexer_unspent_resources_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: indexer_unspent_resources_pb.Response) => void): grpc.ClientUnaryCall;
    public listUnspentResources(request: indexer_unspent_resources_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: indexer_unspent_resources_pb.Response) => void): grpc.ClientUnaryCall;
}

interface IMempoolServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    add: IMempoolServiceService_IAdd;
    dump: IMempoolServiceService_IDump;
}

interface IMempoolServiceService_IAdd extends grpc.MethodDefinition<mempool_add_transaction_pb.Request, mempool_add_transaction_pb.Response> {
    path: "/Anoma.Protobuf.MempoolService/Add";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mempool_add_transaction_pb.Request>;
    requestDeserialize: grpc.deserialize<mempool_add_transaction_pb.Request>;
    responseSerialize: grpc.serialize<mempool_add_transaction_pb.Response>;
    responseDeserialize: grpc.deserialize<mempool_add_transaction_pb.Response>;
}
interface IMempoolServiceService_IDump extends grpc.MethodDefinition<mempool_dump_pb.Request, mempool_dump_pb.Response> {
    path: "/Anoma.Protobuf.MempoolService/Dump";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<mempool_dump_pb.Request>;
    requestDeserialize: grpc.deserialize<mempool_dump_pb.Request>;
    responseSerialize: grpc.serialize<mempool_dump_pb.Response>;
    responseDeserialize: grpc.deserialize<mempool_dump_pb.Response>;
}

export const MempoolServiceService: IMempoolServiceService;

export interface IMempoolServiceServer extends grpc.UntypedServiceImplementation {
    add: grpc.handleUnaryCall<mempool_add_transaction_pb.Request, mempool_add_transaction_pb.Response>;
    dump: grpc.handleUnaryCall<mempool_dump_pb.Request, mempool_dump_pb.Response>;
}

export interface IMempoolServiceClient {
    add(request: mempool_add_transaction_pb.Request, callback: (error: grpc.ServiceError | null, response: mempool_add_transaction_pb.Response) => void): grpc.ClientUnaryCall;
    add(request: mempool_add_transaction_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mempool_add_transaction_pb.Response) => void): grpc.ClientUnaryCall;
    add(request: mempool_add_transaction_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mempool_add_transaction_pb.Response) => void): grpc.ClientUnaryCall;
    dump(request: mempool_dump_pb.Request, callback: (error: grpc.ServiceError | null, response: mempool_dump_pb.Response) => void): grpc.ClientUnaryCall;
    dump(request: mempool_dump_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mempool_dump_pb.Response) => void): grpc.ClientUnaryCall;
    dump(request: mempool_dump_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mempool_dump_pb.Response) => void): grpc.ClientUnaryCall;
}

export class MempoolServiceClient extends grpc.Client implements IMempoolServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public add(request: mempool_add_transaction_pb.Request, callback: (error: grpc.ServiceError | null, response: mempool_add_transaction_pb.Response) => void): grpc.ClientUnaryCall;
    public add(request: mempool_add_transaction_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mempool_add_transaction_pb.Response) => void): grpc.ClientUnaryCall;
    public add(request: mempool_add_transaction_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mempool_add_transaction_pb.Response) => void): grpc.ClientUnaryCall;
    public dump(request: mempool_dump_pb.Request, callback: (error: grpc.ServiceError | null, response: mempool_dump_pb.Response) => void): grpc.ClientUnaryCall;
    public dump(request: mempool_dump_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: mempool_dump_pb.Response) => void): grpc.ClientUnaryCall;
    public dump(request: mempool_dump_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: mempool_dump_pb.Response) => void): grpc.ClientUnaryCall;
}

interface IBlockServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IBlockServiceService_IGet;
    latest: IBlockServiceService_ILatest;
    root: IBlockServiceService_IRoot;
    filter: IBlockServiceService_IFilter;
}

interface IBlockServiceService_IGet extends grpc.MethodDefinition<indexer_blocks_get_pb.Request, indexer_blocks_get_pb.Response> {
    path: "/Anoma.Protobuf.BlockService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<indexer_blocks_get_pb.Request>;
    requestDeserialize: grpc.deserialize<indexer_blocks_get_pb.Request>;
    responseSerialize: grpc.serialize<indexer_blocks_get_pb.Response>;
    responseDeserialize: grpc.deserialize<indexer_blocks_get_pb.Response>;
}
interface IBlockServiceService_ILatest extends grpc.MethodDefinition<indexer_blocks_latest_pb.Request, indexer_blocks_latest_pb.Response> {
    path: "/Anoma.Protobuf.BlockService/Latest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<indexer_blocks_latest_pb.Request>;
    requestDeserialize: grpc.deserialize<indexer_blocks_latest_pb.Request>;
    responseSerialize: grpc.serialize<indexer_blocks_latest_pb.Response>;
    responseDeserialize: grpc.deserialize<indexer_blocks_latest_pb.Response>;
}
interface IBlockServiceService_IRoot extends grpc.MethodDefinition<indexer_blocks_root_pb.Request, indexer_blocks_root_pb.Response> {
    path: "/Anoma.Protobuf.BlockService/Root";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<indexer_blocks_root_pb.Request>;
    requestDeserialize: grpc.deserialize<indexer_blocks_root_pb.Request>;
    responseSerialize: grpc.serialize<indexer_blocks_root_pb.Response>;
    responseDeserialize: grpc.deserialize<indexer_blocks_root_pb.Response>;
}
interface IBlockServiceService_IFilter extends grpc.MethodDefinition<indexer_blocks_filter_pb.Request, indexer_blocks_filter_pb.Response> {
    path: "/Anoma.Protobuf.BlockService/Filter";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<indexer_blocks_filter_pb.Request>;
    requestDeserialize: grpc.deserialize<indexer_blocks_filter_pb.Request>;
    responseSerialize: grpc.serialize<indexer_blocks_filter_pb.Response>;
    responseDeserialize: grpc.deserialize<indexer_blocks_filter_pb.Response>;
}

export const BlockServiceService: IBlockServiceService;

export interface IBlockServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<indexer_blocks_get_pb.Request, indexer_blocks_get_pb.Response>;
    latest: grpc.handleUnaryCall<indexer_blocks_latest_pb.Request, indexer_blocks_latest_pb.Response>;
    root: grpc.handleUnaryCall<indexer_blocks_root_pb.Request, indexer_blocks_root_pb.Response>;
    filter: grpc.handleUnaryCall<indexer_blocks_filter_pb.Request, indexer_blocks_filter_pb.Response>;
}

export interface IBlockServiceClient {
    get(request: indexer_blocks_get_pb.Request, callback: (error: grpc.ServiceError | null, response: indexer_blocks_get_pb.Response) => void): grpc.ClientUnaryCall;
    get(request: indexer_blocks_get_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: indexer_blocks_get_pb.Response) => void): grpc.ClientUnaryCall;
    get(request: indexer_blocks_get_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: indexer_blocks_get_pb.Response) => void): grpc.ClientUnaryCall;
    latest(request: indexer_blocks_latest_pb.Request, callback: (error: grpc.ServiceError | null, response: indexer_blocks_latest_pb.Response) => void): grpc.ClientUnaryCall;
    latest(request: indexer_blocks_latest_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: indexer_blocks_latest_pb.Response) => void): grpc.ClientUnaryCall;
    latest(request: indexer_blocks_latest_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: indexer_blocks_latest_pb.Response) => void): grpc.ClientUnaryCall;
    root(request: indexer_blocks_root_pb.Request, callback: (error: grpc.ServiceError | null, response: indexer_blocks_root_pb.Response) => void): grpc.ClientUnaryCall;
    root(request: indexer_blocks_root_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: indexer_blocks_root_pb.Response) => void): grpc.ClientUnaryCall;
    root(request: indexer_blocks_root_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: indexer_blocks_root_pb.Response) => void): grpc.ClientUnaryCall;
    filter(request: indexer_blocks_filter_pb.Request, callback: (error: grpc.ServiceError | null, response: indexer_blocks_filter_pb.Response) => void): grpc.ClientUnaryCall;
    filter(request: indexer_blocks_filter_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: indexer_blocks_filter_pb.Response) => void): grpc.ClientUnaryCall;
    filter(request: indexer_blocks_filter_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: indexer_blocks_filter_pb.Response) => void): grpc.ClientUnaryCall;
}

export class BlockServiceClient extends grpc.Client implements IBlockServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: indexer_blocks_get_pb.Request, callback: (error: grpc.ServiceError | null, response: indexer_blocks_get_pb.Response) => void): grpc.ClientUnaryCall;
    public get(request: indexer_blocks_get_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: indexer_blocks_get_pb.Response) => void): grpc.ClientUnaryCall;
    public get(request: indexer_blocks_get_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: indexer_blocks_get_pb.Response) => void): grpc.ClientUnaryCall;
    public latest(request: indexer_blocks_latest_pb.Request, callback: (error: grpc.ServiceError | null, response: indexer_blocks_latest_pb.Response) => void): grpc.ClientUnaryCall;
    public latest(request: indexer_blocks_latest_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: indexer_blocks_latest_pb.Response) => void): grpc.ClientUnaryCall;
    public latest(request: indexer_blocks_latest_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: indexer_blocks_latest_pb.Response) => void): grpc.ClientUnaryCall;
    public root(request: indexer_blocks_root_pb.Request, callback: (error: grpc.ServiceError | null, response: indexer_blocks_root_pb.Response) => void): grpc.ClientUnaryCall;
    public root(request: indexer_blocks_root_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: indexer_blocks_root_pb.Response) => void): grpc.ClientUnaryCall;
    public root(request: indexer_blocks_root_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: indexer_blocks_root_pb.Response) => void): grpc.ClientUnaryCall;
    public filter(request: indexer_blocks_filter_pb.Request, callback: (error: grpc.ServiceError | null, response: indexer_blocks_filter_pb.Response) => void): grpc.ClientUnaryCall;
    public filter(request: indexer_blocks_filter_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: indexer_blocks_filter_pb.Response) => void): grpc.ClientUnaryCall;
    public filter(request: indexer_blocks_filter_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: indexer_blocks_filter_pb.Response) => void): grpc.ClientUnaryCall;
}
