// source: indexer/blocks/block.proto
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

goog.exportSymbol('proto.Anoma.Protobuf.Indexer.Blocks.Block', null, global);
goog.exportSymbol('proto.Anoma.Protobuf.Indexer.Blocks.Transaction', null, global);
goog.exportSymbol('proto.Anoma.Protobuf.Indexer.Blocks.Transaction.ResultCase', null, global);
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
proto.Anoma.Protobuf.Indexer.Blocks.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Anoma.Protobuf.Indexer.Blocks.Transaction.oneofGroups_);
};
goog.inherits(proto.Anoma.Protobuf.Indexer.Blocks.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Anoma.Protobuf.Indexer.Blocks.Transaction.displayName = 'proto.Anoma.Protobuf.Indexer.Blocks.Transaction';
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
proto.Anoma.Protobuf.Indexer.Blocks.Block = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Anoma.Protobuf.Indexer.Blocks.Block.repeatedFields_, null);
};
goog.inherits(proto.Anoma.Protobuf.Indexer.Blocks.Block, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Anoma.Protobuf.Indexer.Blocks.Block.displayName = 'proto.Anoma.Protobuf.Indexer.Blocks.Block';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.ResultCase = {
  RESULT_NOT_SET: 0,
  ERROR: 2,
  SUCCESS: 3
};

/**
 * @return {proto.Anoma.Protobuf.Indexer.Blocks.Transaction.ResultCase}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.getResultCase = function() {
  return /** @type {proto.Anoma.Protobuf.Indexer.Blocks.Transaction.ResultCase} */(jspb.Message.computeOneofCase(this, proto.Anoma.Protobuf.Indexer.Blocks.Transaction.oneofGroups_[0]));
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
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.Anoma.Protobuf.Indexer.Blocks.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: msg.getCode_asB64(),
    error: jspb.Message.getFieldWithDefault(msg, 2, ""),
    success: msg.getSuccess_asB64()
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
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Transaction}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Anoma.Protobuf.Indexer.Blocks.Transaction;
  return proto.Anoma.Protobuf.Indexer.Blocks.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Transaction}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSuccess(value);
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
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Anoma.Protobuf.Indexer.Blocks.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes code = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.getCode = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes code = 1;
 * This is a type-conversion wrapper around `getCode()`
 * @return {string}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.getCode_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCode()));
};


/**
 * optional bytes code = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCode()`
 * @return {!Uint8Array}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.getCode_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCode()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Transaction} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.setCode = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Transaction} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.setError = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.Anoma.Protobuf.Indexer.Blocks.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Transaction} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.clearError = function() {
  return jspb.Message.setOneofField(this, 2, proto.Anoma.Protobuf.Indexer.Blocks.Transaction.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes success = 3;
 * @return {!(string|Uint8Array)}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.getSuccess = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes success = 3;
 * This is a type-conversion wrapper around `getSuccess()`
 * @return {string}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.getSuccess_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSuccess()));
};


/**
 * optional bytes success = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSuccess()`
 * @return {!Uint8Array}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.getSuccess_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSuccess()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Transaction} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.setSuccess = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.Anoma.Protobuf.Indexer.Blocks.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Transaction} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.clearSuccess = function() {
  return jspb.Message.setOneofField(this, 3, proto.Anoma.Protobuf.Indexer.Blocks.Transaction.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Transaction.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Anoma.Protobuf.Indexer.Blocks.Block.repeatedFields_ = [1];



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
proto.Anoma.Protobuf.Indexer.Blocks.Block.prototype.toObject = function(opt_includeInstance) {
  return proto.Anoma.Protobuf.Indexer.Blocks.Block.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Block} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Indexer.Blocks.Block.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.Anoma.Protobuf.Indexer.Blocks.Transaction.toObject, includeInstance),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Block}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Block.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Anoma.Protobuf.Indexer.Blocks.Block;
  return proto.Anoma.Protobuf.Indexer.Blocks.Block.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Block} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Block}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Block.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Anoma.Protobuf.Indexer.Blocks.Transaction;
      reader.readMessage(value,proto.Anoma.Protobuf.Indexer.Blocks.Transaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
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
proto.Anoma.Protobuf.Indexer.Blocks.Block.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Anoma.Protobuf.Indexer.Blocks.Block.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Block} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Indexer.Blocks.Block.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Anoma.Protobuf.Indexer.Blocks.Transaction.serializeBinaryToWriter
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * repeated Transaction transactions = 1;
 * @return {!Array<!proto.Anoma.Protobuf.Indexer.Blocks.Transaction>}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Block.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.Anoma.Protobuf.Indexer.Blocks.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Anoma.Protobuf.Indexer.Blocks.Transaction, 1));
};


/**
 * @param {!Array<!proto.Anoma.Protobuf.Indexer.Blocks.Transaction>} value
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Block} returns this
*/
proto.Anoma.Protobuf.Indexer.Blocks.Block.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Transaction}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Block.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Anoma.Protobuf.Indexer.Blocks.Transaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Block} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Block.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};


/**
 * optional uint32 height = 2;
 * @return {number}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Block.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Block} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Block.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


goog.object.extend(exports, proto.Anoma.Protobuf.Indexer.Blocks);
