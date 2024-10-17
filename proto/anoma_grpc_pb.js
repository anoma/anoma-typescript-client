// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_anoma_pb = require('../proto/anoma_pb.js');

function serialize_Anoma_Protobuf_Indexer_Nullifiers_Request(arg) {
  if (!(arg instanceof proto_anoma_pb.Indexer.Nullifiers.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.Nullifiers.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_Nullifiers_Request(buffer_arg) {
  return proto_anoma_pb.Indexer.Nullifiers.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_Nullifiers_Response(arg) {
  if (!(arg instanceof proto_anoma_pb.Indexer.Nullifiers.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.Nullifiers.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_Nullifiers_Response(buffer_arg) {
  return proto_anoma_pb.Indexer.Nullifiers.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Request(arg) {
  if (!(arg instanceof proto_anoma_pb.Indexer.UnrevealedCommits.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.UnrevealedCommits.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Request(buffer_arg) {
  return proto_anoma_pb.Indexer.UnrevealedCommits.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Response(arg) {
  if (!(arg instanceof proto_anoma_pb.Indexer.UnrevealedCommits.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.UnrevealedCommits.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Response(buffer_arg) {
  return proto_anoma_pb.Indexer.UnrevealedCommits.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_UnspentResources_Request(arg) {
  if (!(arg instanceof proto_anoma_pb.Indexer.UnspentResources.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.UnspentResources.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_UnspentResources_Request(buffer_arg) {
  return proto_anoma_pb.Indexer.UnspentResources.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_UnspentResources_Response(arg) {
  if (!(arg instanceof proto_anoma_pb.Indexer.UnspentResources.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.UnspentResources.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_UnspentResources_Response(buffer_arg) {
  return proto_anoma_pb.Indexer.UnspentResources.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_IntentPool_AddIntent_Request(arg) {
  if (!(arg instanceof proto_anoma_pb.IntentPool.AddIntent.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.IntentPool.AddIntent.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_IntentPool_AddIntent_Request(buffer_arg) {
  return proto_anoma_pb.IntentPool.AddIntent.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_IntentPool_AddIntent_Response(arg) {
  if (!(arg instanceof proto_anoma_pb.IntentPool.AddIntent.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.IntentPool.AddIntent.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_IntentPool_AddIntent_Response(buffer_arg) {
  return proto_anoma_pb.IntentPool.AddIntent.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_IntentPool_ListIntents_Request(arg) {
  if (!(arg instanceof proto_anoma_pb.IntentPool.ListIntents.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.IntentPool.ListIntents.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_IntentPool_ListIntents_Request(buffer_arg) {
  return proto_anoma_pb.IntentPool.ListIntents.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_IntentPool_ListIntents_Response(arg) {
  if (!(arg instanceof proto_anoma_pb.IntentPool.ListIntents.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.IntentPool.ListIntents.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_IntentPool_ListIntents_Response(buffer_arg) {
  return proto_anoma_pb.IntentPool.ListIntents.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Prove_Request(arg) {
  if (!(arg instanceof proto_anoma_pb.Prove.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Prove.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Prove_Request(buffer_arg) {
  return proto_anoma_pb.Prove.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Prove_Response(arg) {
  if (!(arg instanceof proto_anoma_pb.Prove.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Prove.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Prove_Response(buffer_arg) {
  return proto_anoma_pb.Prove.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


// ----------------- Services -----------------
var IntentsService = exports.IntentsService = {
  listIntents: {
    path: '/Anoma.Protobuf.Intents/ListIntents',
    requestStream: false,
    responseStream: false,
    requestType: proto_anoma_pb.IntentPool.ListIntents.Request,
    responseType: proto_anoma_pb.IntentPool.ListIntents.Response,
    requestSerialize: serialize_Anoma_Protobuf_IntentPool_ListIntents_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_IntentPool_ListIntents_Request,
    responseSerialize: serialize_Anoma_Protobuf_IntentPool_ListIntents_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_IntentPool_ListIntents_Response,
  },
  addIntent: {
    path: '/Anoma.Protobuf.Intents/AddIntent',
    requestStream: false,
    responseStream: false,
    requestType: proto_anoma_pb.IntentPool.AddIntent.Request,
    responseType: proto_anoma_pb.IntentPool.AddIntent.Response,
    requestSerialize: serialize_Anoma_Protobuf_IntentPool_AddIntent_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_IntentPool_AddIntent_Request,
    responseSerialize: serialize_Anoma_Protobuf_IntentPool_AddIntent_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_IntentPool_AddIntent_Response,
  },
  listNullifiers: {
    path: '/Anoma.Protobuf.Intents/ListNullifiers',
    requestStream: false,
    responseStream: false,
    requestType: proto_anoma_pb.Indexer.Nullifiers.Request,
    responseType: proto_anoma_pb.Indexer.Nullifiers.Response,
    requestSerialize: serialize_Anoma_Protobuf_Indexer_Nullifiers_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Indexer_Nullifiers_Request,
    responseSerialize: serialize_Anoma_Protobuf_Indexer_Nullifiers_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Indexer_Nullifiers_Response,
  },
  listUnrevealedCommits: {
    path: '/Anoma.Protobuf.Intents/ListUnrevealedCommits',
    requestStream: false,
    responseStream: false,
    requestType: proto_anoma_pb.Indexer.UnrevealedCommits.Request,
    responseType: proto_anoma_pb.Indexer.UnrevealedCommits.Response,
    requestSerialize: serialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Request,
    responseSerialize: serialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Response,
  },
  listUnspentResources: {
    path: '/Anoma.Protobuf.Intents/ListUnspentResources',
    requestStream: false,
    responseStream: false,
    requestType: proto_anoma_pb.Indexer.UnspentResources.Request,
    responseType: proto_anoma_pb.Indexer.UnspentResources.Response,
    requestSerialize: serialize_Anoma_Protobuf_Indexer_UnspentResources_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Indexer_UnspentResources_Request,
    responseSerialize: serialize_Anoma_Protobuf_Indexer_UnspentResources_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Indexer_UnspentResources_Response,
  },
  prove: {
    path: '/Anoma.Protobuf.Intents/Prove',
    requestStream: false,
    responseStream: false,
    requestType: proto_anoma_pb.Prove.Request,
    responseType: proto_anoma_pb.Prove.Response,
    requestSerialize: serialize_Anoma_Protobuf_Prove_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Prove_Request,
    responseSerialize: serialize_Anoma_Protobuf_Prove_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Prove_Response,
  },
};

exports.IntentsClient = grpc.makeGenericClientConstructor(IntentsService);
