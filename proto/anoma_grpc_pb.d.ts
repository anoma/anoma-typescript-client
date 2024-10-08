// package: Anoma.Protobuf
// file: proto/anoma.proto

import * as grpc from '@grpc/grpc-js';
import * as proto_anoma_pb from '../proto/anoma_pb';

interface IIntentsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listIntents: IIntentsService_IListIntents;
  addIntent: IIntentsService_IAddIntent;
  listNullifiers: IIntentsService_IListNullifiers;
  listUnrevealedCommits: IIntentsService_IListUnrevealedCommits;
  listUnspentResources: IIntentsService_IListUnspentResources;
  prove: IIntentsService_IProve;
}

interface IIntentsService_IListIntents extends grpc.MethodDefinition<proto_anoma_pb.IntentPool.ListIntents.Request, proto_anoma_pb.IntentPool.ListIntents.Response> {
  path: '/Anoma.Protobuf.Intents/ListIntents'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<proto_anoma_pb.IntentPool.ListIntents.Request>;
  requestDeserialize: grpc.deserialize<proto_anoma_pb.IntentPool.ListIntents.Request>;
  responseSerialize: grpc.serialize<proto_anoma_pb.IntentPool.ListIntents.Response>;
  responseDeserialize: grpc.deserialize<proto_anoma_pb.IntentPool.ListIntents.Response>;
}

interface IIntentsService_IAddIntent extends grpc.MethodDefinition<proto_anoma_pb.IntentPool.AddIntent.Request, proto_anoma_pb.IntentPool.AddIntent.Response> {
  path: '/Anoma.Protobuf.Intents/AddIntent'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<proto_anoma_pb.IntentPool.AddIntent.Request>;
  requestDeserialize: grpc.deserialize<proto_anoma_pb.IntentPool.AddIntent.Request>;
  responseSerialize: grpc.serialize<proto_anoma_pb.IntentPool.AddIntent.Response>;
  responseDeserialize: grpc.deserialize<proto_anoma_pb.IntentPool.AddIntent.Response>;
}

interface IIntentsService_IListNullifiers extends grpc.MethodDefinition<proto_anoma_pb.Indexer.Nullifiers.Request, proto_anoma_pb.Indexer.Nullifiers.Response> {
  path: '/Anoma.Protobuf.Intents/ListNullifiers'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<proto_anoma_pb.Indexer.Nullifiers.Request>;
  requestDeserialize: grpc.deserialize<proto_anoma_pb.Indexer.Nullifiers.Request>;
  responseSerialize: grpc.serialize<proto_anoma_pb.Indexer.Nullifiers.Response>;
  responseDeserialize: grpc.deserialize<proto_anoma_pb.Indexer.Nullifiers.Response>;
}

interface IIntentsService_IListUnrevealedCommits extends grpc.MethodDefinition<proto_anoma_pb.Indexer.UnrevealedCommits.Request, proto_anoma_pb.Indexer.UnrevealedCommits.Response> {
  path: '/Anoma.Protobuf.Intents/ListUnrevealedCommits'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<proto_anoma_pb.Indexer.UnrevealedCommits.Request>;
  requestDeserialize: grpc.deserialize<proto_anoma_pb.Indexer.UnrevealedCommits.Request>;
  responseSerialize: grpc.serialize<proto_anoma_pb.Indexer.UnrevealedCommits.Response>;
  responseDeserialize: grpc.deserialize<proto_anoma_pb.Indexer.UnrevealedCommits.Response>;
}

interface IIntentsService_IListUnspentResources extends grpc.MethodDefinition<proto_anoma_pb.Indexer.UnspentResources.Request, proto_anoma_pb.Indexer.UnspentResources.Response> {
  path: '/Anoma.Protobuf.Intents/ListUnspentResources'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<proto_anoma_pb.Indexer.UnspentResources.Request>;
  requestDeserialize: grpc.deserialize<proto_anoma_pb.Indexer.UnspentResources.Request>;
  responseSerialize: grpc.serialize<proto_anoma_pb.Indexer.UnspentResources.Response>;
  responseDeserialize: grpc.deserialize<proto_anoma_pb.Indexer.UnspentResources.Response>;
}

