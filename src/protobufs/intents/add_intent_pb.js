// source: intents/add_intent.proto
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

var intents_intent_pb = require('../intents/intent_pb.js');
goog.object.extend(proto, intents_intent_pb);
var node_info_pb = require('../node_info_pb.js');
goog.object.extend(proto, node_info_pb);
goog.exportSymbol('proto.Anoma.Protobuf.Intents.Add.Request', null, global);
goog.exportSymbol('proto.Anoma.Protobuf.Intents.Add.Response', null, global);
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
proto.Anoma.Protobuf.Intents.Add.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Anoma.Protobuf.Intents.Add.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Anoma.Protobuf.Intents.Add.Request.displayName = 'proto.Anoma.Protobuf.Intents.Add.Request';
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
proto.Anoma.Protobuf.Intents.Add.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Anoma.Protobuf.Intents.Add.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Anoma.Protobuf.Intents.Add.Response.displayName = 'proto.Anoma.Protobuf.Intents.Add.Response';
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
proto.Anoma.Protobuf.Intents.Add.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.Anoma.Protobuf.Intents.Add.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Anoma.Protobuf.Intents.Add.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Intents.Add.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
nodeInfo: (f = msg.getNodeInfo()) && node_info_pb.NodeInfo.toObject(includeInstance, f),
intent: (f = msg.getIntent()) && intents_intent_pb.Intent.toObject(includeInstance, f)
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
 * @return {!proto.Anoma.Protobuf.Intents.Add.Request}
 */
proto.Anoma.Protobuf.Intents.Add.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Anoma.Protobuf.Intents.Add.Request;
  return proto.Anoma.Protobuf.Intents.Add.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Anoma.Protobuf.Intents.Add.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Anoma.Protobuf.Intents.Add.Request}
 */
proto.Anoma.Protobuf.Intents.Add.Request.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new intents_intent_pb.Intent;
      reader.readMessage(value,intents_intent_pb.Intent.deserializeBinaryFromReader);
      msg.setIntent(value);
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
proto.Anoma.Protobuf.Intents.Add.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Anoma.Protobuf.Intents.Add.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Anoma.Protobuf.Intents.Add.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Intents.Add.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      node_info_pb.NodeInfo.serializeBinaryToWriter
    );
  }
  f = message.getIntent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      intents_intent_pb.Intent.serializeBinaryToWriter
    );
  }
};


/**
 * optional Anoma.Protobuf.NodeInfo node_info = 1;
 * @return {?proto.Anoma.Protobuf.NodeInfo}
 */
proto.Anoma.Protobuf.Intents.Add.Request.prototype.getNodeInfo = function() {
  return /** @type{?proto.Anoma.Protobuf.NodeInfo} */ (
    jspb.Message.getWrapperField(this, node_info_pb.NodeInfo, 1));
};


/**
 * @param {?proto.Anoma.Protobuf.NodeInfo|undefined} value
 * @return {!proto.Anoma.Protobuf.Intents.Add.Request} returns this
*/
proto.Anoma.Protobuf.Intents.Add.Request.prototype.setNodeInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Intents.Add.Request} returns this
 */
proto.Anoma.Protobuf.Intents.Add.Request.prototype.clearNodeInfo = function() {
  return this.setNodeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Intents.Add.Request.prototype.hasNodeInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Anoma.Protobuf.Intents.Intent intent = 2;
 * @return {?proto.Anoma.Protobuf.Intents.Intent}
 */
proto.Anoma.Protobuf.Intents.Add.Request.prototype.getIntent = function() {
  return /** @type{?proto.Anoma.Protobuf.Intents.Intent} */ (
    jspb.Message.getWrapperField(this, intents_intent_pb.Intent, 2));
};


/**
 * @param {?proto.Anoma.Protobuf.Intents.Intent|undefined} value
 * @return {!proto.Anoma.Protobuf.Intents.Add.Request} returns this
*/
proto.Anoma.Protobuf.Intents.Add.Request.prototype.setIntent = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Anoma.Protobuf.Intents.Add.Request} returns this
 */
proto.Anoma.Protobuf.Intents.Add.Request.prototype.clearIntent = function() {
  return this.setIntent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Anoma.Protobuf.Intents.Add.Request.prototype.hasIntent = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.Anoma.Protobuf.Intents.Add.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.Anoma.Protobuf.Intents.Add.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Anoma.Protobuf.Intents.Add.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Intents.Add.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
result: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.Anoma.Protobuf.Intents.Add.Response}
 */
proto.Anoma.Protobuf.Intents.Add.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Anoma.Protobuf.Intents.Add.Response;
  return proto.Anoma.Protobuf.Intents.Add.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Anoma.Protobuf.Intents.Add.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Anoma.Protobuf.Intents.Add.Response}
 */
proto.Anoma.Protobuf.Intents.Add.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
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
proto.Anoma.Protobuf.Intents.Add.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Anoma.Protobuf.Intents.Add.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Anoma.Protobuf.Intents.Add.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Intents.Add.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.Anoma.Protobuf.Intents.Add.Response.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Anoma.Protobuf.Intents.Add.Response} returns this
 */
proto.Anoma.Protobuf.Intents.Add.Response.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.Anoma.Protobuf.Intents.Add);
