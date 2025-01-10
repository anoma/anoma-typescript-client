// package: Anoma.Protobuf.Indexer.Blocks
// file: indexer/blocks/block.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Transaction extends jspb.Message { 
    getCode(): Uint8Array | string;
    getCode_asU8(): Uint8Array;
    getCode_asB64(): string;
    setCode(value: Uint8Array | string): Transaction;

    hasError(): boolean;
    clearError(): void;
    getError(): string;
    setError(value: string): Transaction;

    hasSuccess(): boolean;
    clearSuccess(): void;
    getSuccess(): Uint8Array | string;
    getSuccess_asU8(): Uint8Array;
    getSuccess_asB64(): string;
    setSuccess(value: Uint8Array | string): Transaction;

    getResultCase(): Transaction.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        code: Uint8Array | string,
        error: string,
        success: Uint8Array | string,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
        ERROR = 2,
        SUCCESS = 3,
    }

}

export class Block extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<Transaction>;
    setTransactionsList(value: Array<Transaction>): Block;
    addTransactions(value?: Transaction, index?: number): Transaction;
    getHeight(): number;
    setHeight(value: number): Block;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Block.AsObject;
    static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Block;
    static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
    export type AsObject = {
        transactionsList: Array<Transaction.AsObject>,
        height: number,
    }
}
