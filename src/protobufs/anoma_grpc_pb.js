// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var nock_prove_pb = require('./nock/prove_pb.js');
var nock_run_pb = require('./nock/run_pb.js');
var intents_list_intents_pb = require('./intents/list_intents_pb.js');
var intents_add_intent_pb = require('./intents/add_intent_pb.js');
var intents_compose_pb = require('./intents/compose_pb.js');
var intents_verify_pb = require('./intents/verify_pb.js');
var indexer_nullifiers_pb = require('./indexer/nullifiers_pb.js');
var indexer_unrevealed_commits_pb = require('./indexer/unrevealed_commits_pb.js');
var indexer_unspent_resources_pb = require('./indexer/unspent_resources_pb.js');
var mempool_add_transaction_pb = require('./mempool/add_transaction_pb.js');
var mempool_dump_pb = require('./mempool/dump_pb.js');
var indexer_blocks_get_pb = require('./indexer/blocks/get_pb.js');
var indexer_blocks_latest_pb = require('./indexer/blocks/latest_pb.js');
var indexer_blocks_root_pb = require('./indexer/blocks/root_pb.js');
var indexer_blocks_filter_pb = require('./indexer/blocks/filter_pb.js');

function serialize_Anoma_Protobuf_Indexer_Blocks_Filtered_Request(arg) {
  if (!(arg instanceof indexer_blocks_filter_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.Blocks.Filtered.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_Blocks_Filtered_Request(buffer_arg) {
  return indexer_blocks_filter_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_Blocks_Filtered_Response(arg) {
  if (!(arg instanceof indexer_blocks_filter_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.Blocks.Filtered.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_Blocks_Filtered_Response(buffer_arg) {
  return indexer_blocks_filter_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_Blocks_Get_Request(arg) {
  if (!(arg instanceof indexer_blocks_get_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.Blocks.Get.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_Blocks_Get_Request(buffer_arg) {
  return indexer_blocks_get_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_Blocks_Get_Response(arg) {
  if (!(arg instanceof indexer_blocks_get_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.Blocks.Get.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_Blocks_Get_Response(buffer_arg) {
  return indexer_blocks_get_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_Blocks_Latest_Request(arg) {
  if (!(arg instanceof indexer_blocks_latest_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.Blocks.Latest.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_Blocks_Latest_Request(buffer_arg) {
  return indexer_blocks_latest_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_Blocks_Latest_Response(arg) {
  if (!(arg instanceof indexer_blocks_latest_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.Blocks.Latest.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_Blocks_Latest_Response(buffer_arg) {
  return indexer_blocks_latest_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_Blocks_Root_Request(arg) {
  if (!(arg instanceof indexer_blocks_root_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.Blocks.Root.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_Blocks_Root_Request(buffer_arg) {
  return indexer_blocks_root_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_Blocks_Root_Response(arg) {
  if (!(arg instanceof indexer_blocks_root_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.Blocks.Root.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_Blocks_Root_Response(buffer_arg) {
  return indexer_blocks_root_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_Nullifiers_Request(arg) {
  if (!(arg instanceof indexer_nullifiers_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.Nullifiers.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_Nullifiers_Request(buffer_arg) {
  return indexer_nullifiers_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_Nullifiers_Response(arg) {
  if (!(arg instanceof indexer_nullifiers_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.Nullifiers.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_Nullifiers_Response(buffer_arg) {
  return indexer_nullifiers_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Request(arg) {
  if (!(arg instanceof indexer_unrevealed_commits_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.UnrevealedCommits.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Request(buffer_arg) {
  return indexer_unrevealed_commits_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Response(arg) {
  if (!(arg instanceof indexer_unrevealed_commits_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.UnrevealedCommits.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Response(buffer_arg) {
  return indexer_unrevealed_commits_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_UnspentResources_Request(arg) {
  if (!(arg instanceof indexer_unspent_resources_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.UnspentResources.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_UnspentResources_Request(buffer_arg) {
  return indexer_unspent_resources_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Indexer_UnspentResources_Response(arg) {
  if (!(arg instanceof indexer_unspent_resources_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Indexer.UnspentResources.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Indexer_UnspentResources_Response(buffer_arg) {
  return indexer_unspent_resources_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Intents_Add_Request(arg) {
  if (!(arg instanceof intents_add_intent_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Intents.Add.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Intents_Add_Request(buffer_arg) {
  return intents_add_intent_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Intents_Add_Response(arg) {
  if (!(arg instanceof intents_add_intent_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Intents.Add.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Intents_Add_Response(buffer_arg) {
  return intents_add_intent_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Intents_Compose_Request(arg) {
  if (!(arg instanceof intents_compose_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Intents.Compose.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Intents_Compose_Request(buffer_arg) {
  return intents_compose_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Intents_Compose_Response(arg) {
  if (!(arg instanceof intents_compose_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Intents.Compose.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Intents_Compose_Response(buffer_arg) {
  return intents_compose_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Intents_List_Request(arg) {
  if (!(arg instanceof intents_list_intents_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Intents.List.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Intents_List_Request(buffer_arg) {
  return intents_list_intents_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Intents_List_Response(arg) {
  if (!(arg instanceof intents_list_intents_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Intents.List.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Intents_List_Response(buffer_arg) {
  return intents_list_intents_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Intents_Verify_Request(arg) {
  if (!(arg instanceof intents_verify_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Intents.Verify.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Intents_Verify_Request(buffer_arg) {
  return intents_verify_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Intents_Verify_Response(arg) {
  if (!(arg instanceof intents_verify_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Intents.Verify.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Intents_Verify_Response(buffer_arg) {
  return intents_verify_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Mempool_AddTransaction_Request(arg) {
  if (!(arg instanceof mempool_add_transaction_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Mempool.AddTransaction.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Mempool_AddTransaction_Request(buffer_arg) {
  return mempool_add_transaction_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Mempool_AddTransaction_Response(arg) {
  if (!(arg instanceof mempool_add_transaction_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Mempool.AddTransaction.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Mempool_AddTransaction_Response(buffer_arg) {
  return mempool_add_transaction_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Mempool_Dump_Request(arg) {
  if (!(arg instanceof mempool_dump_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Mempool.Dump.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Mempool_Dump_Request(buffer_arg) {
  return mempool_dump_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Mempool_Dump_Response(arg) {
  if (!(arg instanceof mempool_dump_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Mempool.Dump.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Mempool_Dump_Response(buffer_arg) {
  return mempool_dump_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Nock_Prove_Request(arg) {
  if (!(arg instanceof nock_prove_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Nock.Prove.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Nock_Prove_Request(buffer_arg) {
  return nock_prove_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Nock_Prove_Response(arg) {
  if (!(arg instanceof nock_prove_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Nock.Prove.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Nock_Prove_Response(buffer_arg) {
  return nock_prove_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Nock_Run_Request(arg) {
  if (!(arg instanceof nock_run_pb.Request)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Nock.Run.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Nock_Run_Request(buffer_arg) {
  return nock_run_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Anoma_Protobuf_Nock_Run_Response(arg) {
  if (!(arg instanceof nock_run_pb.Response)) {
    throw new Error('Expected argument of type Anoma.Protobuf.Nock.Run.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Anoma_Protobuf_Nock_Run_Response(buffer_arg) {
  return nock_run_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var NockServiceService = exports.NockServiceService = {
  prove: {
    path: '/Anoma.Protobuf.NockService/Prove',
    requestStream: false,
    responseStream: false,
    requestType: nock_prove_pb.Request,
    responseType: nock_prove_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Nock_Prove_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Nock_Prove_Request,
    responseSerialize: serialize_Anoma_Protobuf_Nock_Prove_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Nock_Prove_Response,
  },
  run: {
    path: '/Anoma.Protobuf.NockService/Run',
    requestStream: false,
    responseStream: false,
    requestType: nock_run_pb.Request,
    responseType: nock_run_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Nock_Run_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Nock_Run_Request,
    responseSerialize: serialize_Anoma_Protobuf_Nock_Run_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Nock_Run_Response,
  },
};

exports.NockServiceClient = grpc.makeGenericClientConstructor(NockServiceService);
var IntentsServiceService = exports.IntentsServiceService = {
  listIntents: {
    path: '/Anoma.Protobuf.IntentsService/ListIntents',
    requestStream: false,
    responseStream: false,
    requestType: intents_list_intents_pb.Request,
    responseType: intents_list_intents_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Intents_List_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Intents_List_Request,
    responseSerialize: serialize_Anoma_Protobuf_Intents_List_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Intents_List_Response,
  },
  addIntent: {
    path: '/Anoma.Protobuf.IntentsService/AddIntent',
    requestStream: false,
    responseStream: false,
    requestType: intents_add_intent_pb.Request,
    responseType: intents_add_intent_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Intents_Add_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Intents_Add_Request,
    responseSerialize: serialize_Anoma_Protobuf_Intents_Add_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Intents_Add_Response,
  },
  compose: {
    path: '/Anoma.Protobuf.IntentsService/Compose',
    requestStream: false,
    responseStream: false,
    requestType: intents_compose_pb.Request,
    responseType: intents_compose_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Intents_Compose_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Intents_Compose_Request,
    responseSerialize: serialize_Anoma_Protobuf_Intents_Compose_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Intents_Compose_Response,
  },
  verify: {
    path: '/Anoma.Protobuf.IntentsService/Verify',
    requestStream: false,
    responseStream: false,
    requestType: intents_verify_pb.Request,
    responseType: intents_verify_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Intents_Verify_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Intents_Verify_Request,
    responseSerialize: serialize_Anoma_Protobuf_Intents_Verify_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Intents_Verify_Response,
  },
};

exports.IntentsServiceClient = grpc.makeGenericClientConstructor(IntentsServiceService);
var IndexerServiceService = exports.IndexerServiceService = {
  listNullifiers: {
    path: '/Anoma.Protobuf.IndexerService/ListNullifiers',
    requestStream: false,
    responseStream: false,
    requestType: indexer_nullifiers_pb.Request,
    responseType: indexer_nullifiers_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Indexer_Nullifiers_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Indexer_Nullifiers_Request,
    responseSerialize: serialize_Anoma_Protobuf_Indexer_Nullifiers_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Indexer_Nullifiers_Response,
  },
  listUnrevealedCommits: {
    path: '/Anoma.Protobuf.IndexerService/ListUnrevealedCommits',
    requestStream: false,
    responseStream: false,
    requestType: indexer_unrevealed_commits_pb.Request,
    responseType: indexer_unrevealed_commits_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Request,
    responseSerialize: serialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Indexer_UnrevealedCommits_Response,
  },
  listUnspentResources: {
    path: '/Anoma.Protobuf.IndexerService/ListUnspentResources',
    requestStream: false,
    responseStream: false,
    requestType: indexer_unspent_resources_pb.Request,
    responseType: indexer_unspent_resources_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Indexer_UnspentResources_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Indexer_UnspentResources_Request,
    responseSerialize: serialize_Anoma_Protobuf_Indexer_UnspentResources_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Indexer_UnspentResources_Response,
  },
};

exports.IndexerServiceClient = grpc.makeGenericClientConstructor(IndexerServiceService);
var MempoolServiceService = exports.MempoolServiceService = {
  add: {
    path: '/Anoma.Protobuf.MempoolService/Add',
    requestStream: false,
    responseStream: false,
    requestType: mempool_add_transaction_pb.Request,
    responseType: mempool_add_transaction_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Mempool_AddTransaction_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Mempool_AddTransaction_Request,
    responseSerialize: serialize_Anoma_Protobuf_Mempool_AddTransaction_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Mempool_AddTransaction_Response,
  },
  dump: {
    path: '/Anoma.Protobuf.MempoolService/Dump',
    requestStream: false,
    responseStream: false,
    requestType: mempool_dump_pb.Request,
    responseType: mempool_dump_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Mempool_Dump_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Mempool_Dump_Request,
    responseSerialize: serialize_Anoma_Protobuf_Mempool_Dump_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Mempool_Dump_Response,
  },
};

exports.MempoolServiceClient = grpc.makeGenericClientConstructor(MempoolServiceService);
var BlockServiceService = exports.BlockServiceService = {
  get: {
    path: '/Anoma.Protobuf.BlockService/Get',
    requestStream: false,
    responseStream: false,
    requestType: indexer_blocks_get_pb.Request,
    responseType: indexer_blocks_get_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Indexer_Blocks_Get_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Indexer_Blocks_Get_Request,
    responseSerialize: serialize_Anoma_Protobuf_Indexer_Blocks_Get_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Indexer_Blocks_Get_Response,
  },
  latest: {
    path: '/Anoma.Protobuf.BlockService/Latest',
    requestStream: false,
    responseStream: false,
    requestType: indexer_blocks_latest_pb.Request,
    responseType: indexer_blocks_latest_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Indexer_Blocks_Latest_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Indexer_Blocks_Latest_Request,
    responseSerialize: serialize_Anoma_Protobuf_Indexer_Blocks_Latest_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Indexer_Blocks_Latest_Response,
  },
  root: {
    path: '/Anoma.Protobuf.BlockService/Root',
    requestStream: false,
    responseStream: false,
    requestType: indexer_blocks_root_pb.Request,
    responseType: indexer_blocks_root_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Indexer_Blocks_Root_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Indexer_Blocks_Root_Request,
    responseSerialize: serialize_Anoma_Protobuf_Indexer_Blocks_Root_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Indexer_Blocks_Root_Response,
  },
  filter: {
    path: '/Anoma.Protobuf.BlockService/Filter',
    requestStream: false,
    responseStream: false,
    requestType: indexer_blocks_filter_pb.Request,
    responseType: indexer_blocks_filter_pb.Response,
    requestSerialize: serialize_Anoma_Protobuf_Indexer_Blocks_Filtered_Request,
    requestDeserialize: deserialize_Anoma_Protobuf_Indexer_Blocks_Filtered_Request,
    responseSerialize: serialize_Anoma_Protobuf_Indexer_Blocks_Filtered_Response,
    responseDeserialize: deserialize_Anoma_Protobuf_Indexer_Blocks_Filtered_Response,
  },
};

exports.BlockServiceClient = grpc.makeGenericClientConstructor(BlockServiceService);