interface IIntentsService_IProve extends grpc.MethodDefinition<proto_anoma_pb.Prove.Request, proto_anoma_pb.Prove.Response> {
  path: '/Anoma.Protobuf.Intents/Prove'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<proto_anoma_pb.Prove.Request>;
  requestDeserialize: grpc.deserialize<proto_anoma_pb.Prove.Request>;
  responseSerialize: grpc.serialize<proto_anoma_pb.Prove.Response>;
  responseDeserialize: grpc.deserialize<proto_anoma_pb.Prove.Response>;
}

export const IntentsService: IIntentsService;
export interface IIntentsServer extends grpc.UntypedServiceImplementation {
  listIntents: grpc.handleUnaryCall<proto_anoma_pb.IntentPool.ListIntents.Request, proto_anoma_pb.IntentPool.ListIntents.Response>;
  addIntent: grpc.handleUnaryCall<proto_anoma_pb.IntentPool.AddIntent.Request, proto_anoma_pb.IntentPool.AddIntent.Response>;
  listNullifiers: grpc.handleUnaryCall<proto_anoma_pb.Indexer.Nullifiers.Request, proto_anoma_pb.Indexer.Nullifiers.Response>;
  listUnrevealedCommits: grpc.handleUnaryCall<proto_anoma_pb.Indexer.UnrevealedCommits.Request, proto_anoma_pb.Indexer.UnrevealedCommits.Response>;
  listUnspentResources: grpc.handleUnaryCall<proto_anoma_pb.Indexer.UnspentResources.Request, proto_anoma_pb.Indexer.UnspentResources.Response>;
  prove: grpc.handleUnaryCall<proto_anoma_pb.Prove.Request, proto_anoma_pb.Prove.Response>;
}

export interface IIntentsClient {
  listIntents(request: proto_anoma_pb.IntentPool.ListIntents.Request, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.IntentPool.ListIntents.Response) => void): grpc.ClientUnaryCall;
  listIntents(request: proto_anoma_pb.IntentPool.ListIntents.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.IntentPool.ListIntents.Response) => void): grpc.ClientUnaryCall;
  listIntents(request: proto_anoma_pb.IntentPool.ListIntents.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.IntentPool.ListIntents.Response) => void): grpc.ClientUnaryCall;
  addIntent(request: proto_anoma_pb.IntentPool.AddIntent.Request, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.IntentPool.AddIntent.Response) => void): grpc.ClientUnaryCall;
  addIntent(request: proto_anoma_pb.IntentPool.AddIntent.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.IntentPool.AddIntent.Response) => void): grpc.ClientUnaryCall;
  addIntent(request: proto_anoma_pb.IntentPool.AddIntent.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.IntentPool.AddIntent.Response) => void): grpc.ClientUnaryCall;
  listNullifiers(request: proto_anoma_pb.Indexer.Nullifiers.Request, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.Nullifiers.Response) => void): grpc.ClientUnaryCall;
  listNullifiers(request: proto_anoma_pb.Indexer.Nullifiers.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.Nullifiers.Response) => void): grpc.ClientUnaryCall;
  listNullifiers(request: proto_anoma_pb.Indexer.Nullifiers.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.Nullifiers.Response) => void): grpc.ClientUnaryCall;
  listUnrevealedCommits(request: proto_anoma_pb.Indexer.UnrevealedCommits.Request, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.UnrevealedCommits.Response) => void): grpc.ClientUnaryCall;
  listUnrevealedCommits(request: proto_anoma_pb.Indexer.UnrevealedCommits.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.UnrevealedCommits.Response) => void): grpc.ClientUnaryCall;
  listUnrevealedCommits(request: proto_anoma_pb.Indexer.UnrevealedCommits.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.UnrevealedCommits.Response) => void): grpc.ClientUnaryCall;
  listUnspentResources(request: proto_anoma_pb.Indexer.UnspentResources.Request, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.UnspentResources.Response) => void): grpc.ClientUnaryCall;
  listUnspentResources(request: proto_anoma_pb.Indexer.UnspentResources.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.UnspentResources.Response) => void): grpc.ClientUnaryCall;
  listUnspentResources(request: proto_anoma_pb.Indexer.UnspentResources.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.UnspentResources.Response) => void): grpc.ClientUnaryCall;
  prove(request: proto_anoma_pb.Prove.Request, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Prove.Response) => void): grpc.ClientUnaryCall;
  prove(request: proto_anoma_pb.Prove.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Prove.Response) => void): grpc.ClientUnaryCall;
  prove(request: proto_anoma_pb.Prove.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Prove.Response) => void): grpc.ClientUnaryCall;
}

