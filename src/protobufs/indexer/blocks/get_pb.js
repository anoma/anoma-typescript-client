// source: indexer/blocks/get.proto
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
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var node_info_pb = require('../../node_info_pb.js');
goog.object.extend(proto, node_info_pb);
var indexer_blocks_block_pb = require('../../indexer/blocks/block_pb.js');
goog.object.extend(proto, indexer_blocks_block_pb);
goog.exportSymbol('proto.Anoma.Protobuf.Indexer.Blocks.Get.Request', null, global);
goog.exportSymbol('proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.IndexCase', null, global);
goog.exportSymbol('proto.Anoma.Protobuf.Indexer.Blocks.Get.Response', null, global);
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
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.oneofGroups_);
};
goog.inherits(proto.Anoma.Protobuf.Indexer.Blocks.Get.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.displayName = 'proto.Anoma.Protobuf.Indexer.Blocks.Get.Request';
}
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
proto.Anoma.Protobuf.Indexer.Blocks.Get.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.repeatedFields_, null);
};
goog.inherits(proto.Anoma.Protobuf.Indexer.Blocks.Get.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.displayName = 'proto.Anoma.Protobuf.Indexer.Blocks.Get.Response';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.IndexCase = {
  INDEX_NOT_SET: 0,
  AFTER: 2,
  BEFORE: 3
};

/**
 * @return {proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.IndexCase}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.getIndexCase = function() {
  return /** @type {proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.IndexCase} */(jspb.Message.computeOneofCase(this, proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.oneofGroups_[0]));
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
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeInfo: (f = msg.getNodeInfo()) && node_info_pb.NodeInfo.toObject(includeInstance, f),
    after: jspb.Message.getFieldWithDefault(msg, 2, 0),
    before: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Request}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Anoma.Protobuf.Indexer.Blocks.Get.Request;
  return proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Request}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new node_info_pb.NodeInfo;
      reader.readMessage(value,node_info_pb.NodeInfo.deserializeBinaryFromReader);
      msg.setNodeInfo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAfter(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBefore(value);
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
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      node_info_pb.NodeInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional Anoma.Protobuf.NodeInfo node_info = 1;
 * @return {?proto.Anoma.Protobuf.NodeInfo}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.getNodeInfo = function() {
  return /** @type{?proto.Anoma.Protobuf.NodeInfo} */ (
    jspb.Message.getWrapperField(this, node_info_pb.NodeInfo, 1));
};


/**
 * @param {?proto.Anoma.Protobuf.NodeInfo|undefined} value
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Request} returns this
*/
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.setNodeInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Request} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.clearNodeInfo = function() {
  return this.setNodeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.hasNodeInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 after = 2;
 * @return {number}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.getAfter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Request} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.setAfter = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Request} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.clearAfter = function() {
  return jspb.Message.setOneofField(this, 2, proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.hasAfter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 before = 3;
 * @return {number}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.getBefore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Request} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.setBefore = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Request} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.clearBefore = function() {
  return jspb.Message.setOneofField(this, 3, proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Request.prototype.hasBefore = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.repeatedFields_ = [1];



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
proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    blocksList: jspb.Message.toObjectList(msg.getBlocksList(),
    indexer_blocks_block_pb.Block.toObject, includeInstance)
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
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Response}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Anoma.Protobuf.Indexer.Blocks.Get.Response;
  return proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Response}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new indexer_blocks_block_pb.Block;
      reader.readMessage(value,indexer_blocks_block_pb.Block.deserializeBinaryFromReader);
      msg.addBlocks(value);
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
proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      indexer_blocks_block_pb.Block.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Anoma.Protobuf.Indexer.Blocks.Block blocks = 1;
 * @return {!Array<!proto.Anoma.Protobuf.Indexer.Blocks.Block>}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.prototype.getBlocksList = function() {
  return /** @type{!Array<!proto.Anoma.Protobuf.Indexer.Blocks.Block>} */ (
    jspb.Message.getRepeatedWrapperField(this, indexer_blocks_block_pb.Block, 1));
};


/**
 * @param {!Array<!proto.Anoma.Protobuf.Indexer.Blocks.Block>} value
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Response} returns this
*/
proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.prototype.setBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Block=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Block}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.prototype.addBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Anoma.Protobuf.Indexer.Blocks.Block, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Get.Response} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Get.Response.prototype.clearBlocksList = function() {
  return this.setBlocksList([]);
};


goog.object.extend(exports, proto.Anoma.Protobuf.Indexer.Blocks.Get);
