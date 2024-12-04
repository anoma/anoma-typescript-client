// source: envelope.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var node_info_pb = require('./node_info_pb.js');
goog.object.extend(proto, node_info_pb);
var announcement_pb = require('./announcement_pb.js');
goog.object.extend(proto, announcement_pb);
var intents_list_intents_pb = require('./intents/list_intents_pb.js');
goog.object.extend(proto, intents_list_intents_pb);
var intents_add_intent_pb = require('./intents/add_intent_pb.js');
goog.object.extend(proto, intents_add_intent_pb);
var indexer_nullifiers_pb = require('./indexer/nullifiers_pb.js');
goog.object.extend(proto, indexer_nullifiers_pb);
var indexer_unrevealed_commits_pb = require('./indexer/unrevealed_commits_pb.js');
goog.object.extend(proto, indexer_unrevealed_commits_pb);
var indexer_unspent_resources_pb = require('./indexer/unspent_resources_pb.js');
goog.object.extend(proto, indexer_unspent_resources_pb);
var mempool_dump_pb = require('./mempool/dump_pb.js');
goog.object.extend(proto, mempool_dump_pb);
goog.exportSymbol('proto.Anoma.Protobuf.Envelope', null, global);
goog.exportSymbol('proto.Anoma.Protobuf.Envelope.InnerMessageCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Anoma.Protobuf.Envelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Anoma.Protobuf.Envelope.oneofGroups_);
};
goog.inherits(proto.Anoma.Protobuf.Envelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Anoma.Protobuf.Envelope.displayName = 'proto.Anoma.Protobuf.Envelope';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Anoma.Protobuf.Envelope.oneofGroups_ = [[3,4,5,6,7,8,9,10,11,12,13,14,15]];

/**
 * @enum {number}
 */
proto.Anoma.Protobuf.Envelope.InnerMessageCase = {
  INNER_MESSAGE_NOT_SET: 0,
  ANNOUNCEMENT: 3,
  LIST_INTENTS_REQUEST: 4,
  LIST_INTENTS_RESPONSE: 5,
  ADD_INTENT_REQUEST: 6,
  ADD_INTENT_RESPONSE: 7,
  NULLIFIERS_REQUEST: 8,
  NULLIFIERS_RESPONSE: 9,
  UNREVEALED_COMMITS_REQUEST: 10,
  UNREVEALED_COMMITS_RESPONSE: 11,
  UNSPENT_RESOURCES_REQUEST: 12,
  UNSPENT_RESOURCES_RESPONSE: 13,
  MEMPOOL_DUMP_REQUEST: 14,
  MEMPOOL_DUMP_RESPONSE: 15
};

/**
 * @return {proto.Anoma.Protobuf.Envelope.InnerMessageCase}
 */
proto.Anoma.Protobuf.Envelope.prototype.getInnerMessageCase = function() {
  return /** @type {proto.Anoma.Protobuf.Envelope.InnerMessageCase} */(jspb.Message.computeOneofCase(this, proto.Anoma.Protobuf.Envelope.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Anoma.Protobuf.Envelope.prototype.toObject = function(opt_includeInstance) {
  return proto.Anoma.Protobuf.Envelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Anoma.Protobuf.Envelope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Envelope.toObject = function(includeInstance, msg) {
  var f, obj = {
senderInfo: (f = msg.getSenderInfo()) && node_info_pb.NodeInfo.toObject(includeInstance, f),
messageId: msg.getMessageId_asB64(),
announcement: (f = msg.getAnnouncement()) && announcement_pb.Announcement.toObject(includeInstance, f),
listIntentsRequest: (f = msg.getListIntentsRequest()) && intents_list_intents_pb.Request.toObject(includeInstance, f),
listIntentsResponse: (f = msg.getListIntentsResponse()) && intents_list_intents_pb.Response.toObject(includeInstance, f),
addIntentRequest: (f = msg.getAddIntentRequest()) && intents_add_intent_pb.Request.toObject(includeInstance, f),
addIntentResponse: (f = msg.getAddIntentResponse()) && intents_add_intent_pb.Response.toObject(includeInstance, f),
nullifiersRequest: (f = msg.getNullifiersRequest()) && indexer_nullifiers_pb.Request.toObject(includeInstance, f),
nullifiersResponse: (f = msg.getNullifiersResponse()) && indexer_nullifiers_pb.Response.toObject(includeInstance, f),
unrevealedCommitsRequest: (f = msg.getUnrevealedCommitsRequest()) && indexer_unrevealed_commits_pb.Request.toObject(includeInstance, f),
unrevealedCommitsResponse: (f = msg.getUnrevealedCommitsResponse()) && indexer_unrevealed_commits_pb.Response.toObject(includeInstance, f),
unspentResourcesRequest: (f = msg.getUnspentResourcesRequest()) && indexer_unspent_resources_pb.Request.toObject(includeInstance, f),
unspentResourcesResponse: (f = msg.getUnspentResourcesResponse()) && indexer_unspent_resources_pb.Response.toObject(includeInstance, f),
mempoolDumpRequest: (f = msg.getMempoolDumpRequest()) && mempool_dump_pb.Request.toObject(includeInstance, f),
mempoolDumpResponse: (f = msg.getMempoolDumpResponse()) && mempool_dump_pb.Response.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Anoma.Protobuf.Envelope}
 */
proto.Anoma.Protobuf.Envelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Anoma.Protobuf.Envelope;
  return proto.Anoma.Protobuf.Envelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Anoma.Protobuf.Envelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Anoma.Protobuf.Envelope}
 */
proto.Anoma.Protobuf.Envelope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new node_info_pb.NodeInfo;
      reader.readMessage(value,node_info_pb.NodeInfo.deserializeBinaryFromReader);
      msg.setSenderInfo(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMessageId(value);
      break;
    case 3:
      var value = new announcement_pb.Announcement;
      reader.readMessage(value,announcement_pb.Announcement.deserializeBinaryFromReader);
      msg.setAnnouncement(value);
      break;
    case 4:
      var value = new intents_list_intents_pb.Request;
      reader.readMessage(value,intents_list_intents_pb.Request.deserializeBinaryFromReader);
      msg.setListIntentsRequest(value);
      break;
    case 5:
      var value = new intents_list_intents_pb.Response;
      reader.readMessage(value,intents_list_intents_pb.Response.deserializeBinaryFromReader);
      msg.setListIntentsResponse(value);
      break;
    case 6:
      var value = new intents_add_intent_pb.Request;
      reader.readMessage(value,intents_add_intent_pb.Request.deserializeBinaryFromReader);
      msg.setAddIntentRequest(value);
      break;
    case 7:
      var value = new intents_add_intent_pb.Response;
      reader.readMessage(value,intents_add_intent_pb.Response.deserializeBinaryFromReader);
      msg.setAddIntentResponse(value);
      break;
    case 8:
      var value = new indexer_nullifiers_pb.Request;
      reader.readMessage(value,indexer_nullifiers_pb.Request.deserializeBinaryFromReader);
      msg.setNullifiersRequest(value);
      break;
    case 9:
      var value = new indexer_nullifiers_pb.Response;
      reader.readMessage(value,indexer_nullifiers_pb.Response.deserializeBinaryFromReader);
      msg.setNullifiersResponse(value);
      break;
    case 10:
      var value = new indexer_unrevealed_commits_pb.Request;
      reader.readMessage(value,indexer_unrevealed_commits_pb.Request.deserializeBinaryFromReader);
      msg.setUnrevealedCommitsRequest(value);
      break;
    case 11:
      var value = new indexer_unrevealed_commits_pb.Response;
      reader.readMessage(value,indexer_unrevealed_commits_pb.Response.deserializeBinaryFromReader);
      msg.setUnrevealedCommitsResponse(value);
      break;
    case 12:
      var value = new indexer_unspent_resources_pb.Request;
      reader.readMessage(value,indexer_unspent_resources_pb.Request.deserializeBinaryFromReader);
      msg.setUnspentResourcesRequest(value);
      break;
    case 13:
      var value = new indexer_unspent_resources_pb.Response;
      reader.readMessage(value,indexer_unspent_resources_pb.Response.deserializeBinaryFromReader);
      msg.setUnspentResourcesResponse(value);
      break;
    case 14:
      var value = new mempool_dump_pb.Request;
      reader.readMessage(value,mempool_dump_pb.Request.deserializeBinaryFromReader);
      msg.setMempoolDumpRequest(value);
      break;
    case 15:
      var value = new mempool_dump_pb.Response;
      reader.readMessage(value,mempool_dump_pb.Response.deserializeBinaryFromReader);
      msg.setMempoolDumpResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Anoma.Protobuf.Envelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Anoma.Protobuf.Envelope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Anoma.Protobuf.Envelope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Envelope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSenderInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      node_info_pb.NodeInfo.serializeBinaryToWriter
    );
  }
  f = message.getMessageId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAnnouncement();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      announcement_pb.Announcement.serializeBinaryToWriter
    );
  }
  f = message.getListIntentsRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      intents_list_intents_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getListIntentsResponse();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      intents_list_intents_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getAddIntentRequest();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      intents_add_intent_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getAddIntentResponse();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      intents_add_intent_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getNullifiersRequest();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      indexer_nullifiers_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getNullifiersResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      indexer_nullifiers_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getUnrevealedCommitsRequest();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      indexer_unrevealed_commits_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getUnrevealedCommitsResponse();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      indexer_unrevealed_commits_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getUnspentResourcesRequest();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      indexer_unspent_resources_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getUnspentResourcesResponse();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      indexer_unspent_resources_pb.Response.serializeBinaryToWriter
    );
  }
  f = message.getMempoolDumpRequest();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      mempool_dump_pb.Request.serializeBinaryToWriter
    );
  }
  f = message.getMempoolDumpResponse();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      mempool_dump_pb.Response.serializeBinaryToWriter
    );
  }
};


