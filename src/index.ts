import * as listIntents from "./protobufs/intents/list_intents_pb"
import * as addIntent from "./protobufs/intents/add_intent_pb";
import * as composeIntents from "./protobufs/intents/compose_pb";
import * as verifyIntent from "./protobufs/intents/verify_pb";
import * as listNullifiers from "./protobufs/indexer/nullifiers_pb"
import * as listUnrevealedCommits from "./protobufs/indexer/unrevealed_commits_pb"
import * as listUnspentResources from "./protobufs/indexer/unspent_resources_pb"
import * as getBlock from "./protobufs/indexer/blocks/get_pb"
import * as rootBlock from "./protobufs/indexer/blocks/root_pb"
import * as lastBlock from "./protobufs/indexer/blocks/latest_pb"
import * as filterBlock from "./protobufs/indexer/blocks/filter_pb"
import * as runNock from "./protobufs/nock/run_pb"
import * as proveNock from "./protobufs/nock/prove_pb"
import {Filter} from "./protobufs/indexer/blocks/filter_pb"
import * as addTransactionCandidate from "./protobufs/mempool/add_transaction_pb"
import * as dumpMempool from "./protobufs/mempool/dump_pb"
import {
    BlockServiceClient, IndexerServiceClient, IntentsServiceClient, MempoolServiceClient, NockServiceClient
} from "./protobufs/anoma_grpc_pb";
import {Intent} from "./protobufs/intents/intent_pb";
import {Block} from "./protobufs/indexer/blocks/block_pb";
import * as grpc from '@grpc/grpc-js';
import {Input} from "./protobufs/nock/input_pb";

export class AnomaClient {
    hostname: string;
    node_id: string;

    constructor(hostname: string, node_id: string) {
        this.hostname = hostname;
        this.node_id = node_id;
    }

    /**
     * I return a list of intens currently in the intentpool.
     * @param callback Callback to handle the result.
     */
    listIntents(callback: (err: any, result: string[] | undefined) => void) {
        const client = new IntentsServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new listIntents.Request();
        client.listIntents(req, function (err: any, response: listIntents.Response | undefined) {
            callback(err, response?.getIntentsList_asB64());
        });

    }

    /**
     * I add an intent to the intentpool.
     * @param intent A base64 encoded representation of the intent.
     * @param callback Callback to handle the result.
     */
    addIntent(intent: Intent, callback: (err: any) => void) {
        const client = new IntentsServiceClient(this.hostname, grpc.credentials.createInsecure());

        const req = new addIntent.Request();
        req.setIntent(intent);

        client.addIntent(req, function (err: any, _response: addIntent.Response | undefined) {
            callback(err);
        });
    }

    /**
     * Given two intents, I compose them into a single intent.
     * @param intent1 A base64 encoded intent.
     * @param intent2 A base64 encoded intent.
     * @param callback Callback to handle the result.
     */
    composeIntents(intent1: Intent, intent2: Intent, callback: (err: any, result: string | undefined) => void) {
        const client = new IntentsServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new composeIntents.Request();

        req.setIntentsList([intent1, intent2]);
        client.compose(req, function (err: any, response: composeIntents.Response | undefined) {
            callback(err, response?.getIntent()?.getIntent_asB64());
        });
    }

    /**
     * I verify the correctness of an intent.
     * @param intent A base64 encoded intent.
     * @param callback Callback to handle the result.
     */
    verifyIntent(intent: Intent, callback: (err: any, result: boolean | undefined) => void) {
        const client = new IntentsServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new verifyIntent.Request();
        req.setIntent(intent);

        client.verify(req, function (err: any, response: verifyIntent.Response | undefined) {
            callback(err, response?.getValid());
        });
    }

    /**
     * I list all the nullifiers from the indexer. Each nullifier is base64 encoded.
     * @param callback Callback to handle the result.
     */
    listNullifiers(callback: (err: any, result: string[] | undefined) => void) {
        const client = new IndexerServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new listNullifiers.Request();

        client.listNullifiers(req, function (err: any, response: listNullifiers.Response | undefined) {
            callback(err, response?.getNullifiersList_asB64());
        });
    }

    /**
     * I list all unrevealed commits from the indexer. Each commit is base64 encoded.
     * @param callback Callback to handle the result.
     */
    listUnrevealedCommits(callback: (err: any, result: string[] | undefined) => void) {
        const client = new IndexerServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new listUnrevealedCommits.Request();

        client.listUnrevealedCommits(req, function (err: any, response: listUnrevealedCommits.Response | undefined) {
            callback(err, response?.getCommitsList_asB64());
        });
    }

    /**
     * I list all unspent resources.
     * Each resource is base64 encoded.
     * @param callback Callback to handle the result.
     */
    listUnspentResources(callback: (err: any, result: string[] | undefined) => void) {
        const client = new IndexerServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new listUnspentResources.Request();

        client.listUnspentResources(req, function (err: any, response: listUnspentResources.Response | undefined) {
            callback(err, response?.getUnspentResourcesList_asB64())
        });
    }

    /**
     * I return the blocks before the given block height.
     * @param block_height The height of the block up to which we want to retrieve blocks.
     * @param callback Callback to handle the result.
     */
    getBlockBefore(block_height: number, callback: (err: any, result: Block[] | undefined) => void) {
        const client = new BlockServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new getBlock.Request();
        req.setBefore(block_height);

        client.get(req, function (err: any, response: getBlock.Response | undefined) {
            callback(err, response?.getBlocksList());
        });
    }

