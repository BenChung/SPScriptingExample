import { TypedJSONRPCServerAndClient } from "json-rpc-2.0";
import { ClientMethods, ServerMethods } from "./method_defs";
import { MarshalingServer } from "./marshaling";
import { Transport } from "./transport/transport";
import { Agent } from "../wrappers/agent";
export type CommandHandler<A extends Agent<A>> = (context: A, parameters: any) => Promise<void>;
export declare class ClientRuntime {
    private server;
    private client;
    serverAndClient: TypedJSONRPCServerAndClient<ClientMethods, ServerMethods, void, {
        abort: AbortSignal | undefined;
    } | void>;
    marshalling_server: MarshalingServer;
    private in_flight;
    private transport;
    private name;
    private connected;
    private event_handlers;
    private handlers;
    constructor(name: string, transport: Transport);
    onEvent(name: string, handler: () => Promise<void>): void;
    register_unit_handler(name: string, handler: CommandHandler<any>): void;
    register_message_handler(): void;
    connect(): Promise<void>;
    register(): Promise<void>;
}