/**
 * optional NodeInfo sender_info = 1;
 * @return {?proto.Anoma.Protobuf.NodeInfo}
 */
proto.Anoma.Protobuf.Envelope.prototype.getSenderInfo = function() {
  return /** @type{?proto.Anoma.Protobuf.NodeInfo} */ (
    jspb.Message.getWrapperField(this, node_info_pb.NodeInfo, 1));
};


/**
 * @param {?proto.Anoma.Protobuf.NodeInfo|undefined} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
*/
proto.Anoma.Protobuf.Envelope.prototype.setSenderInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.clearSenderInfo = function() {
  return this.setSenderInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Envelope.prototype.hasSenderInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes message_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Anoma.Protobuf.Envelope.prototype.getMessageId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes message_id = 2;
 * This is a type-conversion wrapper around `getMessageId()`
 * @return {string}
 */
proto.Anoma.Protobuf.Envelope.prototype.getMessageId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMessageId()));
};


/**
 * optional bytes message_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMessageId()`
 * @return {!Uint8Array}
 */
proto.Anoma.Protobuf.Envelope.prototype.getMessageId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMessageId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.setMessageId = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional Announce.Announcement announcement = 3;
 * @return {?proto.Anoma.Protobuf.Announce.Announcement}
 */
proto.Anoma.Protobuf.Envelope.prototype.getAnnouncement = function() {
  return /** @type{?proto.Anoma.Protobuf.Announce.Announcement} */ (
    jspb.Message.getWrapperField(this, announcement_pb.Announcement, 3));
};