export class IntentsClient extends grpc.Client implements IIntentsClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public listIntents(request: proto_anoma_pb.IntentPool.ListIntents.Request, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.IntentPool.ListIntents.Response) => void): grpc.ClientUnaryCall;
  public listIntents(request: proto_anoma_pb.IntentPool.ListIntents.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.IntentPool.ListIntents.Response) => void): grpc.ClientUnaryCall;
  public listIntents(request: proto_anoma_pb.IntentPool.ListIntents.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.IntentPool.ListIntents.Response) => void): grpc.ClientUnaryCall;
  public addIntent(request: proto_anoma_pb.IntentPool.AddIntent.Request, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.IntentPool.AddIntent.Response) => void): grpc.ClientUnaryCall;
  public addIntent(request: proto_anoma_pb.IntentPool.AddIntent.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.IntentPool.AddIntent.Response) => void): grpc.ClientUnaryCall;
  public addIntent(request: proto_anoma_pb.IntentPool.AddIntent.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.IntentPool.AddIntent.Response) => void): grpc.ClientUnaryCall;
  public listNullifiers(request: proto_anoma_pb.Indexer.Nullifiers.Request, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.Nullifiers.Response) => void): grpc.ClientUnaryCall;
  public listNullifiers(request: proto_anoma_pb.Indexer.Nullifiers.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.Nullifiers.Response) => void): grpc.ClientUnaryCall;
  public listNullifiers(request: proto_anoma_pb.Indexer.Nullifiers.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.Nullifiers.Response) => void): grpc.ClientUnaryCall;
  public listUnrevealedCommits(request: proto_anoma_pb.Indexer.UnrevealedCommits.Request, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.UnrevealedCommits.Response) => void): grpc.ClientUnaryCall;
  public listUnrevealedCommits(request: proto_anoma_pb.Indexer.UnrevealedCommits.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.UnrevealedCommits.Response) => void): grpc.ClientUnaryCall;
  public listUnrevealedCommits(request: proto_anoma_pb.Indexer.UnrevealedCommits.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.UnrevealedCommits.Response) => void): grpc.ClientUnaryCall;
  public listUnspentResources(request: proto_anoma_pb.Indexer.UnspentResources.Request, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.UnspentResources.Response) => void): grpc.ClientUnaryCall;
  public listUnspentResources(request: proto_anoma_pb.Indexer.UnspentResources.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.UnspentResources.Response) => void): grpc.ClientUnaryCall;
  public listUnspentResources(request: proto_anoma_pb.Indexer.UnspentResources.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Indexer.UnspentResources.Response) => void): grpc.ClientUnaryCall;
  public prove(request: proto_anoma_pb.Prove.Request, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Prove.Response) => void): grpc.ClientUnaryCall;
  public prove(request: proto_anoma_pb.Prove.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Prove.Response) => void): grpc.ClientUnaryCall;
  public prove(request: proto_anoma_pb.Prove.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_anoma_pb.Prove.Response) => void): grpc.ClientUnaryCall;
}