    /**
     * I return all blocks starting from the given block height.
     * @param block_height The height of the block from which I should return blocks.
     * @param callback Callback to handle the result.
     */
    getBlockAfter(block_height: number, callback: (err: any, result: Block[] | undefined) => void) {
        const client = new BlockServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new getBlock.Request();
        req.setAfter(block_height);

        client.get(req, function (err: any, response: getBlock.Response | undefined) {
            callback(err, response?.getBlocksList());
        });
    }

    /**
     * I return the root of the blocks.
     * The root is base64 encoded.
     * @param callback Callback to handle the result.
     */
    getRoot(callback: (err: any, result: string | undefined) => void) {
        const client = new BlockServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new rootBlock.Request();

        client.root(req, function (err: any, response: rootBlock.Response | undefined) {
            callback(err, response?.getRoot_asB64());
        });
    }

    /**
     * I return the latest block from the chain.
     * @param callback Callback to handle the result.
     */
    getLatest(callback: (err: any, result: Block | undefined) => void) {
        const client = new BlockServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new lastBlock.Request();

        client.latest(req, function (err: any, response: lastBlock.Response | undefined) {
            callback(err, response?.getBlock());
        });
    }

    /**
     * I return all resources that match the given filters.
     * @param kinds A list of base64 encoded filters that will match the resource kind.
     * @param owners A list of base64 encoded names that will match the resource owner.
     * @param callback Callback to handle the result.
     */
    filter(kinds: string[], owners: string[], callback: (err: any, result: string[] | undefined) => void) {
        const client = new BlockServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new filterBlock.Request();

        const ownerFilters = owners.map(value => {
            const filter = new Filter();
            filter.setOwner(value);
            return filter;
        });

        const kindFilters = kinds.map(value => {
            const filter = new Filter();
            filter.setKind(value);
            return filter;
        });

        req.setFiltersList(ownerFilters.concat(kindFilters));

        client.filter(req, function (err: any, response: filterBlock.Response | undefined) {
            callback(err, response?.getResourcesList_asB64());
        });
    }

    /**
     * I add a transaction candidate to the mempool.
     * Transaction candidates should be base64 encoded jammed nock nouns.
     * @param transaction_candidate A base64 encoded jammed nock noun.
     * @param callback Callback to handle the result.
     */
    addToMempool(transaction_candidate: string, callback: (err: any) => void) {
        const client = new MempoolServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new addTransactionCandidate.Request();

        req.setTransaction(transaction_candidate);

        client.add(req, function (err: any, _response: addTransactionCandidate.Response | undefined) {
            callback(err);
        });
    }

    /**
     * I return all the transaction candidates currently in the mempool.
     * Each transaction candidate is base64 encoded.
     * @param callback Callback to handle the result.
     */
    dumpMempool(callback: (err: any, result: string[] | undefined) => void) {
        const client = new MempoolServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new dumpMempool.Request();

        client.dump(req, function (err: any, response: dumpMempool.Response | undefined) {
            callback(err, response?.getTransactionCandidatesList_asB64());
        });
    }

    /**
     * I prove a given nock program.
     * @param jammed_nock A base64 encoding of a jammed nock program.
     * @param private_inputs A list of  base64 encodings of jammed nock nouns.
     * @param public_inputs A list of  base64 encodings of jammed nock nouns.
     * @param callback Callback to handle the result.
     */
    prove(jammed_nock: string, private_inputs: string[], public_inputs: string[], callback: (err: any, result: {
        success: string | undefined; hints: string[]; error: string | undefined
    }) => void) {
        const client = new NockServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new proveNock.Request();

        // set in the program
        req.setJammedProgram(jammed_nock);

        // set the private inputs
        const priv_inputs_jammed = private_inputs.map(value => {
            const input = new Input();
            input.setJammed(value);
            return input;
        })
        req.setPrivateInputsList(priv_inputs_jammed);

        // set the public inputs
        const pub_inputs_jammed = public_inputs.map(value => {
            const input = new Input();
            input.setJammed(value);
            return input;
        })
        req.setPublicInputsList(pub_inputs_jammed);

        client.prove(req, function (err: any, response: proveNock.Response | undefined) {
            const error = response?.getError()?.getError();
            const result = response?.getSuccess()?.getResult_asB64()

            // concat all the hints into a single list
            const hints = response?.getSuccess()?.getOutputList_asB64() || []
            const errorHints = response?.getError()?.getOutputList_asB64() || []
            const allHints = hints.concat(errorHints);

            callback(err, {"success": result, "error": error, "hints": allHints});
        });
    }

    /**
     * I run the given nock program.
     * @param jammed_nock A base64 encoding of a jammed nock program.
     * @param inputs A list of  base64 encodings of jammed nock nouns.
     * @param callback Callback to handle the result.
     */
    run(jammed_nock: string, inputs: string[], callback: (err: any, result: {
        success: string | undefined; hints: string[]; error: string | undefined
    }) => void) {
        const client = new NockServiceClient(this.hostname, grpc.credentials.createInsecure());
        const req = new runNock.Request();

        // set in the program
        req.setJammedProgram(jammed_nock);

        // set the inputs
        const inputsJammed = inputs.map(value => {
            const input = new Input();
            input.setJammed(value);
            return input;
        })
        req.setInputsList(inputsJammed);

        client.run(req, function (err: any, response: runNock.Response | undefined) {
            const error = response?.getError()?.getError();
            const result = response?.getSuccess()?.getResult_asB64()

            // concat all the hints into a single list
            const hints = response?.getSuccess()?.getOutputList_asB64() || []
            const errorHints = response?.getError()?.getOutputList_asB64() || []
            const allHints = hints.concat(errorHints);

            callback(err, {"success": result, "error": error, "hints": allHints});
        });
    }

}