/**
 * @param {?proto.Anoma.Protobuf.Announce.Announcement|undefined} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
*/
proto.Anoma.Protobuf.Envelope.prototype.setAnnouncement = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.Anoma.Protobuf.Envelope.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.clearAnnouncement = function() {
  return this.setAnnouncement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Envelope.prototype.hasAnnouncement = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Intents.List.Request list_intents_request = 4;
 * @return {?proto.Anoma.Protobuf.Intents.List.Request}
 */
proto.Anoma.Protobuf.Envelope.prototype.getListIntentsRequest = function() {
  return /** @type{?proto.Anoma.Protobuf.Intents.List.Request} */ (
    jspb.Message.getWrapperField(this, intents_list_intents_pb.Request, 4));
};


/**
 * @param {?proto.Anoma.Protobuf.Intents.List.Request|undefined} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
*/
proto.Anoma.Protobuf.Envelope.prototype.setListIntentsRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.Anoma.Protobuf.Envelope.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.clearListIntentsRequest = function() {
  return this.setListIntentsRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Envelope.prototype.hasListIntentsRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Intents.List.Response list_intents_response = 5;
 * @return {?proto.Anoma.Protobuf.Intents.List.Response}
 */
proto.Anoma.Protobuf.Envelope.prototype.getListIntentsResponse = function() {
  return /** @type{?proto.Anoma.Protobuf.Intents.List.Response} */ (
    jspb.Message.getWrapperField(this, intents_list_intents_pb.Response, 5));
};


/**
 * @param {?proto.Anoma.Protobuf.Intents.List.Response|undefined} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
*/
proto.Anoma.Protobuf.Envelope.prototype.setListIntentsResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.Anoma.Protobuf.Envelope.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.clearListIntentsResponse = function() {
  return this.setListIntentsResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Envelope.prototype.hasListIntentsResponse = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Intents.Add.Request add_intent_request = 6;
 * @return {?proto.Anoma.Protobuf.Intents.Add.Request}
 */
proto.Anoma.Protobuf.Envelope.prototype.getAddIntentRequest = function() {
  return /** @type{?proto.Anoma.Protobuf.Intents.Add.Request} */ (
    jspb.Message.getWrapperField(this, intents_add_intent_pb.Request, 6));
};


/**
 * @param {?proto.Anoma.Protobuf.Intents.Add.Request|undefined} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
*/
proto.Anoma.Protobuf.Envelope.prototype.setAddIntentRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.Anoma.Protobuf.Envelope.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.clearAddIntentRequest = function() {
  return this.setAddIntentRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Envelope.prototype.hasAddIntentRequest = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Intents.Add.Response add_intent_response = 7;
 * @return {?proto.Anoma.Protobuf.Intents.Add.Response}
 */
proto.Anoma.Protobuf.Envelope.prototype.getAddIntentResponse = function() {
  return /** @type{?proto.Anoma.Protobuf.Intents.Add.Response} */ (
    jspb.Message.getWrapperField(this, intents_add_intent_pb.Response, 7));
};


/**
 * @param {?proto.Anoma.Protobuf.Intents.Add.Response|undefined} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
*/
proto.Anoma.Protobuf.Envelope.prototype.setAddIntentResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.Anoma.Protobuf.Envelope.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.clearAddIntentResponse = function() {
  return this.setAddIntentResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Envelope.prototype.hasAddIntentResponse = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Indexer.Nullifiers.Request nullifiers_request = 8;
 * @return {?proto.Anoma.Protobuf.Indexer.Nullifiers.Request}
 */
proto.Anoma.Protobuf.Envelope.prototype.getNullifiersRequest = function() {
  return /** @type{?proto.Anoma.Protobuf.Indexer.Nullifiers.Request} */ (
    jspb.Message.getWrapperField(this, indexer_nullifiers_pb.Request, 8));
};


/**
 * @param {?proto.Anoma.Protobuf.Indexer.Nullifiers.Request|undefined} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
*/
proto.Anoma.Protobuf.Envelope.prototype.setNullifiersRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.Anoma.Protobuf.Envelope.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.clearNullifiersRequest = function() {
  return this.setNullifiersRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Envelope.prototype.hasNullifiersRequest = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Indexer.Nullifiers.Response nullifiers_response = 9;
 * @return {?proto.Anoma.Protobuf.Indexer.Nullifiers.Response}
 */
proto.Anoma.Protobuf.Envelope.prototype.getNullifiersResponse = function() {
  return /** @type{?proto.Anoma.Protobuf.Indexer.Nullifiers.Response} */ (
    jspb.Message.getWrapperField(this, indexer_nullifiers_pb.Response, 9));
};


/**
 * @param {?proto.Anoma.Protobuf.Indexer.Nullifiers.Response|undefined} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
*/
proto.Anoma.Protobuf.Envelope.prototype.setNullifiersResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.Anoma.Protobuf.Envelope.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.clearNullifiersResponse = function() {
  return this.setNullifiersResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Envelope.prototype.hasNullifiersResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Indexer.UnrevealedCommits.Request unrevealed_commits_request = 10;
 * @return {?proto.Anoma.Protobuf.Indexer.UnrevealedCommits.Request}
 */
proto.Anoma.Protobuf.Envelope.prototype.getUnrevealedCommitsRequest = function() {
  return /** @type{?proto.Anoma.Protobuf.Indexer.UnrevealedCommits.Request} */ (
    jspb.Message.getWrapperField(this, indexer_unrevealed_commits_pb.Request, 10));
};


/**
 * @param {?proto.Anoma.Protobuf.Indexer.UnrevealedCommits.Request|undefined} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
*/
proto.Anoma.Protobuf.Envelope.prototype.setUnrevealedCommitsRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.Anoma.Protobuf.Envelope.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.clearUnrevealedCommitsRequest = function() {
  return this.setUnrevealedCommitsRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Envelope.prototype.hasUnrevealedCommitsRequest = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Indexer.UnrevealedCommits.Response unrevealed_commits_response = 11;
 * @return {?proto.Anoma.Protobuf.Indexer.UnrevealedCommits.Response}
 */
proto.Anoma.Protobuf.Envelope.prototype.getUnrevealedCommitsResponse = function() {
  return /** @type{?proto.Anoma.Protobuf.Indexer.UnrevealedCommits.Response} */ (
    jspb.Message.getWrapperField(this, indexer_unrevealed_commits_pb.Response, 11));
};


/**
 * @param {?proto.Anoma.Protobuf.Indexer.UnrevealedCommits.Response|undefined} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
*/
proto.Anoma.Protobuf.Envelope.prototype.setUnrevealedCommitsResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.Anoma.Protobuf.Envelope.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.clearUnrevealedCommitsResponse = function() {
  return this.setUnrevealedCommitsResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Envelope.prototype.hasUnrevealedCommitsResponse = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Indexer.UnspentResources.Request unspent_resources_request = 12;
 * @return {?proto.Anoma.Protobuf.Indexer.UnspentResources.Request}
 */
proto.Anoma.Protobuf.Envelope.prototype.getUnspentResourcesRequest = function() {
  return /** @type{?proto.Anoma.Protobuf.Indexer.UnspentResources.Request} */ (
    jspb.Message.getWrapperField(this, indexer_unspent_resources_pb.Request, 12));
};


/**
 * @param {?proto.Anoma.Protobuf.Indexer.UnspentResources.Request|undefined} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
*/
proto.Anoma.Protobuf.Envelope.prototype.setUnspentResourcesRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.Anoma.Protobuf.Envelope.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.clearUnspentResourcesRequest = function() {
  return this.setUnspentResourcesRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Envelope.prototype.hasUnspentResourcesRequest = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Indexer.UnspentResources.Response unspent_resources_response = 13;
 * @return {?proto.Anoma.Protobuf.Indexer.UnspentResources.Response}
 */
proto.Anoma.Protobuf.Envelope.prototype.getUnspentResourcesResponse = function() {
  return /** @type{?proto.Anoma.Protobuf.Indexer.UnspentResources.Response} */ (
    jspb.Message.getWrapperField(this, indexer_unspent_resources_pb.Response, 13));
};


/**
 * @param {?proto.Anoma.Protobuf.Indexer.UnspentResources.Response|undefined} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
*/
proto.Anoma.Protobuf.Envelope.prototype.setUnspentResourcesResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.Anoma.Protobuf.Envelope.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.clearUnspentResourcesResponse = function() {
  return this.setUnspentResourcesResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Envelope.prototype.hasUnspentResourcesResponse = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Mempool.Dump.Request mempool_dump_request = 14;
 * @return {?proto.Anoma.Protobuf.Mempool.Dump.Request}
 */
proto.Anoma.Protobuf.Envelope.prototype.getMempoolDumpRequest = function() {
  return /** @type{?proto.Anoma.Protobuf.Mempool.Dump.Request} */ (
    jspb.Message.getWrapperField(this, mempool_dump_pb.Request, 14));
};


/**
 * @param {?proto.Anoma.Protobuf.Mempool.Dump.Request|undefined} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
*/
proto.Anoma.Protobuf.Envelope.prototype.setMempoolDumpRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.Anoma.Protobuf.Envelope.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.clearMempoolDumpRequest = function() {
  return this.setMempoolDumpRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Envelope.prototype.hasMempoolDumpRequest = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Mempool.Dump.Response mempool_dump_response = 15;
 * @return {?proto.Anoma.Protobuf.Mempool.Dump.Response}
 */
proto.Anoma.Protobuf.Envelope.prototype.getMempoolDumpResponse = function() {
  return /** @type{?proto.Anoma.Protobuf.Mempool.Dump.Response} */ (
    jspb.Message.getWrapperField(this, mempool_dump_pb.Response, 15));
};


/**
 * @param {?proto.Anoma.Protobuf.Mempool.Dump.Response|undefined} value
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
*/
proto.Anoma.Protobuf.Envelope.prototype.setMempoolDumpResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.Anoma.Protobuf.Envelope.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Envelope} returns this
 */
proto.Anoma.Protobuf.Envelope.prototype.clearMempoolDumpResponse = function() {
  return this.setMempoolDumpResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Envelope.prototype.hasMempoolDumpResponse = function() {
  return jspb.Message.getField(this, 15) != null;
};


goog.object.extend(exports, proto.Anoma.Protobuf);