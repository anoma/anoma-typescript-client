import * as announce_pb from './proto/anoma_pb';
import * as service from './proto/anoma_grpc_pb';
import * as grpc from '@grpc/grpc-js';

export function connect(address: string, port: number, creds?: grpc.ChannelCredentials)
    : service.IntentsClient {
    if (typeof creds == 'undefined') {
        creds = grpc.credentials.createInsecure();
    }
    let target: string = address + ':' + port;
    return new service.IntentsClient(target, creds)
}
