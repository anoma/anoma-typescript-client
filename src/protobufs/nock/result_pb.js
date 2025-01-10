// source: nock/result.proto
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

goog.exportSymbol('proto.Anoma.Protobuf.Nock.Error', null, global);
goog.exportSymbol('proto.Anoma.Protobuf.Nock.Success', null, global);
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
proto.Anoma.Protobuf.Nock.Success = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Anoma.Protobuf.Nock.Success.repeatedFields_, null);
};
goog.inherits(proto.Anoma.Protobuf.Nock.Success, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Anoma.Protobuf.Nock.Success.displayName = 'proto.Anoma.Protobuf.Nock.Success';
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
proto.Anoma.Protobuf.Nock.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Anoma.Protobuf.Nock.Error.repeatedFields_, null);
};
goog.inherits(proto.Anoma.Protobuf.Nock.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Anoma.Protobuf.Nock.Error.displayName = 'proto.Anoma.Protobuf.Nock.Error';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Anoma.Protobuf.Nock.Success.repeatedFields_ = [2];



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
proto.Anoma.Protobuf.Nock.Success.prototype.toObject = function(opt_includeInstance) {
  return proto.Anoma.Protobuf.Nock.Success.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Anoma.Protobuf.Nock.Success} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Nock.Success.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: msg.getResult_asB64(),
    outputList: msg.getOutputList_asB64()
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
 * @return {!proto.Anoma.Protobuf.Nock.Success}
 */
proto.Anoma.Protobuf.Nock.Success.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Anoma.Protobuf.Nock.Success;
  return proto.Anoma.Protobuf.Nock.Success.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Anoma.Protobuf.Nock.Success} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Anoma.Protobuf.Nock.Success}
 */
proto.Anoma.Protobuf.Nock.Success.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addOutput(value);
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
proto.Anoma.Protobuf.Nock.Success.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Anoma.Protobuf.Nock.Success.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Anoma.Protobuf.Nock.Success} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Nock.Success.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOutputList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes result = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Anoma.Protobuf.Nock.Success.prototype.getResult = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes result = 1;
 * This is a type-conversion wrapper around `getResult()`
 * @return {string}
 */
proto.Anoma.Protobuf.Nock.Success.prototype.getResult_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getResult()));
};


/**
 * optional bytes result = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResult()`
 * @return {!Uint8Array}
 */
proto.Anoma.Protobuf.Nock.Success.prototype.getResult_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getResult()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Anoma.Protobuf.Nock.Success} returns this
 */
proto.Anoma.Protobuf.Nock.Success.prototype.setResult = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated bytes output = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.Anoma.Protobuf.Nock.Success.prototype.getOutputList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes output = 2;
 * This is a type-conversion wrapper around `getOutputList()`
 * @return {!Array<string>}
 */
proto.Anoma.Protobuf.Nock.Success.prototype.getOutputList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getOutputList()));
};


/**
 * repeated bytes output = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOutputList()`
 * @return {!Array<!Uint8Array>}
 */
proto.Anoma.Protobuf.Nock.Success.prototype.getOutputList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getOutputList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.Anoma.Protobuf.Nock.Success} returns this
 */
proto.Anoma.Protobuf.Nock.Success.prototype.setOutputList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.Anoma.Protobuf.Nock.Success} returns this
 */
proto.Anoma.Protobuf.Nock.Success.prototype.addOutput = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Anoma.Protobuf.Nock.Success} returns this
 */
proto.Anoma.Protobuf.Nock.Success.prototype.clearOutputList = function() {
  return this.setOutputList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Anoma.Protobuf.Nock.Error.repeatedFields_ = [2];



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
proto.Anoma.Protobuf.Nock.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.Anoma.Protobuf.Nock.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Anoma.Protobuf.Nock.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Nock.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getFieldWithDefault(msg, 1, ""),
    outputList: msg.getOutputList_asB64()
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
 * @return {!proto.Anoma.Protobuf.Nock.Error}
 */
proto.Anoma.Protobuf.Nock.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Anoma.Protobuf.Nock.Error;
  return proto.Anoma.Protobuf.Nock.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Anoma.Protobuf.Nock.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Anoma.Protobuf.Nock.Error}
 */
proto.Anoma.Protobuf.Nock.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addOutput(value);
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
proto.Anoma.Protobuf.Nock.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Anoma.Protobuf.Nock.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Anoma.Protobuf.Nock.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Anoma.Protobuf.Nock.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOutputList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
};


/**
 * optional string error = 1;
 * @return {string}
 */
proto.Anoma.Protobuf.Nock.Error.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Anoma.Protobuf.Nock.Error} returns this
 */
proto.Anoma.Protobuf.Nock.Error.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated bytes output = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.Anoma.Protobuf.Nock.Error.prototype.getOutputList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes output = 2;
 * This is a type-conversion wrapper around `getOutputList()`
 * @return {!Array<string>}
 */
proto.Anoma.Protobuf.Nock.Error.prototype.getOutputList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getOutputList()));
};


/**
 * repeated bytes output = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOutputList()`
 * @return {!Array<!Uint8Array>}
 */
proto.Anoma.Protobuf.Nock.Error.prototype.getOutputList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getOutputList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.Anoma.Protobuf.Nock.Error} returns this
 */
proto.Anoma.Protobuf.Nock.Error.prototype.setOutputList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.Anoma.Protobuf.Nock.Error} returns this
 */
proto.Anoma.Protobuf.Nock.Error.prototype.addOutput = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Anoma.Protobuf.Nock.Error} returns this
 */
proto.Anoma.Protobuf.Nock.Error.prototype.clearOutputList = function() {
  return this.setOutputList([]);
};


goog.object.extend(exports, proto.Anoma.Protobuf.Nock);
