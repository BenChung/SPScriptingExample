import { JSONRPCServerAndClient, SimpleJSONRPCMethod } from "json-rpc-2.0";
export interface IClientMarshaled extends Disposable {
    get Handle(): number;
    dispose(serverNotified: boolean): void;
}
export interface IObserver<T> extends AsyncIterable<T>, IClientMarshaled {
}
export declare class MarshalingServer {
    srv: JSONRPCServerAndClient;
    private marshalled;
    private handleMax;
    constructor(server: JSONRPCServerAndClient);
    track(o: IClientMarshaled, handle?: number): number;
    untrack(o: IClientMarshaled): void;
}
export declare abstract class ClientMarshaled implements IClientMarshaled {
    private handle;
    private lifetime;
    private server;
    private disposed;
    private methods;
    get Handle(): number;
    constructor(server: MarshalingServer | undefined, lifetime?: string, demarshal?: any | undefined);
    protected addMethod(mth: String, handler: SimpleJSONRPCMethod): void;
    toJSON(): object;
    [Symbol.dispose](): void;
    dispose(serverNotified: boolean): void;
    marshal(): any;
}
