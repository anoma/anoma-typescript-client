// source: indexer/blocks/root.proto
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
goog.exportSymbol('proto.Anoma.Protobuf.Indexer.Blocks.Root.Request', null, global);
goog.exportSymbol('proto.Anoma.Protobuf.Indexer.Blocks.Root.Response', null, global);
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
proto.Anoma.Protobuf.Indexer.Blocks.Root.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Anoma.Protobuf.Indexer.Blocks.Root.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Anoma.Protobuf.Indexer.Blocks.Root.Request.displayName = 'proto.Anoma.Protobuf.Indexer.Blocks.Root.Request';
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
proto.Anoma.Protobuf.Indexer.Blocks.Root.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Anoma.Protobuf.Indexer.Blocks.Root.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Anoma.Protobuf.Indexer.Blocks.Root.Response.displayName = 'proto.Anoma.Protobuf.Indexer.Blocks.Root.Response';
}



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
proto.Anoma.Protobuf.Indexer.Blocks.Root.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.Anoma.Protobuf.Indexer.Blocks.Root.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Root.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeInfo: (f = msg.getNodeInfo()) && node_info_pb.NodeInfo.toObject(includeInstance, f)
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
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Root.Request}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Anoma.Protobuf.Indexer.Blocks.Root.Request;
  return proto.Anoma.Protobuf.Indexer.Blocks.Root.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Root.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Root.Request}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Request.deserializeBinaryFromReader = function(msg, reader) {
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
proto.Anoma.Protobuf.Indexer.Blocks.Root.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Anoma.Protobuf.Indexer.Blocks.Root.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Root.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      node_info_pb.NodeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Anoma.Protobuf.NodeInfo node_info = 1;
 * @return {?proto.Anoma.Protobuf.NodeInfo}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Request.prototype.getNodeInfo = function() {
  return /** @type{?proto.Anoma.Protobuf.NodeInfo} */ (
    jspb.Message.getWrapperField(this, node_info_pb.NodeInfo, 1));
};


/**
 * @param {?proto.Anoma.Protobuf.NodeInfo|undefined} value
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Root.Request} returns this
*/
proto.Anoma.Protobuf.Indexer.Blocks.Root.Request.prototype.setNodeInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Root.Request} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Request.prototype.clearNodeInfo = function() {
  return this.setNodeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Request.prototype.hasNodeInfo = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.Anoma.Protobuf.Indexer.Blocks.Root.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.Anoma.Protobuf.Indexer.Blocks.Root.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Root.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    root: msg.getRoot_asB64()
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
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Root.Response}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Anoma.Protobuf.Indexer.Blocks.Root.Response;
  return proto.Anoma.Protobuf.Indexer.Blocks.Root.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Root.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Root.Response}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRoot(value);
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
proto.Anoma.Protobuf.Indexer.Blocks.Root.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Anoma.Protobuf.Indexer.Blocks.Root.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Anoma.Protobuf.Indexer.Blocks.Root.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoot_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes root = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Response.prototype.getRoot = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes root = 1;
 * This is a type-conversion wrapper around `getRoot()`
 * @return {string}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Response.prototype.getRoot_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRoot()));
};


/**
 * optional bytes root = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRoot()`
 * @return {!Uint8Array}
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Response.prototype.getRoot_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRoot()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Anoma.Protobuf.Indexer.Blocks.Root.Response} returns this
 */
proto.Anoma.Protobuf.Indexer.Blocks.Root.Response.prototype.setRoot = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


goog.object.extend(exports, proto.Anoma.Protobuf.Indexer.Blocks.Root);
